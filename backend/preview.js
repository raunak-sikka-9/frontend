var FilePreviews = require("filepreviews")

var previews = new FilePreviews({
  debug: true,
  apiKey: "uYaFvhmxJVWwleStiT2GRQgy9O5yLM",
  apiSecret: "MuQlJYdJGcimiLRd0LYWxgqAS38QKY",
})

const genPreview = (url) => {
  previews.generate(url, function (err, result) {
    console.log(err)
    console.log(result.id)
    console.log(result.status)
  })
}

const retrievePreview = (id) => {
  previews.retrieve(id, function (err, result) {
    console.log(result)
  })
}

// genPreview("https://github.com/raunak-sikka-9/frontend/raw/master/backend/web%20design%20principles.pdf")
// genPreview("https://preview-gen.herokuapp.com/Canada.xlsx")
retrievePreview('193064d8-6af1-45e6-9768-4699b8093841')
