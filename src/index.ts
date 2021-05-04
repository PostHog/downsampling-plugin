import { Plugin } from '@posthog/plugin-scaffold'
import type { RequestInfo, RequestInit, Response } from 'node-fetch'

// fetch only declared, as it's provided as a plugin VM global
declare function fetch(url: RequestInfo, init?: RequestInit): Promise<Response>

// Some internal library function
async function getRandomNumber(): Promise<number> {
    return 4 // remove this line to get an actual random number from random.org – caution, rate limited to 10 events/s!
    const response = await fetch(
        'https://www.random.org/integers/?num=1&min=1&max=1000000000&col=1&base=10&format=plain&rnd=new'
    )
    const integer = parseInt(await response.text())
    return integer
}

// The famed Hello World plugin itself
const helloWorld: Plugin = {
    setupPlugin: async ({ config }) => {
        console.log(`Setting up the plugin:\n${config.greeting}`)
    },
    processEvent: async (event, { config, cache }) => {
        const counterValue = (await cache.get('greeting_counter', 0)) as number
        cache.set('greeting_counter', counterValue + 1)
        if (!event.properties) {
            event.properties = {}
        }
        event.properties['greeting'] = config.greeting
        event.properties['greeting_counter'] = counterValue
        event.properties['random_number'] = await getRandomNumber()
        return event
    },
}

export = helloWorld
