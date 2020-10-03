# Delivery Agent

## Description

A virtual world mail-delivery robot that picks up and drops off parcels.
The village of Meadowfield consists of 11 places with 14 roads between them and can be described with this array of roads:

`const roads = [ "Alice's House-Bob's House", "Alice's House-Cabin", "Alice's House-Post Office", "Bob's House-Town Hall", "Daria's House-Ernie's House", "Daria's House-Town Hall", "Ernie's House-Grete's House", "Grete's House-Farm", "Grete's House-Shop", "Marketplace-Farm", "Marketplace-Post Office", "Marketplace-Shop", "Marketplace-Town Hall", "Shop-Town Hall" ];`

## Requirements

A robot will be moving around the virtual village. There are parcels in various places, each addressed to some other place. The robot picks up parcels when it comes to them and delivers them when it arrives at their destinations.
The automaton must decide, at each point, where to go next. It has finished its task when all parcels have been delivered.

![Example of final version](https://github.com/tupes/comit-saskatoon-react/blob/master/applications/delivery-agent/Delivery-agent-example.png)
