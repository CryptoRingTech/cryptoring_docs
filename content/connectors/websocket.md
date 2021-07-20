---
title: "WebSocket connector"
metaTitle: "WebSocket connector for CryptoRing Platform"
metaDescription: "WebSocket connector for CryptoRing Platform"
---

The easiest way to use the CryptoRing Platform is a **WebSocket connector**. 

The base endpoint for it is `https://ws.cryptoring.tech`. 

To authenticate your app with this connector, you need to send special headers: 

 * X-User-Key
 * X-Application-Key

After the initialization of WebSocket, you will start to receive data for subscriptions you've configured before. If you want to add or remove a subscription, you can send a [Subscribe](/api/subscribe) or [Unsubscribe](/api/unsubscribe) API message.
Any other [APIs](/api) are supported as well.

