import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';

class CurrencyConverterMaterialPage extends StatefulWidget {
  const CurrencyConverterMaterialPage({super.key});

  @override
  State<CurrencyConverterMaterialPage> createState() =>
      _CurrencyConverterMaterialPageState();
}

class _CurrencyConverterMaterialPageState
    extends State<CurrencyConverterMaterialPage> {
  double result = 0;
  final TextEditingController textEditingController = TextEditingController();

  void convert() {
    if (kDebugMode) {
      setState(() {
        // setState to update values live, tells build function to rebuild
        result = double.parse(textEditingController.text) * 1530;
      });
    }
  }

  @override
  void dispose(){       // used to dispose of widgets and controllers no longer needed to avoid memory leaks and improve performance
    textEditingController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    debugPrint('rebuilt');
    final inputBorder = OutlineInputBorder(
      borderSide: const BorderSide(
        color: Color.fromARGB(255, 26, 127, 170),
        width: 5.0,
        strokeAlign: BorderSide.strokeAlignOutside,
      ),

      borderRadius: BorderRadius.circular(60),
    );

    return Scaffold(
      backgroundColor: Color.fromARGB(142, 27, 147, 184),
      appBar: AppBar(
        backgroundColor: const Color.fromARGB(203, 33, 149, 243),
        title: Text(
          'Currency Converter',
          style: TextStyle(color: Colors.amberAccent),
        ),
        centerTitle: true,
        actions: [Icon(Icons.list_rounded)],
        leading: Icon(Icons.arrow_back),
      ),
      body: Center(
        child: Padding(
          padding: const EdgeInsets.all(8.0),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text(
                '${result != 0 ? result.toStringAsFixed(2) : result.toStringAsFixed(0)}', // put maximum 2 floating numbers
                style: TextStyle(
                  fontSize: 35,
                  fontWeight: FontWeight.bold,
                  color: Color.fromARGB(255, 255, 255, 255),
                ),
              ),
              TextField(
                controller: textEditingController,
                style: const TextStyle(color: Colors.white),
                decoration: InputDecoration(
                  label: Text(
                    'please enter the amount in USD',
                    style: const TextStyle(color: Colors.white),
                  ),
                  hintText: '\$15',
                  hintStyle: TextStyle(color: Colors.white38),
                  prefixIcon: const Icon(Icons.monetization_on),
                  prefixIconColor: Colors.white38,
                  filled: true,
                  fillColor: Color.fromARGB(255, 24, 74, 154),
                  focusedBorder: inputBorder,
                  enabledBorder: inputBorder,
                ),
                keyboardType: TextInputType.numberWithOptions(
                  decimal: false,
                  signed: true,
                ),
              ),
              const SizedBox(
                height: 10,
              ), // puts some space between button and textbox, Container also does this but we can't put const behind it causing it to rebuild everytime so we used SizedBox instead which is only used for width, height etc, where as container is used for all sorts of stuff
              ElevatedButton(
                onPressed:
                    convert, // we type our function here like that without ()
                style: TextButton.styleFrom(
                  backgroundColor: Colors.white70,
                  foregroundColor: Colors.blueAccent,
                  minimumSize: Size(double.infinity, 40),
                  elevation: 15,
                  shape: CircleBorder(),
                ),

                child: const Icon(Icons.calculate),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
