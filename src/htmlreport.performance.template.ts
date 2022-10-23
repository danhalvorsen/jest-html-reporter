import { TestResult } from '@jest/test-result'
import { Stats } from 'kruonis'
import builder, { XMLElement } from 'xmlbuilder'
import { PerformanceTestResults } from './types'

export const suiteInfoPerformanceReportDiv = (
  parent: XMLElement,
  suite: TestResult,
  performanceTestResults: PerformanceTestResults,
): builder.XMLElement => {
  var totalExecutionTime = performanceTestResults.stats.map((e) => e[1].mean)
  var max = Math.max(...performanceTestResults.stats.map((e) => e[1].max))
  var min = Math.min(...performanceTestResults.stats.map((e) => e[1].min))
  var count = performanceTestResults.stats.map((e) => e[1].count)
  var avg = performanceTestResults.stats.map((e) => e[1].std)

  return parent
    .ele('div', { class: 'suite-info-performance-report' })
    .ele('div', { class: `${'suite-path'} ${totalExecutionTime}` })
}

export const testPerformanceDataDiv = (
  parent: XMLElement,
  suite: TestResult,
  performanceTestResults: PerformanceTestResults,
): builder.XMLElement => {
  return parent.ele('div', { class: 'test-performance-data' })
}
