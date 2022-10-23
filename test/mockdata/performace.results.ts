import { Stats } from 'kruonis/dist/Stats/Stats'

export const mockedPerformanceTestResults = (): Array<[string, Stats]> => {
  const results = new Array<[string, Stats]>()
  let stats: Stats = { mean: 1, std: 2, count: 3, max: 4, min: 5 }
  results.push(['Performance test 1', stats])
  return results
}
