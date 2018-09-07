const { getFiveArticles, getFiveRandomArticles } = require('../logic/logic');


describe(" can get articles from server", () => {
    const url = "http://localhost:3030/api/article/politics"

    test(" get status 200", () => {
        return getFiveArticles(url).then(res => {
            expect(res.status).toBe(200);
        });

    });
    test('res.data exists', () => {
        return getFiveArticles(url).then(res => {
            expect(res.data).toBeDefined()
        })
    });
    test('res.data is an array', () => {
        return getFiveArticles(url).then(res => {
            expect(Array.isArray(res.data)).toBe(true)
        })
    });
    test('res.data length 6', () => {
        return getFiveArticles(url).then(res => {
            expect(res.data.length).toBe(6)
        })
    });
    test('res.data contains property keywords', () => {
        return getFiveArticles(url).then(res => {
            expect(res.data[0].keywords).toBeTruthy()
        })
    });
    // Jesse's AMAZING tests
    
    test('Returns an author\'s name', () => {
        return getFiveArticles(url).then(res => {
            expect(res.data[0].author).toBeTruthy()
        })
    });

    test('Returns an source', () => {
        return getFiveArticles(url).then(res => {
            expect(res.data[0].source).toBeTruthy()
        })
    });

    test('Returns a topic name', () => {
        return getFiveArticles(url).then(res => {
            expect(res.data[0].topic_name).toBeTruthy()
        })
    });

    test('Returns a subtopic name', () => {
        return getFiveArticles(url).then(res => {
            expect(res.data[0].subtopic_name).toBeTruthy()
        })
    });

    test('Returns a subtopic name', () => {
        return getFiveArticles(url).then(res => {
            expect(res.data[0].subtopic_name).toBeTruthy()
        })
    });

    test('Returns an article title', () => {
        return getFiveArticles(url).then(res => {
            expect(res.data[0].title).toBeTruthy()
        })
    });


    // test("can add 4", () => {
    //     expect(canAdd(2, 2)).toBe(4)

    // })

})

describe.only("Can get five sets of articles based on random topic", () => {
    const random = Math.floor(Math.random() * 2);
    let topics = ["politics", "business", "education"]
    let topic = topics[random];
    const URL = `http://localhost:3030/api/onload/${topic}`

    test("Can get status 200", () => {
        return getFiveRandomArticles(URL).then(res => {
            expect(res.status).toBe(200);
        })
    })

    test("Topic passed in matches topic property", ()=> {
        return getFiveRandomArticles(URL).then(res => {
            expect(res.data[0].topic_name).toEqual(topic)
        })
    })

    test("random never exceeds topics length", () => {
        expect(random).toBeLessThan(topics.length);
    })

    test("Response is an array", () => {
        return getFiveRandomArticles(URL).then(res => {
            expect(Array.isArray(res.data)).toBe(true)
        })
    })

    test('res.data exists', () => {
        return getFiveRandomArticles(URL).then(res => {
            expect(res.data).toBeDefined();
        })
    });

})