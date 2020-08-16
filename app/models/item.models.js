module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        No: String,
        Name: String,
        Brand: String,
        Type: String,
        Capacity: String,
        Quantity: String,
        Price: String
      },
      {collection: 'stock_list'},
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const api = mongoose.model("stock_list", schema);
    return api;
  };