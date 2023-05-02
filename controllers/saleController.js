const Sale = require("../models/Sale");

exports.getAllSales = async (req, res) => {
  try {
    const sales = await Sale.find({});
    res.json(sales);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch sales" });
  }
};
exports.getSaleById = async (req, res) => {
  try {
    const sale = await Sale.findById(req.params.id);
    if (sale) {
      res.json(sale);
    } else {
      res.status(404).json({ error: "Sale not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch sale" });
  }
};

exports.getAllApartments = async (req, res) => {
  try {
    const sales = await Sale.find({});
    const apartments = sales.reduce((apartmentList, sale) => {
      return [...apartmentList, ...sale.apartments];
    }, []);
    res.json(apartments);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch apartments" });
  }
};

exports.getApartmentById = async (req, res) => {
  try {
    const { apartmentId } = req.params;
    const sales = await Sale.find({});

    const apartment = sales.reduce((foundApartment, sale) => {
      if (foundApartment) return foundApartment;

      const found = sale.apartments.find(
        (apartment) => apartment._id.toString() === apartmentId
      );
      return found || null;
    }, null);

    if (apartment) {
      res.json(apartment);
    } else {
      res.status(404).json({ error: "Apartment not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch apartment" });
  }
};
