# Ethiopian-Gregorian Date Converter

A TypeScript library to convert between Ethiopian and Gregorian calendars.

## 📦 Installation

```bash
npm install ethiopian-gregorian-date-converter
````

## 📘 Usage

```ts
import { GDate, EthDate } from 'ethiopian-gregorian-date-converter';

// Convert Gregorian to Ethiopian
const g = new GDate("2024-09-11");
console.log(g.toEth().toString()); // "2016-13-6"

// Convert Ethiopian to Gregorian
const e = new EthDate(2016, 13, 6);
console.log(e.toGreg().toString()); // "2024-09-11"
```

## 📚 API

### `new GDate(dateString: string)`

* Extends native JavaScript `Date`
* Additional method:

  * `.toEth(): EthDate`

### `new EthDate(year: number, month: number, day: number)`

* Represents an Ethiopian calendar date
* Methods:

  * `.toGreg(): GDate`
  * `.toString(): string`

---

## 🔄 Conversion Notes

* Properly handles leap years in both calendars
* Based on 4-year term cycle used in the Ethiopian calendar
* Converts using reliable markers between years
* Output format: `YYYY-MM-DD`

---

## ✍️ Author

**Biruk Ephrem**

---

## 📄 License

ISC
