---
title: "EKAMI Kiosk Balena Project TEST - README.md"
output:
  html_document:
    toc: true
    number_sections: true
---

# EKAMI Kiosk Balena project - TEST

[![balena deploy button](https://www.balena.io/deploy.svg)](https://dashboard.balena-cloud.com/deploy?repoUrl=https://github.com/jilpi/balena-kiosk-test)

# Introduction

This project deploys the necessary Balena blocks and services for a standalone EKAMI Kiosk.

Devices supported:

- Raspberry Pi 4
- Intel NUC (not tested yet)

The EKAMI Kiosk does not provide any network accessible services to other computers on the network.

The only way to connect to it are locally (tty on the main display) or through the Balena VPN.

Internally, it is made of the following docker services:

 - The Kiosk application, serving the pages that will appear to the user
 - A Chrome block, provided by Balena, launching Chrome on a bare X Server in full screen and Kiosk mode, configured with security as first priority
 - A CUPS instance with SANIO SK1-311 printer driver installed and configured (not implemented yet)

# Components

## Kiosk App

### Application

The application itself is a one-page React application, consisting of a set of static HTML, JS, CSS and other files. It is cloned from https://github.com/ekami-ch/react-ekami-kiosk-app as a GIT submodule, in the folder `/react-ekami-kiosk-app/`.

### HTTP Server


To get this project up and running, you will need to [sign-up][signup-page] for a balena account. Have a look at our [Getting Started tutorial][gettingStarted-link] to help you kickstart your journey in creating a fleet of devices. Once you are set up with balena, you will need to clone or download this repository. 

After downloading, navigate to the directory and run the `balena push` command using the [balena CLI][balena-cli]. This command will package up and push the code to the balena builders, where it will be compiled, built and deployed to every device in the fleet. When it completes, you'll have a NodeJS powered web server running on your device and you can see some logs on your [device dashboard][balena-dashboard].

```bash
cd balena-nodejs-hello-world/
balena push <FLEET_NAME>
```

To give your device a public URL, access the device page on the [balenaCloud dashboard][balena-dashboard], and choose the _Public Device URL_ toggle. Once the device is updated, check the Public Device URL to find the welcome page showing up from your device. That's it, you have deployed your first balena device!


[balena-cli]:https://www.balena.io/docs/reference/cli/
[balena-dashboard]:https://dashboard.balena-cloud.com/
[balena-link]:https://balena.io/ 
[devices-supported]:https://www.balena.io/docs/reference/hardware/devices/
[gettingStarted-link]:https://www.balena.io/docs/learn/getting-started/raspberrypi3/NodeJS/
[signup-page]:https://dashboard.balena-cloud.com/signup
