import 'package:flutter/cupertino.dart';

// Cupertino Design Code (can't test because i don't have mac)

// typing stfl will generate stateful widget boilerplate

class ConverterCupertino extends StatefulWidget {
  const ConverterCupertino({super.key});

  @override
  State<ConverterCupertino> createState() => _ConverterCupertinoState();
}

class _ConverterCupertinoState extends State<ConverterCupertino> {
  double result = 0;
  final TextEditingController textEditingController = TextEditingController();

  void convert() {
    setState(() {
      // setState to update values live, tells build function to rebuild
      result = double.parse(textEditingController.text) * 1530;
    });
  }

  @override
  Widget build(BuildContext context) {
    debugPrint('rebuilt');

    return CupertinoPageScaffold(
      backgroundColor: Color.fromARGB(142, 27, 147, 184),
      navigationBar: const CupertinoNavigationBar(
        backgroundColor: const Color.fromARGB(203, 33, 149, 243),
        middle: Text(
          'Currency Converter',
          style: TextStyle(color: CupertinoColors.systemGrey3),
        ),
      ),
      child: Center(
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
              CupertinoTextField(
                controller: textEditingController,
                style: const TextStyle(color: CupertinoColors.white),
                decoration: BoxDecoration(
                  color: CupertinoColors.white,
                  border: Border.all(),
                  borderRadius: BorderRadius.circular(5),
                ),
                placeholder: '\$15',
                prefix: const Icon(CupertinoIcons.money_dollar),
                keyboardType: TextInputType.numberWithOptions(
                  decimal: false,
                  signed: true,
                ),
              ),
              const SizedBox(height: 10),
              CupertinoButton(
                onPressed: convert,
                color: CupertinoColors.black,

                child: const Icon(CupertinoIcons.number_circle),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
