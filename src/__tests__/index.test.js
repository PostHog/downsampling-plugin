const { createEvent, createIdentify, getMeta, resetMeta, clone } = require('@posthog/plugin-scaffold/test/utils')

const { processEvent } = require('..')

beforeEach(() => {
    resetMeta({
        config: {
            percentage: '100',
        },
    })
})

test('processEvent filters event', async () => {
    // create a random event
    const event0 = createEvent({ event: 'blah' })

    // TODO: Figure out how getMeta can manipulate meta

    for(let i=0; i < 100; i++) {
        const event1 = await processEvent(event0, getMeta())
        expect(event1).toEqual(event0)
    }
})


test('processEvent filters 0 events at 0 percent', async () => {
    // TODO
})
