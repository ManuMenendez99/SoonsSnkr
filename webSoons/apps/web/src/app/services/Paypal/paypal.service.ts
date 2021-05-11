// import { Injectable } from '@angular/core';
// import { ICreateOrderRequest, IOnApproveCallbackData, IPayPalConfig } from 'ngx-paypal';
// import { Links, SellerProtectionDisputeCategoriesOrdersPaypal, LinksPaymentsOrdersPaypal, PaymentsOrdersPaypalConLinksYSellerProtectionContenido, UnidadesOrdersPaypalCreacion, PagosPaypal, PayersPaypal, ComprasOrderPaypal, ItemsComprasOrderPaypal, LinksOrdersPaypal, OrdersPaypal, OrdersPaypalCreacion, ItemsOrdersPaypal, UnidadesOrdersPaypal } from "@Soons/models";
// import { GetterSetterService } from "../getterSetter/getter-setter.service";
// @Injectable({
//   providedIn: 'root'
// })
// export class PaypalService {

//   paypalOrderCreacion: OrdersPaypalCreacion = {
//     createTimePaypal: null, estado: null, idPaypal: null, intent: null, payerId: null, updateTimePaypal: null, unidades: []
//   }

//   paypalPayer: PayersPaypal = {
//     addressCountryCode: null, idPaypal: null, nameSurname: null, nameGivenName: null, emailAddress: null
//   }

//   paypalPago: PagosPaypal = {
//     billingToken: null, payerId: null, orderId: null, paymentID: null, facilitatorAccessToken: null
//   }

//   paypalComprasOrder = new Array<ComprasOrderPaypal>()

//   itemsComprasOrderPaypal: ItemsComprasOrderPaypal = {
//     category: null, nombre: null, idCompra: null, quantity: null, unitAmountCurrencyCode: null, unitAmountValue: null
//   }

//   linksOrdersPaypal = new Array<LinksOrdersPaypal>()
//   linksPaymentsOrdersPaypal = new Array<LinksPaymentsOrdersPaypal>()

//   paypalConfiguracion: IPayPalConfig


//   constructor(private getterSetter: GetterSetterService) {
//     this.initConfig();
//   }

//   initConfig() {
//     this.paypalConfiguracion = {
//       currency: 'EUR',
//       clientId: 'Ae9_uDCZ9j-I9r2622vsxZ9Cn2zfafBLadGOwti_UxNXFXhYfpIgEHPVvqaEqafj8NVdla1YKLr4RkyZ',

//       createOrderOnClient: () => <ICreateOrderRequest>{
//         intent: 'CAPTURE',
//         purchase_units: [
//           {
//             amount: {
//               currency_code: 'EUR',
//               value: '0.01',
//               breakdown: {
//                 item_total: {
//                   currency_code: 'EUR',
//                   value: '0.01'
//                 }
//               }
//             },
//             items: [{
//               name: 'Empresa',
//               quantity: '1',
//               category: 'DIGITAL_GOODS',
//               unit_amount: {
//                 currency_code: 'EUR',
//                 value: '0.01'
//               }
//             }]
//           }
//         ]
//       },
//       advanced: {
//         commit: 'true'
//       },
//       style: {
//         color: "silver",
//         shape: "pill",
//         label: "paypal",
//         tagline: false
//       },
//       onApprove: (data, actions) => {
//         console.log('OnApprove - transaccion completa, pero no autorizada');

//         this.paypalPago.billingToken = data["billingToken"]
//         this.paypalPago.facilitatorAccessToken = data["facilitatorAccessToken"]
//         this.paypalPago.paymentID = data["paymentID"]

//         this.paypalOrderCreacion.idPaypal = data.orderID
//         this.paypalPayer.idPaypal = data.payerID

//         actions.order.get().then(details => {
//           console.log('OnApprove - puedes obtener una lista de detalles de la compra dentro de onapprove: ', details)
//           this.paypalOrderCreacion.createTimePaypal = details.createTimePaypal
//           this.paypalOrderCreacion.idPaypal = details.id
//           this.paypalOrderCreacion.intent = details.intent

//           this.linksOrdersPaypal = details.links.map((x: any) => {
//             const y: LinksPaymentsOrdersPaypal = {
//               href: x.href, title: x.title, rel: x.rel, method: x.method, orderPaymentsId: null
//             }
//             return y
//           })

//           const payer = details.payer

//           this.paypalPayer.addressCountryCode = payer.address.country_code
//           this.paypalPayer.emailAddress = payer.email_address
//           this.paypalPayer.nameGivenName = payer.name.given_name
//           this.paypalPayer.nameSurname = payer.name.surname
//           this.paypalPayer.idPaypal = payer.payer_id

//           this.paypalOrderCreacion.estado = details.status

//           this.paypalComprasOrder = details.purchase_units.map((x: any) => {
//             const y: ComprasOrderPaypal = {
//               AmountBreakdownItemTotalCurrencyCode: x.amount.breakdown.currency_code, orderId: null, AmountBreakdownItemTotalValue: x.amount.breakdown.item_total.value, AmountCurrencyCode: x.amount.currency_code, AmountValue: x.amount.value, referenceID: x.reference_id, payeeEmailAddress: x.payee.email_address, payeeMerchantId: x.payee.merchant_id,
//               address_line_1: x.shipping.address.address_line_1, nombre: x.shipping.name.full_name, postal_code: x.shipping.address.postal_code, admin_area_2: x.shipping.address.admin_area_2, admin_area_1: x.shipping.address.admin_area_1, country_code: x.shipping.address.country_code
//             }
//             this.itemsComprasOrderPaypal = x.items.map((z: any) => {
//               const n: ItemsComprasOrderPaypal = {
//                 category: z.category, unitAmountValue: z.unit_amount.value, unitAmountCurrencyCode: z.unit_amount.currency_code, quantity: z.quantity, idCompra: null, nombre: z.name
//               }
//               return n
//             })
//             return y
//           })
//         })
//       },

//       onClientAuthorization: (data) => {
//         console.log('onClientAuthorization - Deberias informar al servidor de que la transaccion a este punto ya se ha completado', data);
//         this.paypalOrderCreacion.createTimePaypal = data.create_time
//         this.paypalOrderCreacion.idPaypal = data.id
//         this.paypalOrderCreacion.estado = data.status
//         this.paypalOrderCreacion.updateTimePaypal = data.update_time
//         this.paypalPago.paymentID = data.id
//         this.paypalOrderCreacion.intent = data.intent
//         this.linksPaymentsOrdersPaypal = [...this.linksPaymentsOrdersPaypal, ...data.links.map(x => {
//           return { href: x.href, method: x.method, orderPaymentsId: null, rel: String(x.rel), title: x["title"] }
//         })]
//         console.log(data)
//         this.paypalOrderCreacion.unidades = data.purchase_units.map(x => {
//           const y: UnidadesOrdersPaypalCreacion = {
//             breakDownValue: x.amount.value,
//             breakdownCurrencyCode: x.amount.currency_code,
//             breakdownHandlingCurrencyCode: x.amount.breakdown.handling.currency_code,
//             breakdownHandlingValue: x.amount.breakdown.handling.value,
//             breakdownInsuranceCurrencyCode: x.amount.breakdown.insurance.currency_code,
//             breakdownInsuranceValue: x.amount.breakdown.insurance.value,
//             breakdownShippingCurrencyCode: x.amount.breakdown.shipping.currency_code,
//             breakdownShippingDiscountCurrencyCode: x.amount.breakdown.shipping_discount.currency_code,
//             breakdownShippingDiscountValue: x.amount.breakdown.shipping_discount.value,
//             breakdownShippingValue: x.amount.breakdown.shipping.value,
//             breakdownitemTotalCurrencyCode: x.amount.breakdown.item_total.currency_code,
//             breakdownitemTotalValue: x.amount.breakdown.item_total.value,
//             descripcion: x.description,
//             idOrdersPaypal: null,
//             payeeEmailAddress: x.payee.email_address,
//             payeeMerchantId: x.payee.merchant_id,
//             purchaseItems: x.items.map(z => {
//               const n: ItemsOrdersPaypal = { nombre: z.name, quantity: z.quantity, taxCurrencyCode: z.tax.currency_code, taxValue: z.tax.value, unitAmountCurrencyCode: z.unit_amount.currency_code, unitAmountValue: z.unit_amount.value, unidadesOrdersPaypal: null }
//               return n
//             }),
//             purchasePayments: x["payments"].captures.map(z => {
//               const n: PaymentsOrdersPaypalConLinksYSellerProtectionContenido = {
//                 amountCurrencyCode: z.amount.currency_code,
//                 amountValue: z.amount.value,
//                 createTime: z.create_time,
//                 estado: z.status,
//                 finalCapture: z.final_capture,
//                 idPaypal: z.id,
//                 idUnidadesPurchase: null,
//                 updateTime: z.update_time,
//                 links: z.links.map(m => {
//                   const p: Links = {
//                     href: m.href,
//                     method: m.method,
//                     rel: m.rel,
//                     title: m.title
//                   }
//                   return p
//                 }),
//                 status: z.seller_protection.status,
//                 sellerProtectionContenido: z.seller_protection.dispute_categories
//               }
//             }),
//             referenceId: x.reference_id,
//             shippingAddressAddress_line_1: x.shipping.address.address_line_1,
//             shippingAddressAdmin_area_1: x.shipping.address.admin_area_1,
//             shippingAddressAdmin_area_2: x.shipping.address.admin_area_2,
//             shippingAddressCountry_code: x.shipping.address.country_code,
//             shippingAddressPostal_code: x.shipping.address.postal_code,
//             shippingFullName: x.shipping.name.full_name,
//             shippingPrefix: x.shipping.name.prefix,
//             shippingGivenName: x.shipping.name.given_name,
//             shippingSurname: x.shipping.name.suffix,
//             shippingMiddleName: x.shipping.name.middle_name,
//             shippingSuffix: x.shipping.name.suffix,
//             shippingAlternateFullName: x.shipping.name.alternate_full_name
//           }
//           return y
//         })
//         this.meterInformacionDentroDeLaBBDD();
//       },

//       onCancel: (data, actions) => {
//         console.log('OnCancel', data, actions);
//       },

//       onError: err => {
//         console.log('OnError', err);
//       },

//       onClick: (data, actions) => {
//         console.log('onClick', data, actions);
//       },
//     }
//   }

//   meterInformacionDentroDeLaBBDD() {
//     a saber que puto orden tengo que poner aquí para ir metiendo los datos dentro de la BBDD
//     this.paypalPayer
//     this.paypalOrderCreacion
//     this.paypalPago
//     this.paypalComprasOrder
//     this.itemsComprasOrderPaypal
//     this.linksOrdersPaypal
//     hasta aquí todo sencillo

    
    
//   }
// }
