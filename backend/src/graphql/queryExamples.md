mutation {
  characterCreateOne(record: { name: "John Doe", description: "A mysterious man" }) {
    record {
      _id
      name
      description
    }
  }
}

mutation {
  lessonCreateOne(record: { name: "Lezione 1", description: "A mysterious man", mainCharacter: "65076a96dbe10eea459203eb" }) {
    record {
      _id
      name
      description
    }
  }
}