import "package:flutter/material.dart";
import 'package:shop_app/global_variables.dart';
import 'package:shop_app/widgets/product_card.dart';
import 'package:shop_app/pages/product_details.dart';

class ProductList extends StatefulWidget {
  const ProductList({super.key});

  @override
  State<ProductList> createState() => _ProductListState();
}

class _ProductListState extends State<ProductList> {
  final List<String> filters = const ['All', 'Addidas', 'Nike', 'Bata'];

  // made it late and assigned it to filters[0] in init instead of here
  // because you can't use an initialized list in another initilized value
  late String selectedFilter;

  @override
  void initState() {
    super.initState();
    selectedFilter = filters[0];
  }

  @override
  Widget build(BuildContext context) {
    final size = MediaQuery.sizeOf(     // Inherited Widget vs Inherited Model: using sizeOf to listen only to the size changes, this is called Inherited Model, whereas .of listens to all changes, which is the case with Inherited Widget
      context); // MediaQuery gives useful information, like current platfrom, screen height, width, screen orientation, etc
            // MediaQuery.of(context).size    == Inherited Widget
            // MediaQuery.sizeOf(context)     == Inherited Model
            // other option to use is LayoutBuilder which uses constraints, it's the same but Layout builder is affected by constraints imposed by its parent widgets
    const border1 = OutlineInputBorder(
      borderSide: BorderSide(color: Color.fromRGBO(167, 167, 167, 1)),
      borderRadius: BorderRadius.horizontal(left: Radius.circular(50)),
    );


  Widget buildGestureDetector(BuildContext context, int index){
    final product = products[index];

    return GestureDetector(
            onTap: () {
              Navigator.of(context).push(
                // setting up naviagtion, pressing the card to navigate somewhere, push() puts a new screen on top, pop removes it (used for back button)
                MaterialPageRoute(
                  // MaterialPageRoute is platform Adaptive, works on android and ios
                  builder: (context) {
                    return ProductDetails(product: product);
                  },
                ),
              );
            },
            child: ProductCard(
              title: product['title'] as String,
              price: product['price'] as double,
              image:
                  product['imageUrl']
                      as String, // the map is saying this is an object so we need to tell it that it's a string value
              backgroundColor: index.isEven
                  ? const Color.fromRGBO(216, 240, 253, 1)
                  : const Color.fromARGB(125, 179, 174, 216),
            ),
          );
  }

    return Scaffold(
      body: SafeArea(
        // safeArea used to not place things on top bar or bottom bar
        child: Column(
          children: [
            Row(
              children: [
                Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: Text(
                    " Shoes\n Collection",
                    style: Theme.of(context).textTheme.titleLarge,
                  ),
                ),
                const Expanded(
                  // Expanded used to take as much space as possible dynamically depending on the device
                  child: TextField(
                    decoration: InputDecoration(
                      hintText: 'Search',
                      prefixIcon: Icon(Icons.search),
                      border: border1,
                      enabledBorder: border1,
                    ),
                  ),
                ),
              ],
            ),
            SizedBox(
              height: 120,
              child: ListView.builder(
                // views a list of items
                itemCount: filters.length,
                scrollDirection: Axis.horizontal,
                itemBuilder: (context, index) {
                  final filter = filters[index];
                  return Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 4.0),
                    child: GestureDetector(
                      onTap: () {
                        setState(() {
                          selectedFilter = filter;
                        });
                      },
                      child: Chip(
                        // the filter buttons
                        backgroundColor: selectedFilter == filter
                            ? Theme.of(context)
                                  .colorScheme
                                  .primary // Theme.of(context) is using inherited widget, going to the nearest Theme widget up the inheritance tree and bring its properties here, we used the primary color from our color scheme when it is the selected filter
                            : const Color.fromRGBO(245, 247, 249, 1),
                        side: const BorderSide(
                          color: Color.fromRGBO(230, 206, 97, 0.831),
                        ),
                        label: Text(filter),
                        labelStyle: const TextStyle(fontSize: 14),
                        padding: EdgeInsets.symmetric(
                          horizontal: 25,
                          vertical: 14,
                        ),
                        shape: StadiumBorder(),
                      ),
                    ),
                  );
                },
              ),
            ),

            Expanded(
              child: size.width > 1080
                  ? GridView.builder(               // using gridview for Chrome view
                      itemCount: products.length,
                      gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                        crossAxisCount: 2,
                        childAspectRatio: 2
                      ),
                      itemBuilder: (context, index) {
                        return buildGestureDetector(context, index);
                      },
                    )
                  : ListView.builder(         // or listview for mobile app
                      itemCount: products.length,
                      itemBuilder: (context, index) {
                        return buildGestureDetector(context, index);
                      },
                    ),
            ),
          ],
        ),
      ),
    );
  }
}
