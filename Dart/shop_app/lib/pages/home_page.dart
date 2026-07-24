import 'package:flutter/material.dart';
import 'package:shop_app/widgets/product_list.dart';
import 'package:shop_app/pages/cart.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
    
    int currentPage = 0; 
    List<Widget> pages = const [
      ProductList(),
      Cart(),
    ];


  @override
  Widget build(BuildContext context) {


    return Scaffold(
      body: IndexedStack(       // pages[currentPage] also works but IndexedStack preserves the state of pages, so if we scroll down then switch the page and back we will preseve the scrolling state
        index: currentPage,
        children: pages,
      ),
      bottomNavigationBar: BottomNavigationBar(       // bottom bar
        iconSize: 30,
        // selectedFontSize: 0,
        // unselectedFontSize: 0,     // make both of these 0 to remove the label altogether
        onTap: (value){
          setState(() {
            currentPage = value;
          });
        },
        currentIndex: currentPage,
        items: const [
          BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home'),
          BottomNavigationBarItem(icon: Icon(Icons.shopping_cart), label: 'Cart'),
        ],
      ),
    );
  }
}
