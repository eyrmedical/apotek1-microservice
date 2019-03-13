# Apotek 1 åpningstider for vaksinasjon

Dette er en enkel webserver for å hente ut åpningstider og lagerstatus for vaksinasjon hos Apotek 1.

---

### Pharmacies

```
curl -X GET https://<server_address>/pharmacies
[
    {
        "address": "AMFI Arena",
        "address2": "Vesterveien 4",
        "city": "Arendal",
        "lat": 58.4596599,
        "lng": 8.763479199999999,
        "name": "Apotek 1 Svanen Arendal",
        "openingHoursWeekDay": "9:00-20:00",
        "openingHoursWeekEnd": "9:00-18:00",
        "zipCode": 4836
    },
    ...
]
```


