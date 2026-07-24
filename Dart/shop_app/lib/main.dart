import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:shop_app/pages/home_page.dart';
import 'package:shop_app/providers/cart_provider.dart';

void main() {
  runApp(const ShopApp());
}

class ShopApp extends StatelessWidget {
  const ShopApp({super.key});

  @override
  Widget build(BuildContext context) {
    return ChangeNotifierProvider(              // state manager
      create: (context) => CartProvider(),     // this value can be returned anywhere in the app now
      child: MaterialApp(         // we didn't set anything for navigation here but MaterialApp will handle it here
        title: "Shopping App",
        theme: ThemeData(         // defines the theme for the whole app
          fontFamily: 'Lato',
          colorScheme: ColorScheme.fromSeed(
            seedColor: const Color.fromRGBO(254, 206, 1, 1),    // make a colorScheme from a seed color
            primary: const Color.fromRGBO(254, 206, 1, 1),),    // forced a specific primary color for the color Scheme
            appBarTheme: const AppBarTheme(
              backgroundColor: Color.fromRGBO(120, 139, 162, 1),
              titleTextStyle: TextStyle(
                fontSize: 20,
                color: Colors.black,
              ),
            ),
          inputDecorationTheme: InputDecorationTheme(
            hintStyle: TextStyle(
              fontWeight: FontWeight.bold,
              fontSize: 16,),
            prefixIconColor: Color.fromRGBO(119, 119, 119, 1),
          ),
          textTheme: TextTheme(
            titleMedium: TextStyle(
             fontWeight: FontWeight.bold,
             fontSize: 20, 
            ),
            bodySmall: TextStyle(
              fontWeight: FontWeight.bold,
              fontSize: 16,
            ),
            titleLarge: TextStyle(fontWeight: FontWeight.bold, fontSize: 35),
          ),
          useMaterial3: true,
        ),
        home: HomePage()      // home: Provider(create: (context){return 'meow';}, child: HomePage()),       // this will be returned now instead of the first provider because it is the nearest widget in the widget tree
      ),
    );
  }
}
