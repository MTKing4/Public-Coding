import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:shop_app/providers/cart_provider.dart';

class ProductDetails extends StatefulWidget {
  final Map<String, Object> product;
  const ProductDetails({super.key, required this.product});

  @override
  State<ProductDetails> createState() => _ProductDetailsState();
}

class _ProductDetailsState extends State<ProductDetails> {
  
  int selectedSize = 0;

  void addToCart(){
    if(selectedSize != 0){
      Provider.of<CartProvider>(context, listen: false)      // another argument used here is listen : false, used for functions and buttons because they don't need continuous listening
      .addProduct({
          'id': widget.product['id'],
          'title': widget.product['title'],
          'price': widget.product['price'],
          'imageUrl': widget.product['imageUrl'],
          'company': widget.product['company'],
          'size': selectedSize,
        });

        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Item Added to Cart'))       // used to pop up a message in the app
        );
    }
    else{
      ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Please Select a size'))       // used to pop up a message in the app
        );
    }
  }
  
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Details')),
      body: Column(
        children: [
          Text(
            widget.product['title'] as String,
            // widget.product['title'] as String,
            style: Theme.of(context).textTheme.titleLarge,
          ),
          const Spacer(flex: 1,), // Spacer is a dynamic space between objects (best for images spacing), flex is the size of the space compared to the total flexes in the screen, total flexes is the sum of flex of all the spacers in the screen, right now we have 2 spacers, and 3 flexes, in this case, 1 flex is 1 third of the flexes, so it is 1/3,
          Padding(
            padding: const EdgeInsets.all(18.0),
            child: Image.asset(widget.product['imageUrl'] as String, height: 250,),     // we use widget. because it is in a stateful widget
          ),
          const Spacer(flex: 2,), // flex size here is 2/3, two thirds the size of the total flex
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: Container(
              height: 250,
              width: double.infinity, // double.infinity makes it take the entire width
              decoration: BoxDecoration(
                color: const Color.fromARGB(125, 179, 174, 216),
                borderRadius: BorderRadius.circular(40),
              ),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Text(
                    '\$${widget.product['price'] as double}',
                    style: Theme.of(context).textTheme.titleLarge,
                  ),
                  const SizedBox(height: 10),
                  SizedBox(
                    height: 50,
                    child: ListView.builder(
                      scrollDirection: Axis.horizontal,
                      itemCount: (widget.product['sizes'] as List<int>).length,
                      itemBuilder: (context, index) {
                        final size = (widget.product['sizes'] as List<int>)[index];
                        return Padding(
                          padding: const EdgeInsets.all(5.0),
                          child: GestureDetector(
                            onTap: () {
                              setState(() {
                                selectedSize = size;
                              });
                            },
                            child: Chip(label: Text(size.toString(),),
                            backgroundColor: selectedSize == size ? Theme.of(context).colorScheme.primary
                            : null,
                            ),
                          ),
                        );
                      },
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.all(20.0),
                    child: ElevatedButton.icon(
                      icon: Icon(Icons.shopping_cart_outlined),
                      onPressed: addToCart,
                      style: ElevatedButton.styleFrom(
                        backgroundColor: Theme.of(context).colorScheme.primary,
                        fixedSize: Size(350, 50),     // can also use double.infinity to get the maximum size for the available screen size
                        iconColor: Colors.black
                      ),
                      label: const Text(
                        'Add To Cart',
                        style: TextStyle(color: Colors.black, fontSize: 18),
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}
