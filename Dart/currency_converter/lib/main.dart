

import 'package:currency_converter/converter_cupertino.dart';
import 'package:currency_converter/converter_material.dart';
import 'package:flutter/material.dart';
import 'package:flutter/cupertino.dart';


void main() {
  runApp(const App());      // put CopertinoExample here to run Cupertino
}


class App extends StatelessWidget {
  const App({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      home: CurrencyConverterMaterialPage(),
      );
  }
}


class CupertinoExample extends StatelessWidget {
  const CupertinoExample({super.key});

  @override
  Widget build(BuildContext context) {
    return const CupertinoApp(
      home: ConverterCupertino(),
      );
  }
}
