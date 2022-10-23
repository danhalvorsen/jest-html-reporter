import { ECANCELED } from 'constants'
import fs from 'fs'
import builder from 'xmlbuilder'
import HTMLReporter from '../src/htmlreporter'
import {
  mockedJestResponseMultipleTestResult,
  mockedJestResponseSingleTestResult,
} from './mockdata'
describe('generate', () => {
  describe('HTMLReporterWithPerformanceTestingResult', () => {
    it('should not have a element with this name -> ---report---', async () => {
      const mockedFS = jest.spyOn(fs, 'writeFileSync')
      mockedFS.mockImplementation()
      const reporter = new HTMLReporter({
        testData: mockedJestResponseSingleTestResult,
        options: {},
      })

      const report = await reporter.generate()
      expect(report).toBeDefined()
      expect(report?.toString().includes('---report---')).toBe(false)

      mockedFS.mockRestore()
    })
    it('should contain a element with class name -> suite-info-performance-report', async () => {
      const mockedFS = jest.spyOn(fs, 'writeFileSync')
      mockedFS.mockImplementation()
      const reporter = new HTMLReporter({
        testData: mockedJestResponseSingleTestResult,
        options: {},
      })

      const report = await reporter.generate()
      expect(report).toBeDefined()
      expect(report?.toString().includes('suite-info-performance-report')).toBe(
        true,
      )

      mockedFS.mockRestore()
    })
  })

  it('should contain a element with class name -> test-performance-data', async () => {
    const mockedFS = jest.spyOn(fs, 'writeFileSync')
    mockedFS.mockImplementation()
    const reporter = new HTMLReporter({
      testData: mockedJestResponseSingleTestResult,
      options: {},
    })

    const report = await reporter.generate()
    expect(report).toBeDefined()
    expect(report?.toString().includes('suite-info-performance-report')).toBe(
      true,
    )
    mockedFS.mockRestore()
  })
})
