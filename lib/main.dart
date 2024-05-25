import 'package:flutter/material.dart';
import 'package:flutter_3d_animation/home.dart';

void main(List<String> args) {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.deepPurple.shade100,
      alignment: Alignment.center,
      // padding: const EdgeInsets.symmetric(vertical: 20, horizontal: 20),
      child: Container(
        clipBehavior: Clip.hardEdge,
        decoration: BoxDecoration(borderRadius: BorderRadius.circular(20)),
        constraints: const BoxConstraints(maxWidth: 430, maxHeight: 932),
        child: MaterialApp(
          debugShowCheckedModeBanner: false,
          title: '3D Animation',
          theme: ThemeData(useMaterial3: true),
          home: Home(),
        ),
      ),
    );
  }
}
