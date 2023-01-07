import { test } from 'tape'
import { satisfiesDependency, formatVersion } from '../../../utility/version.js'

test('with semver-max="5"', function (t) {
  const max5 = {
    max: '5',
    template: null,
    min: null,
    exact: []
  }
  t.test('renders', function (st) {
    const formatted = formatVersion(max5)
    st.equals(formatted, '~5', formatted)
    st.end()
  })

  t.test('5.999.999', function (st) {
    const satisfied = satisfiesDependency('5.999.999', max5)
    st.ok(satisfied, 'should satisfy')
    st.end()
  })
  t.test('5.0.0', function (st) {
    const satisfied = satisfiesDependency('5.0.0', max5)
    st.ok(satisfied, 'should satisfy')
    st.end()
  })

  t.test('6.0.0', function (st) {
    const satisfied = satisfiesDependency('6.0.0', max5)
    st.notOk(satisfied, 'should not satisfy')
    st.end()
  })
})

test('with semver-max="5.2"', function (t) {
  const max52 = {
    max: '5.2',
    template: null,
    min: null,
    exact: []
  }
  t.test('renders', function (st) {
    const formatted = formatVersion(max52)
    st.equals(formatted, '~5.2', formatted)
    st.end()
  })
  t.test('5.999.999', function (st) {
    const satisfied = satisfiesDependency('5.999.999', max52)
    st.notOk(satisfied, 'should not satisfy')
    st.end()
  })
  t.test('5.0.0', function (st) {
    const satisfied = satisfiesDependency('5.0.0', max52)
    st.ok(satisfied, 'should satisfy')
    st.end()
  })

  t.test('6.0.0', function (st) {
    const satisfied = satisfiesDependency('6.0.0', max52)
    st.notOk(satisfied, 'should not satisfy')
    st.end()
  })
})

test('with semver-max="5.2.1"', function (t) {
  const max521 = {
    max: '5.2.1',
    template: null,
    min: null,
    exact: []
  }
  t.test('renders', function (st) {
    const formatted = formatVersion(max521)
    st.equals(formatted, '<=5.2.1', formatted)
    st.end()
  })
  t.test('5.999.999', function (st) {
    const satisfied = satisfiesDependency('5.999.999', max521)
    st.notOk(satisfied, 'should not satisfy')
    st.end()
  })
  t.test('5.2.0', function (st) {
    const satisfied = satisfiesDependency('5.2.0', max521)
    st.ok(satisfied, 'should satisfy')
    st.end()
  })
  t.test('5.0.0', function (st) {
    const satisfied = satisfiesDependency('5.0.0', max521)
    st.ok(satisfied, 'should satisfy')
    st.end()
  })

  t.test('6.0.0', function (st) {
    const satisfied = satisfiesDependency('6.0.0', max521)
    st.notOk(satisfied, 'should not satisfy')
    st.end()
  })
})

test('with semver-min="5"', function (t) {
  const min5 = {
    min: '5',
    max: null,
    template: null,
    exact: []
  }
  t.test('renders', function (st) {
    const formatted = formatVersion(min5)
    st.equals(formatted, '>=5', formatted)
    st.end()
  })
  t.test('4.0.0', function (st) {
    const satisfied = satisfiesDependency('4.0.0', min5)
    st.notOk(satisfied, 'should not satisfy')
    st.end()
  })
  t.test('5.0.0', function (st) {
    const satisfied = satisfiesDependency('5.0.0', min5)
    st.ok(satisfied, 'should satisfy')
    st.end()
  })
  t.test('5.999.999', function (st) {
    const satisfied = satisfiesDependency('5.999.999', min5)
    st.ok(satisfied, 'should satisfy')
    st.end()
  })
  t.test('6.0.0', function (st) {
    const satisfied = satisfiesDependency('6.0.0', min5)
    st.ok(satisfied, 'should satisfy')
    st.end()
  })
})

test('with semver-min="5.2"', function (t) {
  const min52 = {
    min: '5.2',
    template: null,
    max: null,
    exact: []
  }
  t.test('renders', function (st) {
    const formatted = formatVersion(min52)
    st.equals(formatted, '>=5.2', formatted)
    st.end()
  })
  t.test('4.0.0', function (st) {
    const satisfied = satisfiesDependency('4.0.0', min52)
    st.notOk(satisfied, 'should not satisfy')
    st.end()
  })
  t.test('5.0.0', function (st) {
    const satisfied = satisfiesDependency('5.0.0', min52)
    st.notOk(satisfied, 'should not satisfy')
    st.end()
  })
  t.test('5.1.0', function (st) {
    const satisfied = satisfiesDependency('5.0.0', min52)
    st.notOk(satisfied, 'should not satisfy')
    st.end()
  })
  t.test('5.2.0', function (st) {
    const satisfied = satisfiesDependency('5.2.0', min52)
    st.ok(satisfied, 'should satisfy')
    st.end()
  })
  t.test('5.999.999', function (st) {
    const satisfied = satisfiesDependency('5.999.999', min52)
    st.ok(satisfied, 'should satisfy')
    st.end()
  })
  t.test('6.0.0', function (st) {
    const satisfied = satisfiesDependency('6.0.0', min52)
    st.ok(satisfied, 'should satisfy')
    st.end()
  })
})

test('with semver-min="5.2.1"', function (t) {
  const min521 = {
    min: '5.2.1',
    template: null,
    max: null,
    exact: []
  }
  t.test('renders', function (st) {
    const formatted = formatVersion(min521)
    st.equals(formatted, '>=5.2.1', formatted)
    st.end()
  })
  t.test('4.0.0', function (st) {
    const satisfied = satisfiesDependency('4.0.0', min521)
    st.notOk(satisfied, 'should not satisfy')
    st.end()
  })
  t.test('5.0.0', function (st) {
    const satisfied = satisfiesDependency('5.0.0', min521)
    st.notOk(satisfied, 'should not satisfy')
    st.end()
  })
  t.test('5.1.0', function (st) {
    const satisfied = satisfiesDependency('5.0.0', min521)
    st.notOk(satisfied, 'should not satisfy')
    st.end()
  })
  t.test('5.2.0', function (st) {
    const satisfied = satisfiesDependency('5.2.0', min521)
    st.notOk(satisfied, 'should not satisfy')
    st.end()
  })
  t.test('5.2.1', function (st) {
    const satisfied = satisfiesDependency('5.2.1', min521)
    st.ok(satisfied, 'should satisfy')
    st.end()
  })
  t.test('5.2.2', function (st) {
    const satisfied = satisfiesDependency('5.2.2', min521)
    st.ok(satisfied, 'should satisfy')
    st.end()
  })
  t.test('5.3.0', function (st) {
    const satisfied = satisfiesDependency('5.3.0', min521)
    st.ok(satisfied, 'should satisfy')
    st.end()
  })
  t.test('5.999.999', function (st) {
    const satisfied = satisfiesDependency('5.999.999', min521)
    st.ok(satisfied, 'should satisfy')
    st.end()
  })
  t.test('6.0.0', function (st) {
    const satisfied = satisfiesDependency('6.0.0', min521)
    st.ok(satisfied, 'should satisfy')
    st.end()
  })
})

test('with semver-min="5.2" and semver-max="5.4.1"', function (t) {
  const range5 = {
    min: '5.2',
    max: '5.4.1',
    template: null,
    exact: []
  }
  t.test('renders', function (st) {
    const formatted = formatVersion(range5)
    st.equals(formatted, '5.2 - 5.4.1', formatted)
    st.end()
  })
  t.test('4.0.0', function (st) {
    const satisfied = satisfiesDependency('4.0.0', range5)
    st.notOk(satisfied, 'should not satisfy')
    st.end()
  })
  t.test('5.0.0', function (st) {
    const satisfied = satisfiesDependency('5.0.0', range5)
    st.notOk(satisfied, 'should not satisfy')
    st.end()
  })
  t.test('5.1.0', function (st) {
    const satisfied = satisfiesDependency('5.0.0', range5)
    st.notOk(satisfied, 'should not satisfy')
    st.end()
  })
  t.test('5.2.0', function (st) {
    const satisfied = satisfiesDependency('5.2.0', range5)
    st.ok(satisfied, 'should satisfy')
    st.end()
  })
  t.test('5.2.1', function (st) {
    const satisfied = satisfiesDependency('5.2.1', range5)
    st.ok(satisfied, 'should satisfy')
    st.end()
  })
  t.test('5.2.2', function (st) {
    const satisfied = satisfiesDependency('5.2.2', range5)
    st.ok(satisfied, 'should satisfy')
    st.end()
  })
  t.test('5.3.0', function (st) {
    const satisfied = satisfiesDependency('5.3.0', range5)
    st.ok(satisfied, 'should satisfy')
    st.end()
  })
  t.test('5.4.1', function (st) {
    const satisfied = satisfiesDependency('5.4.1', range5)
    st.ok(satisfied, 'should satisfy')
    st.end()
  })
  t.test('5.4.2', function (st) {
    const satisfied = satisfiesDependency('5.4.2', range5)
    st.notOk(satisfied, 'should not satisfy')
    st.end()
  })
  t.test('5.5.0', function (st) {
    const satisfied = satisfiesDependency('5.5.0', range5)
    st.notOk(satisfied, 'should not satisfy')
    st.end()
  })
  t.test('6.0.0', function (st) {
    const satisfied = satisfiesDependency('6.0.0', range5)
    st.notOk(satisfied, 'should not satisfy')
    st.end()
  })
})

test('with semver="5.2.1"', function (t) {
  const template521 = {
    template: '5.2.1',
    max: null,
    min: null,
    exact: []
  }
  t.test('renders', function (st) {
    const formatted = formatVersion(template521)
    st.equals(formatted, '^5.2.1', formatted)
    st.end()
  })
  t.test('5.0.0', function (st) {
    const satisfied = satisfiesDependency('5.0.0', template521)
    st.notOk(satisfied, 'should not satisfy')
    st.end()
  })
  t.test('5.2.0', function (st) {
    const satisfied = satisfiesDependency('5.2.0', template521)
    st.notOk(satisfied, 'should not satisfy')
    st.end()
  })
  t.test('5.2.1', function (st) {
    const satisfied = satisfiesDependency('5.2.1', template521)
    st.ok(satisfied, 'should satisfy')
    st.end()
  })
  t.test('5.2.2', function (st) {
    const satisfied = satisfiesDependency('5.2.2', template521)
    st.notOk(satisfied, 'should not satisfy')
    st.end()
  })
  t.test('5.999.999', function (st) {
    const satisfied = satisfiesDependency('5.999.999', template521)
    st.notOk(satisfied, 'should not satisfy')
    st.end()
  })
  t.test('6.0.0', function (st) {
    const satisfied = satisfiesDependency('6.0.0', template521)
    st.notOk(satisfied, 'should not satisfy')
    st.end()
  })
})

test('with versions="asdf 5.2.1"', function (t) {
  const exact = {
    template: null,
    max: null,
    min: null,
    exact: ['asdf', '5.2.1']
  }
  t.test('5.2.1', function (st) {
    const satisfied = satisfiesDependency('5.2.1', exact)
    st.ok(satisfied, 'should satisfy')
    st.end()
  })
  t.test('asdf', function (st) {
    const satisfied = satisfiesDependency('asdf', exact)
    st.ok(satisfied, 'should satisfy')
    st.end()
  })
  t.test('renders', function (st) {
    const formatted = formatVersion(exact)
    st.equals(formatted, 'asdf || 5.2.1', formatted)
    st.end()
  })
  t.test('5.999.999', function (st) {
    const satisfied = satisfiesDependency('5.999.999', exact)
    st.notOk(satisfied, 'should not satisfy')
    st.end()
  })
  t.test('5.2.0', function (st) {
    const satisfied = satisfiesDependency('5.2.0', exact)
    st.notOk(satisfied, 'should not satisfy')
    st.end()
  })

  t.test('5.2.2', function (st) {
    const satisfied = satisfiesDependency('5.2.2', exact)
    st.notOk(satisfied, 'should not satisfy')
    st.end()
  })
  t.test('6.0.0', function (st) {
    const satisfied = satisfiesDependency('6.0.0', exact)
    st.notOk(satisfied, 'should not satisfy')
    st.end()
  })
})
