import { Injectable } from '@angular/core';
import { ICreateOrderRequest, IOnApproveCallbackData, IPayPalConfig } from 'ngx-paypal';
import { PagosPaypal, OrdersPaypal, PayersPaypal, ComprasOrderPaypal, ItemsComprasOrderPaypal, LinksOrdersPaypal } from "@nighty/models";

@Injectable({
  providedIn: 'root'
})
export class PaypalService {

  paypalOrder: OrdersPaypal = {
    createTimePaypal: null, estado: null, idPaypal: null, intent: null, payerId: null, updateTimePaypal: null
  }

  paypalPayer: PayersPaypal = {
    addressCountryCode: null, idPaypal: null, nameSurname: null, nameGivenName: null, emailAddress: null
  }

  paypalPago: PagosPaypal = {
    billingToken: null, payerId: null, orderId: null, paymentID: null, facilitatorAccessToken: null
  }

  paypalComprasOrder = new Array<ComprasOrderPaypal>()

  itemsComprasOrderPaypal: ItemsComprasOrderPaypal = {
    category: null, nombre: null, idCompra: null, quantity: null, unitAmountCurrencyCode: null, unitAmountValue: null
  }

  linksOrdersPaypal = new Array<LinksOrdersPaypal>()

  paypalConfiguracion: IPayPalConfig

  constructor() {
    this.initConfig();
  }

  initConfig() {
    this.paypalConfiguracion = {
      currency: 'EUR',
      clientId: 'Ae9_uDCZ9j-I9r2622vsxZ9Cn2zfafBLadGOwti_UxNXFXhYfpIgEHPVvqaEqafj8NVdla1YKLr4RkyZ',

      createOrderOnClient: () => <ICreateOrderRequest>{
        intent: 'CAPTURE',
        purchase_units: [
          {
            amount: {
              currency_code: 'EUR',
              value: '0.01',
              breakdown: {
                item_total: {
                  currency_code: 'EUR',
                  value: '0.01'
                }
              }
            },
            items: [{
              name: 'Empresa',
              quantity: '1',
              category: 'DIGITAL_GOODS',
              unit_amount: {
                currency_code: 'EUR',
                value: '0.01'
              }
            }]
          }
        ]
      },
      advanced: {
        commit: 'true'
      },
      style: {
        color: "silver",
        shape: "pill",
        label: "paypal",
        tagline: false
      },
      onApprove: (data, actions) => {
        console.log('OnApprove - transaccion completa, pero no autorizada');

        this.paypalPago.billingToken = data["billingToken"]
        this.paypalPago.facilitatorAccessToken = data["facilitatorAccessToken"]
        this.paypalPago.paymentID = data["paymentID"]

        this.paypalOrder.idPaypal = data.orderID
        this.paypalPayer.idPaypal = data.payerID

        actions.order.get().then(details => {
          console.log('OnApprove - puedes obtener una lista de detalles de la compra dentro de onapprove: ', details)
          this.paypalOrder.createTimePaypal = details.createTimePaypal
          this.paypalOrder.idPaypal = details.id
          this.paypalOrder.intent = details.intent

          this.linksOrdersPaypal = details.links.map((x: any) => {
            const y: LinksOrdersPaypal = {
              href: x.href, title: x.title, rel: x.rel, orderId: null, method: x.method
            }
            return y
          })

          const payer = details.payer

          this.paypalPayer.addressCountryCode = payer.address.country_code
          this.paypalPayer.emailAddress = payer.email_address
          this.paypalPayer.nameGivenName = payer.name.given_name
          this.paypalPayer.nameSurname = payer.name.surname
          this.paypalPayer.idPaypal = payer.payer_id

          this.paypalOrder.estado = details.status

          this.paypalComprasOrder = details.purchase_units.map((x: any) => {
            const y: ComprasOrderPaypal = {
              AmountBreakdownItemTotalCurrencyCode: x.amount.breakdown.currency_code, orderId: null, AmountBreakdownItemTotalValue: x.amount.breakdown.item_total.value, AmountCurrencyCode: x.amount.currency_code, AmountValue: x.amount.value, referenceID: x.reference_id, payeeEmailAddress: x.payee.email_address, payeeMerchantId: x.payee.merchant_id,
              address_line_1: x.shipping.address.address_line_1, nombre: x.shipping.name.full_name, postal_code: x.shipping.address.postal_code, admin_area_2: x.shipping.address.admin_area_2, admin_area_1: x.shipping.address.admin_area_1, country_code: x.shipping.address.country_code
            }
            this.itemsComprasOrderPaypal = x.items.map((z: any) => {
              const n: ItemsComprasOrderPaypal = {
                category: z.category, unitAmountValue: z.unit_amount.value, unitAmountCurrencyCode: z.unit_amount.currency_code, quantity: z.quantity, idCompra: null, nombre: z.name
              }
              return n
            })
            return y
          })
        })
      },

      onClientAuthorization: (data) => {
        console.log('onClientAuthorization - Deberias informar al servidor de que la transaccion a este punto ya se ha completado', data);
        this.paypalOrder.createTimePaypal = data.create_time
        this.paypalOrder.idPaypal = data.id
        this.paypalOrder.intent = data.intent
        this.purchaseUnits = data.purchase_units.map(x => {
          const y = 
        }) 
      },

      onCancel: (data, actions) => {
        console.log('OnCancel', data, actions);
      },

      onError: err => {
        console.log('OnError', err);
      },

      onClick: (data, actions) => {
        console.log('onClick', data, actions);
      },
    }
  }
}
