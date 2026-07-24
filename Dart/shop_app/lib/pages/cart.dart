import "package:flutter/material.dart";
import 'package:shop_app/providers/cart_provider.dart';
import 'package:provider/provider.dart';

class Cart extends StatefulWidget {
  const Cart({super.key});

  @override
  State<Cart> createState() => _CartState();
}

class _CartState extends State<Cart> {

  @override
  Widget build(BuildContext context) {
    // debugPrint(Provider.of<String>(context));     // printing value from state manager provider

    final cart = Provider.of<CartProvider>(context).cart;
    // final cart = context.watch<CartProvider>().cart;      // shorter syntax to the same line above

    return Scaffold(
      appBar: AppBar(title: Text('Cart')),
      body: ListView.builder(
        itemCount: cart.length,
        itemBuilder: (context, index) {
          final cartItem = cart[index];

          return ListTile(              // used with ListView, useful for displaying a list
            leading: CircleAvatar(      // leading to add something before our widget, Circle avatar is like the profile circle image
              backgroundImage: AssetImage(cartItem['imageUrl'] as String),
              radius: 45,
            ),
            trailing: IconButton(
              onPressed: (){
                showDialog(
                context: context,
                barrierDismissible: false,      // disallow clicking outside of the diaglog and dismiss it
                builder: (context){
                  return AlertDialog(
                    title: Text("Delete Item.", style: Theme.of(context).textTheme.titleMedium,),
                    content: Text("Are you sure you want to remove the item?"),
                    actions: [
                      TextButton(
                        onPressed: () {
                          // context.read<CartProvider>().removeProduct(cartItem);      shorter syntax for the same line below
                          Provider.of<CartProvider>(context, listen: false).removeProduct(cartItem);
                          Navigator.of(context).pop();
                        },
                        child: Text("Yes", style: TextStyle(color: Colors.red, fontWeight: FontWeight.bold)),
                      ),
                      TextButton(
                        onPressed: () {Navigator.of(context).pop();},     // dismiss with pressing no using pop
                        child: Text("No", style: TextStyle(color: Colors.blue, fontWeight: FontWeight.bold)),
                      ),
                    ],
                  );
                });
              },
            icon: const Icon(Icons.delete, color: Colors.red,)),
            title: Text(
              cartItem['title'].toString(),
              style: Theme.of(context).textTheme.bodySmall,
            ),
            subtitle: Text('Size: ${cartItem['size']}'),
          );
        },
      ),
    );
  }
}
