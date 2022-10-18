const request = require("supertest");
const server = require("../server.js");

describe("POST testing", () => {
  it("Create a new article", async () => {
    await request(server)
      .post("/api/books")
      .send({
        title: "test",
        authors: "test",
        source: "test",
        published_date: "test",
        doi: "test",
        claim: "test",
        evidence: "test",
        se_practice: "test"
      })
      .expect(200)
      .then((response) => {
        assert.notDeepEqual(response.body, {
          title: "test",
          authors: "test",
          source: "test",
          published_date: "test",
          doi: "test",
          claim: "test",
          evidence: "test",
          se_practice: "test"
      })
      done();
    })
  });
});


describe('GET testing', () => {
  it('return all articles', (done) => {
    request(server)
      .get('/api/articles')
      .expect(200)
      .then((response) => {
        done()
      })
      .catch((err) => {
        done(err)
      })
  })
})