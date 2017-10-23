import {Dimensions} from 'react-native'
const constants = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
  pizzaIcon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAFS0lEQVRoQ7WZj5EOQRTE30WACBABIuAicCJABIgAETgRcBEcESACRMBFgAio31fbW31z83d3TNWV8327M6/n9evXM3cUc8fdiDiPiOsR8TkiPkTEx4j4PXeZq7MdTV7gU0Q8SOYEBIDeRsS3yeut080EcisifkTEnwUMgJ5ExB0Lniy9XrI1FdNMIM8j4k1EnC0AFCgA+Q5Q15YPpwOaCeRrRFAjjxYqpTtO3QCIHwGCci8i4ufe9MwCAgCAQCsCro0UEDX0aqmhzXhmASGQlxla1QKDcqcR8dDoRjY3KdwsIBQ5gZVoVQN0EhHvF7oBgjmooaExAwiB0DsYklqUaYT30I16ub/M83QB1w1mBhACgB4XEXHTVlbvGNldUZRpoB1C0DX2AlHvYLEbC71Qpce2OrQZyRAy/W55n3fJTnPsBVIq8pzU8iyAegbNlIwi0zgCNqc69gL5tcjtcaFAyRgAlCEsCjvcY1UAg+VhNGtmDxBRgNog4NogKDgvu9KbHadZabMO6+4BIoPY3C1DCJhny/+hDu+2+oboiwreKz2/FYgXueKELgSK12plR/znHXa6BQblQ5p5jz5zZWwFgpq4MvnEPcGxEQQF1XqeRzzICMWfbbpbgDApnZx/NSm/qw7oJQQHDWpDh69eMHLXZO92msUtQFSAXzKHKIIDBGB6amcUjCiGjFM769gCpOWrZFl6skIgDqZYA0vELslkZbVBo0A0UU1yXQh65+cdgFMDV3Y74afq89IBrnchzaVJaou1gPA9J0nOMAwA4Kn4XA2Q+io1TZ9/zcoIEJ+gxn9R67sFq41gDg5g6eGLAiZ46o9zTbVnLM4Y1VyzMgLEnWlpIQIkUALOgZVTRigAzJB959qIz8gEStaT9VXBRoCoyGXXAQM4AmDQsGiIgMhlg2fkzXDKaoKA53PmgyrFgk5qRQoGLU97gbivgttM4tc8vgYgCCbXrf/ag3zPPNQdWfHzvmqxpmKi8GEDeoHkfBXg+NGpDgBkhCByw6mZ+95VyDt5zSwCgp513APEL974veWLckH6cRgqAJZgVdy8k1oPASdrgKltzlkPkKxuFyYufawiP/A5eUgBq9j1tWelJMerkraAuK+qaXsLl2rDi9wDptjJNN/7KG0idYr8kmnAXLSA1HxVK3j/vgak1kD1na6JuORQ8JofFT1pAdE1aI8BRKloZrqN9/vdS1KZ7IBcbUotHvO+5K8RPHQlYwcHUAMiPe+5Bq0pkm7fUT5dj+rwBT1UM65OUIeTJLsvF0AcBL4G78hqQPzwhMzJE6UXbw4YQJJfaMn/MYIEqYzlKKkuDjDe87+x4AIEoEjnEhB12/RFeSIH00MbnV0IEHDqPQqSXgDFfPehDs923ViWgIgq6tIASj2RQG4tZAqX3ZfnYj64z9qsNdSvSkDkq5y3qScSEBaEPjlpTRWJOaAPu+9XSNQM9Bm5Xr3ElhwQ78J+ClNQ6aGq1uykSNQXP2TAZZPgKfah3c8VSg6I/0GTHdL1CzfucDyVSRV7TZF8beqC4NmAaSMF4lRA7vQnMi3IZzm/5TeCueAknQDoKt5RhCkQ3QTCWYpOf1GCTqJGiQbcoDt1iKXliEfj7ZLfLb6K7Ej7VbzsPrRhE3ouq6eA8YyIHqXTnS9IXajzevHqPLK7eEfROZCWrypJJ8UPgM3SORp0TbVqvirne6gZ2Yb/Uryj4JQR+Sr/65Aal+6fmLvL94wGMeN5gLivopPLOmz2PTMCG50DICULLukc9j2jQcx4HiDyVZpvt++ZEdjoHABB66HRNN8zGsSM5/8BE4WPMQTfjS8AAAAASUVORK5CYII=',
  burgerIcon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAADFElEQVRoQ+2Zj1HVQBDGPyoQOtAOpAKxArUCpQKhAqECpAKlArECpQK1AuhArUDml7nNbI675N4kuceLuZnMy0z29vbbb/8lb08LWXsLwaEVyGNjcmVkVxl5KumVpCNJ3D+fGchPSXeSvkv6Gu57jxwKLYz+IOndzIYPqf8s6bwPUB+Q15I+SdoPp1wFD+EtrjkXjHMRAW/DQX8kHUu6Th2cAwIDgGBB7UmPN84Ca3iM+6kXUfExhDa6AQNDnZUCAhNfglS8KWX0P6dxKFTHgMSZF0HBm5iZ+GDC6DaEUwp5yui5GfHgLVIIs2eS+G1WDATKiEnCCWbiVdPoHHvkCBWUnG2LkAcCG7/DbtBS/vrWtkCRM0QN68BY8UCMtg7SHiS1ciNlgrHShr8HYg8fJFIGzLYYwRxzepsCHghd9IWkwwp9Ykz1Yi895oekm9Br2mT3+TH2kNr7mzwxRmg472tbMNF5VNpjgPgGmAorG1Hamp0xADmuoWpn20vlc3KEF+nwRNIpQCi5CDM/kehmCGWOnkJHZcHapW9CDhBskvzoGRrwkEEevdyzL6eX83mOLbFe9jJGNf0OINYES5iGFeQByz1eoYIYa14HclRCEhJZCgmHpuR5jizONL3IAqBk3ViOMGV+i3b8CtTBBArxDMakFsbyHID82sSaM8LkMRp5OnVqYQPPCSEYxM7YhqaX+PJrDa5v8IMB8xRGeE96QwCO5/3BGI/HYSp+DTB5nw8Yz5VbHXs3BVJCcy2ZZQPxg1gtj051TjPgElqAoN2nKs9Uh82phzw99OWXqZfKMNT45jRqE904nopKhbwCiCVNO9tvom3Lsu2MuCgg1tn5Pd2x0OJjBP2qCS2SnQbF8LWL6y+jkjXERZRfY6FkRHlMjC27s+PplZEtxdv/E1q70OF9lW0qb+oD3Vx/D0wZgfZxMPmBzr/uIsgQWfpFZEoj+3TZBxH7H+alvUXGr7WGtJZhY87pRE7q/RxmGOdzHwTGHD7FXsKJ8b3zPj/nP0xTGF2sYwVS7KpKgisjlRxdfMxiGLkHTKG64PxgLW8AAAAASUVORK5CYII=',
  kebabIcon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAEvklEQVRoQ82aj5UMQRDGv4sAESACdxG4iwARIAJEgAgQARcBIkAEXASIABHwfvf6W7V1PbM9u7070+/d292enp76qr760zV3pGWP65LuSrqQ9KMiKtc/MX+0YBwW8ljSb0lnkr4FeeP1iyUDeS/pvqQ/kq4lMGsgJJ0uFcgjSW8LCCzyQtLDAuaBpFeSmIdyp8wvAQjavSPpS6DNL0nMP5b0rszzCRiPFYgl+EikSBT6c3FyfALfwEcYEQzzrLscc1okgkAWhD4pcnENIbHUEJi1ADAnEHj/vPgBQt0s2reWJ4GZE4gdGo2/Kc5NrsAqptItSd+LlcYsczInEORDYEIrfH9dqIQf4C+ZeqaffYao9bWAPJsbyNMSStE2wkMrgD0rEcohlnzyIfgMYKEmYIlex3MDsZZxaugFIPJHLcRGn/F17kEZB4la8JwExufLotlYGUWKYBWGwWAZKOfBHvx2knSOOQgQeMyDPWK+8Jwdn98ZDJRizgEgKmH1fd/UQntPJP0smsQyFnalzcJ1AKNxBnThHta4zmIvqFQFtE8gOCiFH4OQCv+z5hE0RieEJ58wsARUxKnvlTlAAIa5tbEvIAhH/Ocz8zyCQfP8jgUgRWC2BADtN9RkrDkIEB7EgYcEd7tC6giGy2sFYKEYVLIlvAUlPXvHc8nltZ4WgUrQAtNjCUDAbye4jCeCyVbzWoTGagAaBNETSBTK/gBdnOBawNSimQERBPCPwcjVwyKZJqskVbjfC0yFof+negD5W7YDAKEWrWEVNwt6WmYQTA8ghEk4DDXgNKc45jiSRq5fdjsafYZ72aN59AASI5Q7HTi5OV+rYod8xgn0vITlgwLhYT6aksCgFDEfiuVGAREITdeiGbR0XTXm+FVwUyyC5mmWkZBWZ+Wyayz88A8EHmoUZJ8h9FK6EDQYzubN1pgSfnNkqmnMR1c7u1s4PCevj2BYD/3IEzxnkm8YbYtFiOEUdDwM7lrTNTB2fB9LoYrX8x3tewCG9SRRMjsgrmTsVrO0AHEZ/rF0/mqFn58Xz9j4Cj5CxqfJwGDOJ8EY0TJVW+VfrdsEJJbh7sFy86Yq1g+ANj5LEKlc2SI4v7FwlzEGJDtwNvumKjbSCgpBK6xDIDCgtSbbLojGgFhQtMcDa2NTFYvgLsm5n+8oyGV7PDnugmO0+m2pYDPNalUs+xDByBMeuWzfCQQ3b/KRljppyGeycAQCLMgn9Bo9g09FtgkI+20DBkEpIg82WoBsC2aontoLuFYg24KJZ5O9APCmU4DkKnZM47UT4yKA5Hd2OOzYeXzoBc7ewLRY5MqLxxJ5ho6wBAf6WYClEPR5e28gWsIva1xr5dhfi2ZQipLcXXISYu39eHdQtgha4+G5DHFpPpTAIhgEdsuTGqp7rhhDD5DYFXQrx/fYGnk+7hnBQCUAxL5ud+3XNgSI35TWWpF+o0S3cIwiKANAWLRrxm7VAkDo0UKJmtZ9Fu9WpbYKNnUdQNyXulHRpq01uRkwVZBd1wPEWs+VK3TxO4sxH9lVhi73A8RZGG7jqEQc+E4YpXNSbeN3eXrHTRx+8/95+BG8lyAXbN0U6Cjr6FYxs2MZ/vyPXhxPOa7OEoWmKuAf7ZRhUZnDJ20AAAAASUVORK5CYII=',
  cartIcon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAADUElEQVRoQ+2Zi7ENQRCG/xsBIkAEiAARIAIyQASIABEgAkSACBABGSAC6lPbp9rUPHZnes+dOmWqTp29586j/3780917phMZZyeCQ/+BzGbJk7bIdUmvJPHN+CLpnaQ3kr7PZgmTJ7XIRUnfFqE/Snoh6ackfr8g6bGk1zOCSYHckvRBOpDAU0n8xofnJ5LuLRaaCk/OIrgPrmUWeblYBsEB81DS1cVS04DJBTuxgftcWb4fJdICFJfjM83oYS0AABZ3m2b0AEnjaAowPUBwOZiNOJmGjnuAYIHfy/0CNfPhrrEBSdj4dCxz9QIxYfnmjrHLE7lvFoT3AP0zSkAZjK+9bNgLhIDHxe42NO4JofRcAu4B+mfcmSzjn9ELBEq+L+lGsOtgWSzMyD2jPP5vcw7H9wI5L+YqUn8vEDTyQ9LtJQPwhkGTDyTZRcozw3I0hOHZCIKUiH3MCn5tavDPkt4vGUaIa7EJvkrKkiaRgMQFTFCebb4Jy1oLcKxrwZ+u9cLWlDdUIXI4H8CkB24BQrAbTdeAQCxvXUIbZhGfGY+4FsowRkvd0u9bOu/vnN4YYS2+/FzSpdSRd/q75AHDQNAewQcQ8/dcwEYFO9lEjlyGgbBBbvM9gt3oPlXawfgjrsUmMBOs5WuTrUDWBDvxQbD7VCgs2NmIpgRuZe7T41prgp05KC0t8sIsUmWSwKDHhau9glHXyqUq0Td7iVRCXStXZG2NkdbNbv2Damk9ahFjrr1aRHRsIJLm/hFACMTLO5S9WBu6JcCbTcEIIGgMamwetjH4SSyNFZtLI4DsVWQ1hfcTIoCcV5EVylpsVq0TNql1YHKERTi+VGQNiLZtaRSQXKqyTZLB2VFArDYhzfbNukHx1i+PAsKJ0C8tIiuA1kuxbuaz2rRIIJwDg0HHd1zXkDT9V8NSEMY1t8a/9jP5d09RUkVRNdJM8O0gSuLayyFijGGdS0sUaQCuctVoi1juRayQYqBF4qdapjp3tK4M61prwu+R1CK+CMJljAhqSsMiVnOw3xQWQZsIxjsU7hfchbfBtVd11gdjDRUnQGhUFyvCVHt7uBZnIJiVv2tZDOuZ4PZufx2fDfa1Vh9yjIl7WeQYsu8e7EcHwYEnY5E/7CLaM0Xr4H8AAAAASUVORK5CYII=',
  mealIcon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAADqElEQVRoQ+2Z/XVNQRTFdypABagAFaACVIAKUIGkAlIBqQAVoAJUgAokFbB+WbOtefPm49zk3XvDylkrf+TduTNnzz7fd0/Lyj1JbyTdCB77Q9JTSZ9G6/dGC3b8/PsEED4aMDdHeiwN5HdSKHpueH10w9GFRJ+HFUsbhtdfAolSUKw7lnRl4rsnkq6O3lmaEaLWW0nXR4ql5z8lPbmIUQv9APJY0gdJDxuA3kt6IOkoARniXpqR25K+SMJcyCWYWk14RqhGCL2E4K4sDcRsHEjaH+jmtSFWlgSCw/6acMtmBdZgpcXe6ZZLAnku6dXAN0qSKE3upjIFhpqyJBB8Ax95JAlnjggRi9rsq6Q7cwDBTG4lp+WQkdhMQjmh2My5p+v0UxghVBI2yQVlgsIEoJ6Qals22M+SbFYhxy2A2OlfSHrdurEIEMwB2waAhURFSLSy/h0QLrs/JlMCJIzwN8WsvCcX+E4SF5LrsIFpBIQX2QSFUZ6QiX2XEYTDuHUcEwFkrecI5YTi1vNod60VvXpAYIJbZaOoSUD9s6TIt5S5cdiX6TcugDWHo3BagMEP8ckmoz0gboKiIHLggIBNMwc7AKDsMGOwy94RYS2X0UykLSB2zq5dZhpE2QMcStkEuWmceNTKDv2kBcRs3A8ckvtRlD3MDUCugvE7ALVqKtdozba3BsQv4dyjIYETFuREQZhIfA/m+XOPgvlhPrVypNst1oBEY/55QOR+wWXBDjkKAQT/ExBymQxk6FipR6B0QCKVbMShsQQYyUN4PgoaAoFiIgI3PGwpIxotuAb2yPwHmFYe+xfUYadHHQKEHgEmqC4jBeBONTjnZg5MxwAJz47Oeehcr5/qfwlkrus9w75/GXHj8i/7yMl/FbWIWCRB8sjUceYZLGGnr9A6k0f2yxIlEsHyNeX6OZ7VkG/peQmkEbovDCPU+/QIvQg2h7K9PUvTqrYZpWlFRi9rA3F1vtH/lEDcUvYme2sDqU4sa42VFW2NbtYEkn9u2NC9BsQfWWhqaoPjNYG4K936SFQD0lycvG5NIM1LrgHJJ3s906tVznOAzIcV/r6yNXFsjYN6k705lI2EXwcihn+E4A0ZDehqIx4fmm/kfeZ45nO6qaEFJP/sBY25mC3/lt/QHM98jlvyajTtzX6d5SPTxp2WtJXNhkPDHhBnUOaygFlT+LSBjzC0Y4C4JT0gRC9YuSg9Cr0HzFTnw6MPPbyIk/FtYk3BD2GiObX/A1urP176XOuVAAAAAElFTkSuQmCC',
  ADD_PRODUCT: 'ADD_PRODUCT',
  REMOVE_PRODUCT: 'REMOVE_PRODUCT',
  pizzas: [
    {
      'id': 1,
      'type': 'pizza',
      'name': 'Margerita',
      'price': 5.50,
      'description': 'Toppings: Tomato',
      'quantity': 1
    },
    {
      'id': 2,
      'type': 'pizza',
      'name': 'Vegetarian',
      'price': 5.80,
      'description': 'Toppings: Tomato, ',
      'quantity': 1
    },
    {
      'id': 3,
      'type': 'pizza',
      'name': 'Hawaiian',
      'price': 5.80,
      'description': 'Toppings: fresh tomatoes',
      'quantity': 1
    },
    {
      'id': 4,
      'type': 'pizza',
      'name': 'Hot & Spicy',
      'price': 6.80,
      'description': 'Toppings: mushroom, sweetcorn.',
      'quantity': 1
    },
    {
      'id': 5,
      'type': 'pizza',
      'name': 'Mexican',
      'price': 6.80,
      'description': 'Toppings: Beef, Mushroom',
      'quantity': 1
    },
    {
      'id': 6,
      'type': 'pizza',
      'name': 'Seafood',
      'price': 7.80,
      'description': 'Toppings: Beef, Mushroom',
      'quantity': 1
    },
    {
      'id': 7,
      'type': 'pizza',
      'name': 'Meat Mix',
      'price': 8.20,
      'description': 'Toppings: Beef, Ham, Turkey, Chicken, Peperoni, Seafood, Chicken.',
      'quantity': 1
    },
    {
      'id': 8,
      'type': 'pizza',
      'name': 'Super Special',
      'price': 8.50,
      'description': 'Toppings: All Toppings',
      'quantity': 1
    }
  ],
  burgers: [
    {
      'id': 9,
      'type': 'burger',
      'name': 'Burger',
      'price': {'small': 3.00, 'large': 4.00},
      'description': 'Beef burger with a choice of salad, sauce and cheese.',
      'quantity': 1,
      'size': {'small': '1/4', 'large': '1/2'}
    },
    {
      'id': 11,
      'type': 'burger',
      'name': 'Chicken Burger',
      'price': {'small': 3.40, 'large': 5.00},
      'description': 'Beef burger with a choice of salad, sauce and cheese.',
      'quantity': 1,
      'size': {'small': '1/4', 'large': '1/2'}
    },
    {
      'id': 12,
      'type': 'burger',
      'name': 'Vegie Burger',
      'price': {'small': 3.60, 'large': 5.00},
      'description': 'Vegie burger with a choice of salad, sauce and cheese.',
      'quantity': 1,
      'size': {'small': '1/4', 'large': '1/2'}
    },
    {
      'id': 13,
      'type': 'burger',
      'name': 'Doner Roll',
      'price': 3.80,
      'description': 'Beef burger with a choice of salad, sauce and cheese.',
      'quantity': 1,
    },
    {
      'id': 14,
      'type': 'burger',
      'name': 'Chicken Doner Roll',
      'price': 4.00,
      'description': 'Beef burger with a choice of salad, sauce and cheese.',
      'quantity': 1,
    }
  ],
  drinks: [
    {
      'id': 15,
      'name': 'Coca Cola',
      'size': ['Can', 'Bottle']
    },
    {
      'id': 16,
      'name': 'Orange Tango',
      'size': ['Can', 'Bottle']
    },
    {
      'id': 17,
      'name': 'Rio',
      'size': ['Can']
    },
    {
      'id': 18,
      'name': 'Cherry Tango',
      'size': ['Can']
    },
    {
      'id': 19,
      'name': 'Apple Tango',
      'size': ['Can']
    },
    {
      'id': 20,
      'name': 'Pepsi',
      'size': ['Can', 'Bottle']
    },
    {
      'id': 21,
      'name': 'Dr Pepper',
      'size': ['Can']
    }

  ],
  minimumOrderFee: 13.00

}

module.exports = constants

/*
Notes for Redux methodology

Action - An object that tells the reducer to change its data

Reducer - A function that returns some data.

State - Data for our app to us.

Store- An object that holds the applications data [Reducer and State]

 */
