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
    const apartments = [];

    for (const sale of sales) {
      for (const apartment of sale.apartments) {
        apartments.push({
          apartment: apartment,
          parentProject: {
            _id: sale._id,
            title: sale.title,
            description: sale.description,
            images: sale.images,
            address: sale.address,
            location: sale.location,
            buildingType: sale.buildingType,
            floors: sale.floors,
            numberOfApartments: sale.numberOfApartments,
          },
        });
      }
    }

    res.json(apartments);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch apartments" });
  }
};

exports.getApartmentById = async (req, res) => {
  try {
    const { apartmentId } = req.params;
    const sales = await Sale.find({});

    let foundApartment = null;
    let parentProject = null;

    for (const sale of sales) {
      const apartment = sale.apartments.find(
        (apartment) => apartment._id.toString() === apartmentId
      );

      if (apartment) {
        foundApartment = apartment;
        parentProject = {
          _id: sale._id,
          title: sale.title,
          description: sale.description,
          images: sale.images,
          address: sale.address,
          location: sale.location,
          buildingType: sale.buildingType,
          floors: sale.floors,
          numberOfApartments: sale.numberOfApartments,
        };
        break;
      }
    }

    if (foundApartment) {
      res.json({
        apartment: foundApartment,
        parentProject: parentProject,
      });
    } else {
      res.status(404).json({ error: "Apartment not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch apartment" });
  }
};
