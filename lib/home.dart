import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_svg/svg.dart';
import 'package:o3d/o3d.dart';

class Home extends StatelessWidget {
  Home({super.key});

  final O3DController controller = O3DController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: SafeArea(
      child: AnnotatedRegion(
        value: const SystemUiOverlayStyle(
          statusBarColor: Colors.transparent,
          statusBarIconBrightness: Brightness.dark,
        ),
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 25, vertical: 20),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        "Hallo, ALFIAN",
                        style: TextStyle(
                            fontSize: 25,
                            fontWeight: FontWeight.w700,
                            color: Colors.black.withOpacity(0.7)),
                      ),
                      Text(
                        "Control your car",
                        style: TextStyle(
                            fontSize: 20, color: Colors.black.withOpacity(0.5)),
                      ),
                    ],
                  ),
                  SvgPicture.asset(
                    'lib/assets/profile11.svg',
                    height: 50,
                  )
                ],
              ),
              ClipRect(
                child: Align(
                  heightFactor: 0.5,
                  child: SizedBox(
                    height: 400,
                    width: 350,
                    child: O3D.asset(
                      src: 'lib/assets/hyundai_ioniq_5_-_lowpoly.glb',
                      controller: controller,
                      ar: false,
                      disableTap: true,
                      disableZoom: true,
                      disablePan: true,
                      autoRotate: true,
                    ),
                  ),
                ),
              ),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Container(
                    decoration: BoxDecoration(
                        color: Colors.green.shade100.withOpacity(0.4),
                        borderRadius: BorderRadius.circular(1000)),
                    padding: const EdgeInsets.symmetric(
                        vertical: 10, horizontal: 20),
                    child: const Text(
                      "Car is active",
                      style: TextStyle(
                          color: Colors.green,
                          fontSize: 14,
                          fontWeight: FontWeight.w600),
                    ),
                  ),
                  Column(
                    crossAxisAlignment: CrossAxisAlignment.end,
                    children: [
                      Text(
                        'Car Type',
                        style: TextStyle(color: Colors.black.withOpacity(0.5)),
                      ),
                      Text(
                        "Hyundai ioniq 5",
                        style: TextStyle(
                            color: Colors.black.withOpacity(0.7),
                            fontWeight: FontWeight.w600),
                      )
                    ],
                  )
                ],
              ),
              const SizedBox(
                height: 20,
              ),
              Text(
                'Car information',
                style: TextStyle(
                    fontSize: 18,
                    color: Colors.black.withOpacity(0.8),
                    fontWeight: FontWeight.w600),
              ),
              const SizedBox(
                height: 20,
              ),
              Expanded(
                child: GridView(
                  physics: const NeverScrollableScrollPhysics(),
                  gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                    crossAxisCount: 2,
                    crossAxisSpacing: 20,
                    mainAxisSpacing: 20,
                  ),
                  children: const [
                    TileMenu(
                      // selected: true,
                      title: "Battery",
                      content: "80%",
                      icon: Icon(
                        Icons.battery_full,
                        color: Colors.white,
                      ),
                    ),
                    TileMenu(
                      // selected: false,
                      title: "Speed",
                      content: "60 km/h",
                      icon: Icon(
                        Icons.speed,
                        color: Colors.white,
                      ),
                    ),
                    TileMenu(
                      // selected: false,
                      title: "Distance",
                      content: "100 km",
                      icon: Icon(
                        Icons.directions_car,
                        color: Colors.white,
                      ),
                    ),
                    TileMenu(
                      // selected: false,
                      title: "Temperature",
                      content: "30°C",
                      icon: Icon(
                        Icons.thermostat,
                        color: Colors.white,
                      ),
                    ),
                  ],
                ),
              )
            ],
          ),
        ),
      ),
    ));
  }
}

class TileMenu extends StatelessWidget {
  const TileMenu(
      {super.key,
      // required this.selected,
      required this.title,
      required this.content,
      required this.icon});
  final String title;
  final String content;
  final Widget icon;
  // final bool selected;

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(15),
      decoration: BoxDecoration(
          color: const Color.fromARGB(255, 240, 240, 240),
          boxShadow: [
            BoxShadow(
                color: Colors.black.withOpacity(0.1),
                blurRadius: 10,
                offset: const Offset(0, 5),
                spreadRadius: 0)
          ],
          borderRadius: BorderRadius.circular(20)),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Container(
                height: 40,
                width: 40,
                padding: const EdgeInsets.all(5),
                decoration: BoxDecoration(
                    color: const Color(0xff95C1FF),
                    borderRadius: BorderRadius.circular(1000)),
                child: icon,
              ),
              Icon(
                Icons.more_vert,
                size: 15,
                color: Colors.black.withOpacity(0.8),
              )
            ],
          ),
          const SizedBox(
            height: 20,
          ),
          Text(
            title,
            style: TextStyle(
                fontSize: 18,
                fontWeight: FontWeight.w600,
                color: Colors.black.withOpacity(0.9)),
          ),
          Text(content,
              style: TextStyle(
                  fontSize: 14,
                  fontWeight: FontWeight.w600,
                  color: Colors.black.withOpacity(0.5)))
        ],
      ),
    );
  }
}
