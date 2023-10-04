// import Account from "../../account/models/AccountModal.js";
// import { Op } from "sequelize";
// import { Product, Variant, SellerProduct } from "../models/index.js"; // Replace with the correct path to your models

// // Create a new product with variants
// export const CreateProduct = async (req, res) => {
//   try {
//     const { productName, basePrice, AccountId, variants } = req.body;

//     // Check if a product with the same name already exists for the given account
//     const existingProduct = await Product.findOne({
//       where: { name: productName },
//     });
//     console.log({existingProduct:existingProduct.id});
//     let productId = existingProduct?.id;
//     let product;
//     if (!existingProduct) {
//       // If the product doesn't exist, create a new one
//       product = await Product.create({
//         name: productName,
//         MRP: basePrice,
//         SellerId: AccountId,
//       });
//       productId = product.id;
//     }

//     // Find or create the Account
//     let [account] = await Account.findOrCreate({
//       where: { id: AccountId },
//     });
// console.log({productId});
//     // Check if a SellerProduct association already exists for the product and account
//     const existingSellerProduct = await SellerProduct.findOne({
//       where: { id: productId },
//     });
//     let sellerProductId;
//     let sellerProduct
//     if (existingSellerProduct) {
//       // If the SellerProduct already exists, update its price and quantity
//       await existingSellerProduct.update({
//         price: basePrice,
//         quantity: variants.reduce((total, variant) => total + variant.stock, 0),
//       });
//       sellerProductId = existingSellerProduct.id;
//     } else {
//       // If the SellerProduct doesn't exist, create a new one
//        sellerProduct = await SellerProduct.create({
//         price: basePrice,
//         quantity: variants.reduce((total, variant) => total + variant.stock, 0),
//         AccountId: account.id,
//         ProductId: productId,
//       });
//       sellerProductId = sellerProduct.id;
//     }

//     // Create variants for the product
//     const createdVariants = await Promise.all(
//       variants.map(async (variant) => {
//         const { size, color, stock, images } = variant;
//         const newVariant = await Variant.create({
//           size,
//           color,
//           stock,
//           images,
//           ProductId: sellerProductId,
//         });

//         return newVariant;
//       })
//     );

//     res.status(201).json({
//       productId: productId, // Return the product ID
//       product: existingProduct || product, // Use the existing or newly created product
//       sellerProduct: existingSellerProduct || sellerProduct, // Use the existing or newly created SellerProduct
//       variants: createdVariants,
//     });
//   } catch (error) {
//     console.error("Error creating product:", error);
//     res.status(500).json({ error: error });
//   }
// };

// // Get products with optional search criteria
// export const getProducts = async (req, res) => {
//   try {
//     const { productName, sellerName, minPrice, maxPrice } = req.query;

//     // Build the search query
//     const query = {
//       include: [
//         {
//           model: Variant,
//           include: [
//             {
//               model: SellerProduct,
//               include: [
//                 {
//                   model: Seller,
//                   where: {},
//                   required: true,
//                 },
//               ],
//             },
//           ],
//         },
//       ],
//     };

//     // Add search criteria based on query parameters
//     if (productName) {
//       query.where = {
//         ...query.where,
//         name: {
//           [Op.iLike]: `%${productName}%`, // Case-insensitive search
//         },
//       };
//     }

//     if (sellerName) {
//       query.include[0].include[0].include[0].where = {
//         ...query.include[0].include[0].include[0].where,
//         name: {
//           [Op.iLike]: `%${sellerName}%`, // Case-insensitive search
//         },
//       };
//     }

//     if (minPrice && maxPrice) {
//       query.include[0].include[0].where = {
//         ...query.include[0].include[0].where,
//         price: {
//           [Op.between]: [minPrice, maxPrice],
//         },
//       };
//     } else if (minPrice) {
//       query.include[0].include[0].where = {
//         ...query.include[0].include[0].where,
//         price: {
//           [Op.gte]: minPrice,
//         },
//       };
//     } else if (maxPrice) {
//       query.include[0].include[0].where = {
//         ...query.include[0].include[0].where,
//         price: {
//           [Op.lte]: maxPrice,
//         },
//       };
//     }

//     // Fetch products based on the search criteria
//     const products = await Product.findAll(query);

//     res.status(200).json({ products });
//   } catch (error) {
//     console.error("Error fetching products:", error);
//     res.status(500).json({ error: "Could not fetch products" });
//   }
// };
import Account from "../../account/models/AccountModal.js";
import { Op } from "sequelize";
import { Product, Variant, SellerProduct } from "../models/index.js"; // Replace with the correct path to your models

// // Create a new product with variants
// export const CreateProduct = async (req, res) => {
//   try {
//     const { productName, basePrice, AccountId, variants } = req.body;

//     // Check if a product with the same name already exists for the given account
//     const existingProduct = await Product.findOne({
//       where: { name: productName },
//     });
//     console.log({existingProduct:existingProduct.id});
//     let productId = existingProduct?.id;
//     let product;
//     if (!existingProduct) {
//       // If the product doesn't exist, create a new one
//       product = await Product.create({
//         name: productName,
//         MRP: basePrice,
//         SellerId: AccountId,
//       });
//       productId = product.id;
//     }

//     // Find or create the Account
//     let [account] = await Account.findOrCreate({
//       where: { id: AccountId },
//     });
// console.log({productId});
//     // Check if a SellerProduct association already exists for the product and account
//     const existingSellerProduct = await SellerProduct.findOne({
//       where: { id: productId },
//     });
//     let sellerProductId;
//     let sellerProduct
//     if (existingSellerProduct) {
//       // If the SellerProduct already exists, update its price and quantity
//       await existingSellerProduct.update({
//         price: basePrice,
//         quantity: variants.reduce((total, variant) => total + variant.stock, 0),
//       });
//       sellerProductId = existingSellerProduct.id;
//     } else {
//       // If the SellerProduct doesn't exist, create a new one
//        sellerProduct = await SellerProduct.create({
//         price: basePrice,
//         quantity: variants.reduce((total, variant) => total + variant.stock, 0),
//         AccountId: account.id,
//         ProductId: productId,
//       });
//       sellerProductId = sellerProduct.id;
//     }

//     // Create variants for the product
//     const createdVariants = await Promise.all(
//       variants.map(async (variant) => {
//         const { size, color, stock, images } = variant;
//         const newVariant = await Variant.create({
//           size,
//           color,
//           stock,
//           images,
//           ProductId: sellerProductId,
//         });

//         return newVariant;
//       })
//     );

//     res.status(201).json({
//       productId: productId, // Return the product ID
//       product: existingProduct || product, // Use the existing or newly created product
//       sellerProduct: existingSellerProduct || sellerProduct, // Use the existing or newly created SellerProduct
//       variants: createdVariants,
//     });
//   } catch (error) {
//     console.error("Error creating product:", error);
//     res.status(500).json({ error: error });
//   }
// };

// Create a new product with variants and associate specified variants with a seller product
// export const CreateProduct = async (req, res) => {
//   try {
//     const { productName, basePrice, AccountId, variants } = req.body;

//     // Find or create the seller
//     // let [seller] = await Seller.findOrCreate({
//     //   where: { id: sellerId },
//     // });

//     // Find or create the product based on its name
//     let [product] = await Product.findOrCreate({
//       where: { name: productName },
//       defaults: {
//         // name: productName,
//         // price: basePrice,
//         // AccountId: AccountId,
//         name: productName,
//         MRP: basePrice,
//         AccountId: AccountId,
//       },
//     });

//     // Create a SellerProduct association for the seller, product, and variants
//     const [sellerProduct] = await SellerProduct.findOrCreate({
//       where: {
//         ProductId: product.id,
//         AccountId,
//       },
//       defaults: {
//         price: basePrice,
//         AccountId: AccountId,
//         ProductId: product.id,
//       },
//     });

//     console.log({ product: product.id });
//     console.log({ sellerProduct: sellerProduct });
//     // Create or reuse variants for the product
//     const createdVariants = await Promise.all(
//       variants.map(async (variant) => {
//         const { size, color, stock, images } = variant;
//         let [existingVariant] = await Variant.findOrCreate({
//           where: {
//             ProductId: sellerProduct.ProductId,
//             AccountId: product.id,
//             size,
//             color,
//           },
//           defaults: {
//             size,
//             color,
//             stock,
//             images,
//             ProductId: sellerProduct.ProductId,
//             AccountId: sellerProduct.AccountId,
//             SellerProductId: sellerProduct.AccountId,
//           },
//         });

//         return existingVariant;
//       })
//     );

//     // Associate the SellerProduct with specified variants
//     // console.log({ createdVariants });
//     console.log({ createdVariants: JSON.stringify(createdVariants, null, 2) });
//     await sellerProduct.addVariants(createdVariants);

//     res.status(201).json({
//       product,
//       sellerProduct,
//       variants: createdVariants,
//     });
//   } catch (error) {
//     console.error("Error creating product:", error);
//     console.error("Error creating product:", error.message);
//     res.status(500).json({ error: "Could not create product" });
//   }
// };

// export const CreateProduct = async (req, res) => {
//   try {
//     const { productName, basePrice, AccountId, variants } = req.body;

//     // Find or create the product based on its name
//     const [product, productCreated] = await Product.findOrCreate({
//       where: { name: productName },
//       defaults: {
//         name: productName,
//         MRP: basePrice,
//         AccountId: AccountId,
//       },
//     });

//     // Create a SellerProduct association for the seller and product
//     const [sellerProduct, sellerProductCreated] = await SellerProduct.findOrCreate({
//       where: {
//         ProductId: product.id,
//         AccountId: AccountId,
//       },
//       defaults: {
//         price: basePrice,
//         AccountId: AccountId,
//         ProductId: product.id,
//         variants: [],
//       },
//     });

//     // // Create or reuse variants for the product
//     // const createdVariants = await Promise.all(
//     //   variants.map(async (variant) => {
//     //     const { size, color, stock, images } = variant;
//     //     const [existingVariant, variantCreated] = await Variant.findOrCreate({
//     //       where: {
//     //         ProductId: product.id,
//     //         size,
//     //         color,
//     //       },
//     //       defaults: {
//     //         size,
//     //         color,
//     //         stock,
//     //         images,
//     //         ProductId: product.id,
//     //         AccountId: AccountId, // Update with the correct reference
//     //         SellerProductId: sellerProduct.id, // Update with the correct reference
//     //       },
//     //     });

//     //     // Handle cases where a variant is found or created
//     //     if (variantCreated) {
//     //       // Handle logic for newly created variants
//     //     } else {
//     //       // Handle logic for existing variants
//     //     }

//     //     return existingVariant;
//     //   })
//     // );

// //     // Create or reuse variants for the product
// const createdVariants = await Promise.all(
//   variants.map(async (variant) => {
//     const { size, color, stock, images } = variant;
//     const [existingVariant, variantCreated] = await Variant.findOrCreate({
//       where: {
//         ProductId: product.id,
//         size,
//         color,
//       },
//       defaults: {
//         size,
//         color,
//         stock,
//         images,
//         ProductId: product.id,
//         AccountId: AccountId, // Update with the correct reference
//         SellerProductId: sellerProduct.id, // Update with the correct reference
//       },
//     });

//     // Handle cases where a variant is found or created
//     if (variantCreated) {
//       // Logic for newly created variants
//        // Associate the SellerProduct with specified variants
//       await sellerProduct.addVariants(variantCreated);
//       console.log(`Variant ${variantCreated} is newly created.`);
//     } else {
//       // Logic for existing variants
//       console.log(`Variant ${existingVariant} already exists.`);
//        // Associate the SellerProduct with specified variants
//     await sellerProduct.addVariants(existingVariant);

//       // You can add any specific logic for existing variants here
//     }

//     return existingVariant;
//   })
// );

//     res.status(201).json({
//       product,
//       sellerProduct,
//       variants: createdVariants,
//       productCreated,
//       sellerProductCreated,
//     });
//   } catch (error) {
//     console.error("Error creating product:", error);
//     res.status(500).json({ error: error.message || "Could not create product" });
//   }
// };

export const CreateProduct = async (req, res) => {
  try {
    const { productName, basePrice, AccountId, variants } = req.body;

    // Find or create the product based on its name
    let [product] = await Product.findOrCreate({
      where: { name: productName },
      defaults: {
        name: productName,
        MRP: basePrice,
        AccountId: AccountId,
      },
    });

    // Create or update the SellerProduct association for the seller and product
    const [sellerProduct, sellerProductCreated] =
      await SellerProduct.findOrCreate({
        where: {
          ProductId: product.id,
          AccountId: AccountId,
        },
        defaults: {
          price: basePrice,
          AccountId: AccountId,
          ProductId: product.id,
          variants: [], // Initialize an empty array for variants
        },
      });

    // Handle cases where a variant is found or created
    const createdVariants = [];

    for (const variantData of variants) {
      const { size, color, stock, images, variantId } = variantData;
      console.log({ variantData });
      // Check if a variant with the same ID already exists
      const existingVariant = await Variant.findOne({
        where: {
          size: size,
          color: color,
          ProductId: product.id,
          AccountId: AccountId,
        },
      });

      if (existingVariant) {
        // Variant with the same ID already exists, you can handle this case as needed
        // For example, you can skip it or update its properties
        // console.log(`Variant with ID ${variantId} already exists.`);
        // Check if the variant is not already associated with sellerProduct
        const isVariantAssociated = sellerProduct.variants.some(
          (variant) => variant.id === existingVariant.id
        );
        console.log({ isVariantAssociated, existingVariant:existingVariant.id });
        if (!isVariantAssociated) {
          // await sellerProduct.addVariant(existingVariant);
          await sellerProduct.variants.push({id:existingVariant.dataValues.id,sellerStock:stock});
          // Update the sellerProduct with the updated variants array
          await sellerProduct.save();
        }
      } else {
        // Variant with the same ID doesn't exist, create a new one
        const newVariant = await Variant.create({
          size,
          color,
          stock,
          images,
          ProductId: product.id,
          AccountId: AccountId,
        });
        createdVariants.push(newVariant);
        await sellerProduct.variants.push(createdVariants);
      }
    }

    // Update the sellerProduct variants association and save it
await sellerProduct.setVariants([...sellerProduct.variants, ...createdVariants]);


    res.status(201).json({
      product,
      sellerProduct,
      variants: createdVariants || existingVariant,
    });
  } catch (error) {
    console.error("Error creating product:", error);
    console.error("Error creating product:", error.message);
    res.status(500).json({ error: "Could not create product" });
  }
};

// Get products with optional search criteria
export const getProducts = async (req, res) => {
  try {
    const { productName, sellerName, minPrice, maxPrice } = req.query;

    // Build the search query
    const query = {
      include: [
        {
          model: Variant,
          include: [
            {
              model: SellerProduct,
              include: [
                {
                  model: Seller,
                  where: {},
                  required: true,
                },
              ],
            },
          ],
        },
      ],
    };

    // Add search criteria based on query parameters
    if (productName) {
      query.where = {
        ...query.where,
        name: {
          [Op.iLike]: `%${productName}%`, // Case-insensitive search
        },
      };
    }

    if (sellerName) {
      query.include[0].include[0].include[0].where = {
        ...query.include[0].include[0].include[0].where,
        name: {
          [Op.iLike]: `%${sellerName}%`, // Case-insensitive search
        },
      };
    }

    if (minPrice && maxPrice) {
      query.include[0].include[0].where = {
        ...query.include[0].include[0].where,
        price: {
          [Op.between]: [minPrice, maxPrice],
        },
      };
    } else if (minPrice) {
      query.include[0].include[0].where = {
        ...query.include[0].include[0].where,
        price: {
          [Op.gte]: minPrice,
        },
      };
    } else if (maxPrice) {
      query.include[0].include[0].where = {
        ...query.include[0].include[0].where,
        price: {
          [Op.lte]: maxPrice,
        },
      };
    }

    // Fetch products based on the search criteria
    const products = await Product.findAll(query);

    res.status(200).json({ products });
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Could not fetch products" });
  }
};
