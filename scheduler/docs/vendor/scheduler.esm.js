/*!
* CoreUI PRO scheduler v0.1.0-rc.0 (https://coreui.io)
* Copyright 2026 The CoreUI Team (https://github.com/orgs/coreui/people)
* License (https://coreui.io/pro/license/)
* Bundles rrule (BSD-3-Clause), temporal-polyfill, @tanstack/store and
* @tanstack/virtual-core (MIT) — see THIRD-PARTY-NOTICES.md in this package
*/
//#region ../../node_modules/temporal-polyfill/chunks/root.js
const NativeTemporal = globalThis.Temporal;
//#endregion
//#region ../../node_modules/temporal-utils/dist/errorMessages.js
const expectedPositive = (entityName, num) => `Non-positive ${entityName}: ${num}`;
const expectedFinite = (entityName, num) => `Non-finite ${entityName}: ${num}`;
const forbiddenBigIntToNumber = (entityName) => `Cannot convert bigint to ${entityName}`;
const invalidObject = "Invalid object";
const numberOutOfRange = (entityName, val, min, max) => invalidEntity$1(entityName, val) + `; must be between ${min}-${max}`;
const invalidEntity$1 = (fieldName, val) => `Invalid ${fieldName}: ${val}`;
//#endregion
//#region ../../node_modules/temporal-utils/dist/utils.js
const nanoInMicro$1 = 1e3;
const nanoInMilli$1 = 1e6;
const nanoInSec$1 = 1e9;
const nanoInMinute$1 = 6e10;
const nanoInHour$1 = 36e11;
function normalizeOptions(options) {
	if (options === void 0) return Object.create(null);
	return requireObjectLike(options);
}
function toFiniteNumber(arg, entityName = "number") {
	if (typeof arg === "bigint") throw new TypeError(forbiddenBigIntToNumber(entityName));
	arg = Number(arg);
	if (!Number.isFinite(arg)) throw new RangeError(expectedFinite(entityName, arg));
	return arg;
}
function toIntegerWithTrunc(arg, entityName) {
	return Math.trunc(toFiniteNumber(arg, entityName)) || 0;
}
function toPositiveIntegerWithTruncation(arg, entityName) {
	return requireNumberIsPositive(toIntegerWithTrunc(arg, entityName), entityName);
}
function requireNumberIsPositive(num, entityName = "number") {
	if (num <= 0) throw new RangeError(expectedPositive(entityName, num));
	return num;
}
function constrainToRange$1(num, min, max) {
	return Math.min(Math.max(num, min), max);
}
function isObjectLike$1(arg) {
	return arg !== null && (typeof arg === "object" || typeof arg === "function");
}
function requireObjectLike(arg) {
	if (!isObjectLike$1(arg)) throw new TypeError(invalidObject);
	return arg;
}
//#endregion
//#region ../../node_modules/temporal-polyfill/chunks/internal.js
const invalidEntity = invalidEntity$1;
const missingField = (fieldName) => `Missing ${fieldName}`;
const noValidFields = (validFields) => "No valid fields: " + validFields.join();
const invalidChoice = (fieldName, val, choiceMap) => invalidEntity$1(fieldName, val) + "; must be " + Object.keys(choiceMap).join();
const forbiddenValueOf$1 = "Cannot use valueOf";
const invalidCallingContext = "Invalid calling context";
const missingYear = (allowEra) => "Missing year" + (allowEra ? "/era/eraYear" : "");
const invalidLeapMonth = "Invalid leap month";
const invalidCalendar = (calendarId) => invalidEntity$1("Calendar", calendarId);
const exoticCalendarRequired = (calendarId, remedy) => `Unknown calendar ${calendarId}; might need ${remedy}`;
const invalidTimeZone = (calendarId) => invalidEntity$1("TimeZone", calendarId);
const failedParse = (s) => `Cannot parse: ${s}`;
const invalidSubstring = (substring) => `Invalid substring: ${substring}`;
const constrainToRange = constrainToRange$1;
const isObjectLike = isObjectLike$1;
function throwRangeError(message) {
	throw new RangeError(message);
}
function throwTypeError(message) {
	throw new TypeError(message);
}
function clampProp(props, propName, min, max, overflow) {
	return clampEntity(propName, ((props, propName) => {
		const propVal = props[propName];
		return void 0 === propVal && throwTypeError(missingField(propName)), propVal;
	})(props, propName), min, max, overflow);
}
function clampEntity(entityName, num, min, max, overflow, choices) {
	const clamped = constrainToRange(num, min, max);
	return overflow && num !== clamped && throwRangeError(((entityName, val, min, max, choices) => choices ? numberOutOfRange(entityName, choices[val], choices[min], choices[max]) : numberOutOfRange(entityName, val, min, max))(entityName, num, min, max, choices)), clamped;
}
function memoize(generator, MapClass = Map) {
	const map = new MapClass();
	return (key, ...otherArgs) => {
		if (map.has(key)) return map.get(key);
		const val = generator(key, ...otherArgs);
		return map.set(key, val), val;
	};
}
const createNameDescriptors = (name) => createPropDescriptors({ name }, 1);
const createPropDescriptors = (propVals, readonly) => mapProps((value) => ({
	value,
	configurable: 1,
	writable: !readonly
}), propVals);
const createStringTagDescriptors = (value) => ({ [Symbol.toStringTag]: {
	value,
	configurable: 1
} });
function mapProps(transformer, props) {
	const res = {};
	for (const propName in props) res[propName] = transformer(props[propName], propName);
	return res;
}
function zipPropsConst(propNames, propVal) {
	const res = {};
	for (const propName of propNames) res[propName] = propVal;
	return res;
}
function createPropGetters(propNames) {
	const getters = {};
	for (const propName of propNames) getters[propName] = (slots) => slots[propName];
	return getters;
}
function pluckProps(propNames, props, dest = Object.create(null)) {
	for (const propName of propNames) dest[propName] = props[propName];
	return dest;
}
function allPropsEqual(propNames, props0, props1) {
	for (const propName of propNames) if (props0[propName] !== props1[propName]) return 0;
	return 1;
}
function zeroOutProps(propNames, clearUntilI, props) {
	const copy = { ...props };
	for (let i = 0; i < clearUntilI; i++) copy[propNames[i]] = 0;
	return copy;
}
function bindArgs(f, ...boundArgs) {
	return (...dynamicArgs) => f(...boundArgs, ...dynamicArgs);
}
function noop() {}
function capitalize(s) {
	return s[0].toUpperCase() + s.substring(1);
}
function sortStrings(...strss) {
	return [].concat(...strss).sort();
}
function createRegExp(meat) {
	return new RegExp(`^${meat}$`, "i");
}
function parseSubsecNano(fracStr) {
	return parseInt(fracStr.padEnd(9, "0"));
}
function parseSign(s) {
	return s && "+" !== s ? -1 : 1;
}
function parseInt0(s) {
	return void 0 === s ? 0 : parseInt(s);
}
function padNumber(digits, num) {
	return String(num).padStart(digits, "0");
}
const padNumber2 = /*@__PURE__*/ bindArgs(padNumber, 2);
function compareNumbers(a, b) {
	return Math.sign(a - b);
}
function compareBigInts(a, b) {
	return a < b ? -1 : a > b ? 1 : 0;
}
function divFloorBigInt(num, denom) {
	const whole = num / denom;
	return num % denom < 0n ? whole - 1n : whole;
}
function divModFloorBigInt(num, divisor) {
	const quotient = divFloorBigInt(num, divisor);
	return [quotient, num - quotient * divisor];
}
function divModFloor(num, divisor) {
	return [Math.floor(num / divisor), modFloor(num, divisor)];
}
function modFloor(num, divisor) {
	return (num % divisor + divisor) % divisor;
}
function divTrunc(num, divisor) {
	return Math.trunc(num / divisor) || 0;
}
function modTrunc(num, divisor) {
	return num % divisor || 0;
}
function fabricateNearHalfFraction(halfCompare, sign = 1) {
	return sign * (.5 + halfCompare / 5);
}
function hasHalf(num) {
	return .5 === Math.abs(num % 1);
}
const isoCalendarId = "iso8601";
const gregoryEraOrigins = {
	"bce": -1,
	"ce": 0
};
function normalizeEraName(era) {
	const normalized = era.normalize("NFD").toLowerCase().replace(/[^a-z0-9]/g, "");
	return "bc" === normalized || "b" === normalized ? "bce" : "ad" === normalized || "a" === normalized ? "ce" : normalized;
}
function getCalendarSlotId(calendar) {
	return calendar === void 0 ? "iso8601" : 0 === calendar ? "gregory" : calendar.id;
}
const monthCodeRegExp = /^M(\d{2})(L?)$/;
function parseMonthCode(monthCode) {
	const m = monthCodeRegExp.exec(monthCode);
	return m || throwRangeError(((monthCode) => `Invalid monthCode: ${monthCode}`)(monthCode)), [parseInt(m[1]), Boolean(m[2])];
}
function formatMonthCode(monthCodeNumber, isLeapMonth) {
	return "M" + padNumber2(monthCodeNumber) + (isLeapMonth ? "L" : "");
}
function monthCodeNumberToMonth(monthCodeNumber, isLeapMonth, leapMonth) {
	return monthCodeNumber + (isLeapMonth || leapMonth && monthCodeNumber >= leapMonth ? 1 : 0);
}
const unitNameMap = {
	nanosecond: 0,
	microsecond: 1,
	millisecond: 2,
	second: 3,
	minute: 4,
	hour: 5,
	day: 6,
	week: 7,
	month: 8,
	year: 9
};
const unitNamesAsc = /*@__PURE__*/ Object.keys(unitNameMap);
const nanoInMicro = nanoInMicro$1;
const nanoInMilli = nanoInMilli$1;
const nanoInSec = nanoInSec$1;
const nanoInMinute = nanoInMinute$1;
const nanoInHour = nanoInHour$1;
const nanoInUtcDay = 864e11;
const unitNanoMap = [
	1,
	nanoInMicro,
	nanoInMilli,
	nanoInSec,
	nanoInMinute,
	nanoInHour,
	nanoInUtcDay
];
const bigNanoInMicro = /*@__PURE__*/ BigInt(nanoInMicro);
const bigNanoInMilli = /*@__PURE__*/ BigInt(nanoInMilli);
const bigNanoInSec = /*@__PURE__*/ BigInt(nanoInSec);
const bigNanoInMinute = /*@__PURE__*/ BigInt(nanoInMinute);
const bigNanoInHour = /*@__PURE__*/ BigInt(nanoInHour);
const bigNanoInUtcDay = /*@__PURE__*/ BigInt(nanoInUtcDay);
function divideBigNanoToExactNumber(bigNano, divisorNano) {
	const days = Number(bigNano / bigNanoInUtcDay);
	const timeNano = Number(bigNano % bigNanoInUtcDay);
	return days * (nanoInUtcDay / divisorNano) + (Math.trunc(timeNano / divisorNano) + timeNano % divisorNano / divisorNano);
}
const timeFieldNamesAsc = /*@__PURE__*/ unitNamesAsc.slice(0, 6);
const timeGetters = /*@__PURE__*/ createPropGetters(timeFieldNamesAsc);
const yearFieldNamesAsc = ["year"];
const dayFieldNamesAsc = ["day"];
const calendarDateFieldNamesAsc = [
	"day",
	"month",
	"year"
];
const offsetFieldNames = ["offset"];
const timeZoneFieldNames = ["timeZone"];
const eraYearFieldNames = ["era", "eraYear"];
const allYearFieldNames = [
	"era",
	"eraYear",
	"year"
];
const monthFieldNames = ["month", "monthCode"];
const monthDayFieldNames = [
	"day",
	"month",
	"monthCode"
];
const timeFieldNamesAlpha = /*@__PURE__*/ sortStrings(timeFieldNamesAsc);
const yearFieldNamesWithEraAlpha = /*@__PURE__*/ sortStrings(eraYearFieldNames, yearFieldNamesAsc);
const yearMonthFieldNamesAlpha = /*@__PURE__*/ sortStrings(monthFieldNames, yearFieldNamesAsc);
const yearMonthFieldNamesWithEraAlpha = /*@__PURE__*/ sortStrings(eraYearFieldNames, yearMonthFieldNamesAlpha);
const yearMonthCodeFieldNamesAlpha = /*@__PURE__*/ sortStrings(["monthCode"], yearFieldNamesAsc);
const yearMonthCodeFieldNamesWithEraAlpha = /*@__PURE__*/ sortStrings(eraYearFieldNames, yearMonthCodeFieldNamesAlpha);
const monthCodeDayFieldNamesAlpha = /*@__PURE__*/ sortStrings(dayFieldNamesAsc, ["monthCode"]);
const dateFieldNamesAlpha = /*@__PURE__*/ sortStrings(dayFieldNamesAsc, yearMonthFieldNamesAlpha);
const dateFieldNamesWithEraAlpha = /*@__PURE__*/ sortStrings(dayFieldNamesAsc, eraYearFieldNames, yearMonthFieldNamesAlpha);
const dateTimeFieldNamesAlpha = /*@__PURE__*/ sortStrings(dateFieldNamesAlpha, timeFieldNamesAsc);
const dateTimeFieldNamesWithEraAlpha = /*@__PURE__*/ sortStrings(dateFieldNamesWithEraAlpha, timeFieldNamesAsc);
const dateTimeAndOffsetFieldNamesAlpha = /*@__PURE__*/ sortStrings(dateFieldNamesAlpha, timeFieldNamesAsc, offsetFieldNames);
const dateTimeAndOffsetFieldNamesWithEraAlpha = /*@__PURE__*/ sortStrings(dateFieldNamesWithEraAlpha, timeFieldNamesAsc, offsetFieldNames);
const dateTimeAndZoneFieldNamesAlpha = /*@__PURE__*/ sortStrings(dateFieldNamesAlpha, timeFieldNamesAsc, offsetFieldNames, timeZoneFieldNames);
const dateTimeAndZoneFieldNamesWithEraAlpha = /*@__PURE__*/ sortStrings(dateFieldNamesWithEraAlpha, timeFieldNamesAsc, offsetFieldNames, timeZoneFieldNames);
const yearMonthCodeDayFieldNamesAlpha = /*@__PURE__*/ sortStrings(dayFieldNamesAsc, yearMonthCodeFieldNamesAlpha);
const yearMonthCodeDayFieldNamesWithEraAlpha = /*@__PURE__*/ sortStrings(dayFieldNamesAsc, eraYearFieldNames, yearMonthCodeFieldNamesAlpha);
const timeFieldDefaults = /*@__PURE__*/ zipPropsConst(timeFieldNamesAsc, 0);
function validateTimeFields(timeFields) {
	return constrainTimeFields(timeFields, 1), timeFields;
}
const maxValues = {
	hour: 23,
	minute: 59,
	second: 59
};
function constrainTimeFields(timeFields, overflow) {
	const constrainedFields = {};
	for (const fieldName of timeFieldNamesAsc) constrainedFields[fieldName] = clampEntity(fieldName, timeFields[fieldName], 0, maxValues[fieldName] || 999, overflow);
	return constrainedFields;
}
function timeFieldsToNano(timeFields) {
	return timeFieldsToSec(timeFields) * nanoInSec + timeFieldsToSubsecNano(timeFields);
}
function timeFieldsToMilli(timeFields) {
	return 1e3 * timeFieldsToSec(timeFields) + timeFields.millisecond;
}
function timeFieldsToSec(timeFields) {
	return 3600 * timeFields.hour + 60 * timeFields.minute + timeFields.second;
}
function timeFieldsToSubsecNano(timeFields) {
	return timeFields.millisecond * nanoInMilli + timeFields.microsecond * nanoInMicro + timeFields.nanosecond;
}
function nanoToTimeAndDay(nano) {
	const [dayDelta, timeNano] = divModFloor(nano, nanoInUtcDay);
	return [nanoToTimeFields(timeNano), dayDelta];
}
function nanoToTimeFields(timeNano) {
	const [timeMilli, nanoAfterMilli] = divModFloor(timeNano, nanoInMilli);
	const [microsecond, nanosecond] = divModFloor(nanoAfterMilli, nanoInMicro);
	return milliToTimeFields(timeMilli, microsecond, nanosecond);
}
function milliToTimeFields(timeMilli, microsecond = 0, nanosecond = 0) {
	const [hour, milliAfterHour] = divModFloor(timeMilli, 36e5);
	const [minute, milliAfterMinute] = divModFloor(milliAfterHour, 6e4);
	const [second, millisecond] = divModFloor(milliAfterMinute, 1e3);
	return {
		hour,
		minute,
		second,
		millisecond,
		microsecond,
		nanosecond
	};
}
function epochNanoToSecMod(epochNano) {
	const [epochSec, nano] = divModFloorBigInt(epochNano, bigNanoInSec);
	return [Number(epochSec), Number(nano)];
}
function isoDateTimeToEpochNano(isoDateTime) {
	return isoDateToEpochNano(isoDateTime) + BigInt(timeFieldsToNano(isoDateTime));
}
function isoDateTimeToEpochMilli(isoDateTime) {
	return isoDateToEpochMilli(isoDateTime) + timeFieldsToMilli(isoDateTime);
}
function isoDateToEpochNano(isoDate) {
	return BigInt(isoDateToEpochDays(isoDate)) * bigNanoInUtcDay;
}
function isoDateToEpochMilli(isoDate) {
	return 864e5 * isoDateToEpochDays(isoDate);
}
function isoDateToEpochDays(isoDate) {
	return isoArgsToEpochDays(isoDate.year, isoDate.month, isoDate.day);
}
function isoArgsToEpochDays(isoYear, isoMonth = 1, isoDay = 1) {
	const monthIndex = isoMonth - 1;
	return isoYear += Math.floor(monthIndex / 12), isoMonth = modFloor(monthIndex, 12), Date.UTC(isoYear % 400 - 400, isoMonth, 0) / 864e5 + 146097 * (divTrunc(isoYear, 400) + 1) + isoDay;
}
function epochNanoToIsoDateTime(epochNano) {
	const [epochDays, nanoAfterDay] = divModFloorBigInt(epochNano, bigNanoInUtcDay);
	return {
		...epochDaysToIsoDate(Number(epochDays)),
		...nanoToTimeFields(Number(nanoAfterDay))
	};
}
function epochDaysToIsoDate(epochDays) {
	const legacyDate = /* @__PURE__ */ new Date(864e5 * modFloor(epochDays, 146097));
	return {
		year: legacyDate.getUTCFullYear() + 400 * Math.floor(epochDays / 146097),
		month: legacyDate.getUTCMonth() + 1,
		day: legacyDate.getUTCDate()
	};
}
function computeIsoMonthCodeParts(month) {
	return [month, 0];
}
function computeIsoYearMonthFieldsForMonthDay(monthCodeNumber, isLeapMonth) {
	if (!isLeapMonth) return {
		year: 1972,
		month: monthCodeNumber
	};
}
function computeIsoFieldsFromParts(year, month, day) {
	return {
		year,
		month,
		day
	};
}
function computeIsoDaysInMonth(year, month) {
	switch (month) {
		case 2: return computeIsoInLeapYear(year) ? 29 : 28;
		case 4:
		case 6:
		case 9:
		case 11: return 30;
	}
	return 31;
}
function computeIsoDaysInYear(year) {
	return computeIsoInLeapYear(year) ? 366 : 365;
}
function computeIsoInLeapYear(year) {
	return year % 4 == 0 && (year % 100 != 0 || year % 400 == 0);
}
function addIsoMonths(year, month, monthDelta) {
	return year += divTrunc(monthDelta, 12), (month += modTrunc(monthDelta, 12)) < 1 ? (year--, month += 12) : month > 12 && (year++, month -= 12), {
		year,
		month
	};
}
function diffIsoMonthSlots(year0, month0, year1, month1) {
	return 12 * (year1 - year0) + month1 - month0;
}
function computeIsoDayOfWeek(isoDateFields) {
	return modFloor(isoArgsToEpochDays(isoDateFields.year, isoDateFields.month, isoDateFields.day) + 4, 7) || 7;
}
function computeIsoDayOfYear(isoDateFields) {
	return isoArgsToEpochDays(isoDateFields.year, isoDateFields.month, isoDateFields.day) - isoArgsToEpochDays(isoDateFields.year) + 1;
}
function computeIsoWeekFields(isoDateFields) {
	let yearOfWeek = isoDateFields.year;
	let weekOfYear = Math.floor((computeIsoDayOfYear(isoDateFields) - computeIsoDayOfWeek(isoDateFields) + 10) / 7);
	let weeksInYear = computeIsoWeeksInYear(yearOfWeek);
	return weekOfYear < 1 ? weekOfYear = weeksInYear = computeIsoWeeksInYear(--yearOfWeek) : weekOfYear > weeksInYear && (weekOfYear = 1, weeksInYear = computeIsoWeeksInYear(++yearOfWeek)), {
		weekOfYear,
		yearOfWeek,
		Be: weeksInYear
	};
}
function computeIsoWeeksInYear(year) {
	const y0DayOfWeek = computeIsoDayOfWeek({
		year,
		month: 1,
		day: 1
	});
	return 4 === y0DayOfWeek || 3 === y0DayOfWeek && computeIsoInLeapYear(year) ? 53 : 52;
}
function computeGregoryEraFields({ year }) {
	return year < 1 ? {
		era: "bce",
		eraYear: 1 - year
	} : {
		era: "ce",
		eraYear: year
	};
}
function validateIsoDateTimeFields(isoDateTime) {
	return validateIsoDateFields(isoDateTime), validateTimeFields(isoDateTime);
}
function validateIsoDateFields(isoInternals) {
	return constrainIsoDateFields(isoInternals, 1), isoInternals;
}
function isIsoDateFieldsValid(isoDate) {
	return allPropsEqual(calendarDateFieldNamesAsc, isoDate, constrainIsoDateFields(isoDate));
}
function constrainIsoDateFields(isoDate, overflow) {
	const { year } = isoDate;
	const month = clampProp(isoDate, "month", 1, 12, overflow);
	return {
		year,
		month,
		day: clampProp(isoDate, "day", 1, computeIsoDaysInMonth(year, month), overflow)
	};
}
function computeCalendarDateFields(calendar, isoDate) {
	return calendar ? calendar.ae(isoDate) : isoDate;
}
function computeCalendarMonthCodeParts(calendar, year, month) {
	return calendar ? calendar.L(year, month) : computeIsoMonthCodeParts(month);
}
function computeCalendarEraFields(calendar, isoDate) {
	return 0 === calendar ? computeGregoryEraFields(isoDate) : calendar && calendar.h?.(isoDate) || {};
}
function computeCalendarIsoFieldsFromParts(calendar, year, month, day) {
	return calendar ? calendar.de(year, month, day) : computeIsoFieldsFromParts(year, month, day);
}
function computeCalendarMonthsInYearForYear(calendar, year) {
	return calendar ? calendar.j(year) : 12;
}
function computeCalendarDaysInMonthForYearMonth(calendar, year, month) {
	return calendar ? calendar.o(year, month) : computeIsoDaysInMonth(year, month);
}
function computeCalendarMonthCode(calendar, isoDate) {
	const { year, month } = computeCalendarDateFields(calendar, isoDate);
	const [monthCodeNumber, isLeapMonth] = computeCalendarMonthCodeParts(calendar, year, month);
	return formatMonthCode(monthCodeNumber, isLeapMonth);
}
function computeCalendarInLeapYear(calendar, isoDate) {
	const { year } = computeCalendarDateFields(calendar, isoDate);
	return calendar ? calendar.q(year) : computeIsoInLeapYear(year);
}
function computeCalendarMonthsInYear(calendar, isoDate) {
	const { year } = computeCalendarDateFields(calendar, isoDate);
	return computeCalendarMonthsInYearForYear(calendar, year);
}
function computeCalendarDaysInMonth(calendar, isoDate) {
	const { year, month } = computeCalendarDateFields(calendar, isoDate);
	return computeCalendarDaysInMonthForYearMonth(calendar, year, month);
}
function computeCalendarDaysInYear(calendar, isoDate) {
	const { year } = computeCalendarDateFields(calendar, isoDate);
	return calendar ? calendar.i(year) : computeIsoDaysInYear(year);
}
function computeCalendarDayOfYear(calendar, isoDate) {
	if (!calendar) return computeIsoDayOfYear(isoDate);
	const { year } = computeCalendarDateFields(calendar, isoDate);
	const yearStartIsoDate = computeCalendarIsoFieldsFromParts(calendar, year, 1, 1);
	return isoDateToEpochDays(isoDate) - isoDateToEpochDays(yearStartIsoDate) + 1;
}
function computeCalendarWeekOfYear(calendar, isoDate) {
	return calendar === void 0 ? computeIsoWeekFields(isoDate).weekOfYear : void 0;
}
function computeCalendarYearOfWeek(calendar, isoDate) {
	return calendar === void 0 ? computeIsoWeekFields(isoDate).yearOfWeek : void 0;
}
const durationFieldNamesAsc = /*@__PURE__*/ unitNamesAsc.map((unitName) => unitName + "s");
const durationGetters = /*@__PURE__*/ createPropGetters(durationFieldNamesAsc);
const durationFieldNamesAlpha = /*@__PURE__*/ sortStrings(durationFieldNamesAsc);
const durationTimeFieldNamesAsc = /*@__PURE__*/ durationFieldNamesAsc.slice(0, 6);
const durationDateFieldNamesAsc = /*@__PURE__*/ durationFieldNamesAsc.slice(6);
const durationCalendarFieldNamesAsc = /*@__PURE__*/ durationDateFieldNamesAsc.slice(1);
const durationFieldDefaults = /*@__PURE__*/ zipPropsConst(durationFieldNamesAsc, 0);
const durationTimeFieldDefaults = /*@__PURE__*/ zipPropsConst(durationTimeFieldNamesAsc, 0);
const clearDurationFields = /*@__PURE__*/ bindArgs(zeroOutProps, durationFieldNamesAsc);
function requirePropDefined(optionName, optionVal) {
	return optionVal ?? throwRangeError(missingField(optionName)), optionVal;
}
const requireString = /*@__PURE__*/ bindArgs(requireType, "string");
function requireType(typeName, arg, entityName = typeName) {
	return typeof arg !== typeName && throwTypeError(invalidEntity(entityName, arg)), arg;
}
function requireNumberIsInteger(num, entityName = "number") {
	return Number.isInteger(num) || throwRangeError(((entityName, num) => `Non-integer ${entityName}: ${num}`)(entityName, num)), num || 0;
}
function toString(arg) {
	return "symbol" == typeof arg && throwTypeError("Cannot convert Symbol to string"), String(arg);
}
function toStringViaPrimitive(arg, entityName) {
	return isObjectLike$1(arg) ? String(arg) : requireString(arg, entityName);
}
function toBigInt(bi) {
	return "boolean" == typeof bi ? BigInt(bi ? 1 : 0) : "string" == typeof bi ? BigInt(bi) : ("bigint" != typeof bi && throwTypeError(`Invalid bigint: ${bi}`), bi);
}
function toStrictInteger(arg, entityName) {
	return requireNumberIsInteger(toFiniteNumber(arg, entityName), entityName);
}
function normalizeOptionsOrString(options, optionName) {
	return "string" == typeof options ? ((optionName, optionVal) => {
		const res = Object.create(null);
		return res[optionName] = optionVal, res;
	})(optionName, options) : requireObjectLike(options);
}
const smallestUnitStr = "smallestUnit";
const overflowMap = {
	constrain: 0,
	reject: 1
};
const epochDisambigMap = {
	compatible: 0,
	reject: 1,
	earlier: 2,
	later: 3
};
const offsetDisambigMap = {
	reject: 0,
	use: 1,
	prefer: 2,
	ignore: 3
};
const calendarDisplayMap = {
	auto: 0,
	never: 1,
	critical: 2,
	always: 3
};
const timeZoneDisplayMap = {
	auto: 0,
	never: 1,
	critical: 2
};
const offsetDisplayMap = {
	auto: 0,
	never: 1
};
const roundingModeMap = {
	floor: 0,
	halfFloor: 1,
	ceil: 2,
	halfCeil: 3,
	trunc: 4,
	halfTrunc: 5,
	expand: 6,
	halfExpand: 7,
	halfEven: 8
};
const roundingModeFuncs = [
	Math.floor,
	(num) => hasHalf(num) ? Math.floor(num) : Math.round(num),
	Math.ceil,
	(num) => hasHalf(num) ? Math.ceil(num) : Math.round(num),
	Math.trunc,
	(num) => hasHalf(num) ? Math.trunc(num) || 0 : Math.round(num),
	(num) => num < 0 ? Math.floor(num) : Math.ceil(num),
	(num) => Math.sign(num) * Math.round(Math.abs(num)) || 0,
	(num) => hasHalf(num) ? (num = Math.trunc(num) || 0) + num % 2 : Math.round(num)
];
const directionMap = {
	previous: -1,
	next: 1
};
function coerceRoundingIncInteger(options) {
	const roundingInc = options.roundingIncrement;
	return void 0 === roundingInc ? 1 : toIntegerWithTrunc(roundingInc, "roundingIncrement");
}
function coerceFractionalSecondDigits(options) {
	let subsecDigits = options.fractionalSecondDigits;
	if (void 0 !== subsecDigits) {
		if ("number" != typeof subsecDigits) {
			if ("auto" === toString(subsecDigits)) return;
			throwRangeError(invalidEntity("fractionalSecondDigits", subsecDigits));
		}
		subsecDigits = clampEntity("fractionalSecondDigits", Math.floor(subsecDigits), 0, 9, 1);
	}
	return subsecDigits;
}
function coerceUnitOption(optionName, options, minUnit = 0, ensureDefined) {
	let unitStr = options[optionName];
	if (void 0 === unitStr) return ensureDefined ? minUnit : void 0;
	if (unitStr = toString(unitStr), "auto" === unitStr) return ensureDefined ? minUnit : null;
	let unit = unitNameMap[unitStr];
	return void 0 === unit && (unit = durationFieldNamesAsc.indexOf(unitStr)), unit < 0 && throwRangeError(invalidChoice(optionName, unitStr, unitNameMap)), unit;
}
function coerceChoiceOption(optionName, enumNameMap, options, defaultChoice = 0) {
	const enumArg = options[optionName];
	if (void 0 === enumArg) return defaultChoice;
	const enumStr = toString(enumArg);
	const enumNum = enumNameMap[enumStr];
	return void 0 === enumNum && throwRangeError(invalidChoice(optionName, enumStr, enumNameMap)), enumNum;
}
const coerceSmallestUnit = /*@__PURE__*/ bindArgs(coerceUnitOption, smallestUnitStr);
const coerceLargestUnit = /*@__PURE__*/ bindArgs(coerceUnitOption, "largestUnit");
const coerceTotalUnit = /*@__PURE__*/ bindArgs(coerceUnitOption, "unit");
const coerceOverflow = /*@__PURE__*/ bindArgs(coerceChoiceOption, "overflow", overflowMap);
const coerceEpochDisambig = /*@__PURE__*/ bindArgs(coerceChoiceOption, "disambiguation", epochDisambigMap);
const coerceOffsetDisambig = /*@__PURE__*/ bindArgs(coerceChoiceOption, "offset", offsetDisambigMap);
const coerceCalendarDisplay = /*@__PURE__*/ bindArgs(coerceChoiceOption, "calendarName", calendarDisplayMap);
const coerceTimeZoneDisplay = /*@__PURE__*/ bindArgs(coerceChoiceOption, "timeZoneName", timeZoneDisplayMap);
const coerceOffsetDisplay = /*@__PURE__*/ bindArgs(coerceChoiceOption, "offset", offsetDisplayMap);
const coerceRoundingMode = /*@__PURE__*/ bindArgs(coerceChoiceOption, "roundingMode", roundingModeMap);
const coerceDirection = /*@__PURE__*/ bindArgs(coerceChoiceOption, "direction", directionMap);
function validateRoundingInc(roundingInc, smallestUnit, allowManyLargeUnits, solarMode) {
	const upUnitNano = solarMode ? nanoInUtcDay : unitNanoMap[smallestUnit + 1];
	if (upUnitNano) {
		const unitNano = unitNanoMap[smallestUnit];
		upUnitNano % ((roundingInc = clampEntity("roundingIncrement", roundingInc, 1, upUnitNano / unitNano - (solarMode ? 0 : 1), 1)) * unitNano) && throwRangeError(invalidEntity("roundingIncrement", roundingInc));
	} else roundingInc = clampEntity("roundingIncrement", roundingInc, 1, allowManyLargeUnits ? 10 ** 9 : 1, 1);
	return roundingInc;
}
function validateUnitRange(optionName, unit, minUnit, maxUnit) {
	return null != unit && clampEntity(optionName, unit, minUnit, maxUnit, 1, unitNamesAsc), unit;
}
function checkLargestSmallestUnit(largestUnit, smallestUnit) {
	smallestUnit > largestUnit && throwRangeError("smallestUnit > largestUnit");
}
function refineDiffOptions(roundingModeInvert, options, defaultLargestUnit, maxUnit = 9, minUnit = 0, defaultRoundingMode = 4) {
	options = normalizeOptions(options);
	let largestUnit = coerceLargestUnit(options, minUnit);
	let roundingInc = coerceRoundingIncInteger(options);
	let roundingMode = coerceRoundingMode(options, defaultRoundingMode);
	let smallestUnit = coerceSmallestUnit(options, minUnit, 1);
	return largestUnit = validateUnitRange("largestUnit", largestUnit, minUnit, maxUnit), smallestUnit = validateUnitRange(smallestUnitStr, smallestUnit, minUnit, maxUnit), null == largestUnit ? largestUnit = Math.max(defaultLargestUnit, smallestUnit) : checkLargestSmallestUnit(largestUnit, smallestUnit), roundingInc = validateRoundingInc(roundingInc, smallestUnit, 1), roundingModeInvert && (roundingMode = ((roundingMode) => roundingMode < 4 ? (roundingMode + 2) % 4 : roundingMode)(roundingMode)), [
		largestUnit,
		smallestUnit,
		roundingInc,
		roundingMode
	];
}
function refineRoundingOptions(options, maxUnit = 6, solarMode) {
	let roundingInc = coerceRoundingIncInteger(options = normalizeOptionsOrString(options, smallestUnitStr));
	const roundingMode = coerceRoundingMode(options, 7);
	let smallestUnit = coerceSmallestUnit(options);
	return smallestUnit = requirePropDefined(smallestUnitStr, smallestUnit), smallestUnit = validateUnitRange(smallestUnitStr, smallestUnit, 0, maxUnit), roundingInc = validateRoundingInc(roundingInc, smallestUnit, void 0, solarMode), [
		smallestUnit,
		roundingInc,
		roundingMode
	];
}
function combineDateAndTime(isoDate, time) {
	return pluckProps(calendarDateFieldNamesAsc, isoDate, pluckProps(timeFieldNamesAsc, time));
}
function refineOverflowOptions(options) {
	return void 0 === options ? 0 : coerceOverflow(requireObjectLike(options));
}
function refineZonedFieldOptions(options, defaultOffsetDisambig = 0) {
	options = normalizeOptions(options);
	const epochDisambig = coerceEpochDisambig(options);
	const offsetDisambig = coerceOffsetDisambig(options, defaultOffsetDisambig);
	return [
		coerceOverflow(options),
		offsetDisambig,
		epochDisambig
	];
}
const epochNanoMax = /*@__PURE__*/ BigInt(1e8) * bigNanoInUtcDay;
const epochNanoMin = /*@__PURE__*/ BigInt(-1e8) * bigNanoInUtcDay;
const plainDateEpochNanoMin = epochNanoMin - bigNanoInUtcDay;
const isoYearMonthIndexMin = -3261848;
function checkIsoYearMonthInBounds(isoDate) {
	const isoYearMonthIndex = 12 * isoDate.year + isoDate.month;
	return (isoYearMonthIndex < isoYearMonthIndexMin || isoYearMonthIndex > 3309129) && throwRangeError("Out-of-bounds date"), isoDate;
}
function checkIsoDateInBounds(isoDate, allowPlainDateLowerEdge = 1) {
	return checkIsoDateEpochNanoInBounds(isoDateToEpochNano(isoDate), allowPlainDateLowerEdge), isoDate;
}
function checkIsoDateTimeInBounds(isoDateTime) {
	const epochNano = isoDateToEpochNano(isoDateTime);
	return checkIsoDateEpochNanoInBounds(epochNano), epochNano !== plainDateEpochNanoMin || timeFieldsToNano(isoDateTime) || throwRangeError("Out-of-bounds date"), isoDateTime;
}
function checkIsoDateEpochNanoInBounds(epochNano, allowPlainDateLowerEdge = 1) {
	(epochNano < (allowPlainDateLowerEdge ? plainDateEpochNanoMin : epochNanoMin) || epochNano > epochNanoMax) && throwRangeError("Out-of-bounds date");
}
function checkEpochNanoInBounds(epochNano) {
	return (epochNano < epochNanoMin || epochNano > epochNanoMax) && throwRangeError("Out-of-bounds date"), epochNano;
}
function isoDateTimeAndOffsetToEpochNano(isoDateTime, offsetNano) {
	return checkEpochNanoInBounds(isoDateToEpochNano(isoDateTime) + BigInt(timeFieldsToNano(isoDateTime) - offsetNano));
}
function createEpochNanoSlots(epochNano) {
	return { epochNanoseconds: epochNano };
}
function createZonedEpochNanoSlots(epochNano, timeZone, calendar) {
	return {
		calendar,
		timeZone,
		epochNanoseconds: epochNano
	};
}
function createDateTimeSlots(isoDateTime, calendar) {
	return pluckProps(timeFieldNamesAsc, isoDateTime, createDateSlots(isoDateTime, calendar));
}
function createDateSlots(isoDate, calendar) {
	return pluckProps(calendarDateFieldNamesAsc, isoDate, { calendar });
}
function createTimeSlots(time) {
	return pluckProps(timeFieldNamesAsc, time);
}
function createDurationSlots(durationFields) {
	return pluckProps(durationFieldNamesAsc, durationFields, { sign: computeDurationSign(durationFields) });
}
function getEpochMilli(slots) {
	return epochNano = slots.epochNanoseconds, Number(divFloorBigInt(epochNano, bigNanoInMilli));
	var epochNano;
}
function getEpochNano(slots) {
	return slots.epochNanoseconds;
}
function totalDuration(refineRelativeTo, slots, options) {
	const maxDurationUnit = getMaxDurationUnit(slots);
	const [totalUnit, relativeToSlots] = ((options, refineRelativeTo) => {
		const relativeToInternals = refineRelativeTo((options = normalizeOptionsOrString(options, "unit")).relativeTo);
		let totalUnit = coerceTotalUnit(options);
		return totalUnit = requirePropDefined("unit", totalUnit), [totalUnit, relativeToInternals];
	})(options, refineRelativeTo);
	const maxUnit = Math.max(totalUnit, maxDurationUnit);
	const isZoned = relativeToSlots && isZonedEpochSlots(relativeToSlots);
	if (!relativeToSlots && isUniformUnit(maxUnit, isZoned)) return totalDayTimeDuration(slots, totalUnit);
	if (relativeToSlots || throwRangeError("Missing relativeTo"), !slots.sign && isUniformUnit(totalUnit, isZoned)) return 0;
	const [balancedDuration, endEpochNano, relativeOps] = spanRelativeDuration(relativeToSlots, slots, totalUnit);
	return isUniformUnit(totalUnit, isZoned) ? totalDayTimeDuration(balancedDuration, totalUnit) : totalRelativeDuration(balancedDuration, endEpochNano, totalUnit, relativeOps);
}
function totalRelativeDuration(durationFields, endEpochNano, totalUnit, relativeOps) {
	const sign = computeDurationSign(durationFields) || 1;
	const nudgeWindow = clampRelativeDuration(clearDurationFields(totalUnit, durationFields), totalUnit, sign, relativeOps, endEpochNano);
	const epochNano0 = nudgeWindow.ee;
	const epochNano1 = nudgeWindow.te;
	const denom = Number(epochNano1 - epochNano0);
	const numerator = Number(endEpochNano - epochNano0);
	return nudgeWindow.pe[durationFieldNamesAsc[totalUnit]] + numerator / denom * sign;
}
function totalDayTimeDuration(durationFields, totalUnit) {
	return divideBigNanoToExactNumber(durationDayTimeToBigNano(durationFields), unitNanoMap[totalUnit]);
}
function clampRelativeDuration(durationFields, clampUnit, clampDistance, relativeOps, epochNanoProgress) {
	const unitName = durationFieldNamesAsc[clampUnit];
	let startDurationFields = durationFields;
	let shifted = 0;
	let window = computeRelativeDurationWindow(startDurationFields, unitName, clampDistance, relativeOps);
	return epochNanoProgress && !((epochNanoProgress, epochNano0, epochNano1, sign) => sign > 0 ? compareBigInts(epochNano0, epochNanoProgress) <= 0 && compareBigInts(epochNanoProgress, epochNano1) <= 0 : compareBigInts(epochNano1, epochNanoProgress) <= 0 && compareBigInts(epochNanoProgress, epochNano0) <= 0)(epochNanoProgress, window.ee, window.te, Math.sign(clampDistance)) && (startDurationFields = {
		...durationFields,
		[unitName]: durationFields[unitName] + clampDistance
	}, shifted = 1, window = computeRelativeDurationWindow(startDurationFields, unitName, clampDistance, relativeOps)), {
		...window,
		pe: startDurationFields,
		Ae: shifted
	};
}
function computeRelativeDurationWindow(startDurationFields, unitName, clampDistance, relativeOps) {
	const endDurationFields = {
		...startDurationFields,
		[unitName]: startDurationFields[unitName] + clampDistance
	};
	return {
		ee: moveRelativeToEpochNano(relativeOps, startDurationFields),
		te: moveRelativeToEpochNano(relativeOps, endDurationFields),
		se: endDurationFields
	};
}
function computeEpochNanoFrac(epochNanoProgress, epochNano0, epochNano1) {
	const denomBig = epochNano1 - epochNano0;
	const numeratorBig = epochNanoProgress - epochNano0;
	if (!numeratorBig) return 0;
	const absNumerator = numeratorBig < 0n ? -numeratorBig : numeratorBig;
	const absDenom = denomBig < 0n ? -denomBig : denomBig;
	const fracSign = compareBigInts(numeratorBig, 0n) === compareBigInts(denomBig, 0n) ? 1 : -1;
	return compareBigInts(absNumerator, absDenom) <= 0 ? absNumerator === absDenom ? fracSign : fabricateNearHalfFraction(compareBigInts(2n * absNumerator, absDenom), fracSign) : Number(numeratorBig) / Number(denomBig);
}
function roundZonedEpochSlotsToUnit(slots, smallestUnit, roundingInc, roundingMode) {
	let { epochNanoseconds } = slots;
	const { timeZone, calendar } = slots;
	if (0 === smallestUnit && 1 === roundingInc) return {
		epochNanoseconds,
		timeZone,
		calendar
	};
	if (6 === smallestUnit) {
		const isoFields0 = combineDateAndTime(zonedEpochSlotsToIso(slots), timeFieldDefaults);
		const isoFields1 = combineDateAndTime(moveByDays(isoFields0, 1), timeFieldDefaults);
		const epochNano0 = getStartOfDayInstantFor(timeZone, isoFields0);
		const epochNano1 = getStartOfDayInstantFor(timeZone, isoFields1);
		epochNanoseconds = roundWithMode(computeZonedDayRoundFrac(epochNanoseconds, epochNano0, epochNano1), roundingMode) ? epochNano1 : epochNano0;
	} else {
		const isoDateTime = zonedEpochSlotsToIso(slots);
		const offsetNano = isoDateTime.offsetNanoseconds;
		epochNanoseconds = getMatchingInstantFor(timeZone, roundDateTimeToNano(isoDateTime, computeNanoInc(smallestUnit, roundingInc), roundingMode), offsetNano, 2, 0, 1);
	}
	return {
		epochNanoseconds,
		timeZone,
		calendar
	};
}
function computeZonedHoursInDay(slots) {
	const { timeZone } = slots;
	const isoFields0 = combineDateAndTime(zonedEpochSlotsToIso(slots), timeFieldDefaults);
	const isoFields1 = combineDateAndTime(moveByDays(isoFields0, 1), timeFieldDefaults);
	const epochNano0 = getStartOfDayInstantFor(timeZone, isoFields0);
	return divideBigNanoToExactNumber(getStartOfDayInstantFor(timeZone, isoFields1) - epochNano0, nanoInHour);
}
function computeZonedStartOfDay(slots) {
	const { timeZone, calendar } = slots;
	return createZonedEpochNanoSlots(getStartOfDayInstantFor(timeZone, combineDateAndTime(zonedEpochSlotsToIso(slots), timeFieldDefaults)), timeZone, calendar);
}
function computeZonedDayRoundFrac(epochNano, epochNano0, epochNano1) {
	return computeEpochNanoFrac(epochNano < epochNano1 ? epochNano : epochNano1 - 1n, epochNano0, epochNano1);
}
function roundDateTimeToNano(isoDateTime, nanoInc, roundingMode) {
	const [roundedTimeFields, dayDelta] = roundTimeToNano(isoDateTime, nanoInc, roundingMode);
	const roundedIsoDateTime = combineDateAndTime(moveByDays(isoDateTime, dayDelta), roundedTimeFields);
	return checkIsoDateTimeInBounds(roundedIsoDateTime), roundedIsoDateTime;
}
function roundTimeToNano(timeFields, nanoInc, roundingMode) {
	return nanoToTimeAndDay(roundNumberToInc(timeFieldsToNano(timeFields), nanoInc, roundingMode));
}
function roundToMinute(offsetNano) {
	return roundNumberToInc(offsetNano, nanoInMinute, 7);
}
function computeNanoInc(smallestUnit, roundingInc) {
	return unitNanoMap[smallestUnit] * roundingInc;
}
function computeBigNanoInc(smallestUnit, roundingInc) {
	return BigInt(unitNanoMap[smallestUnit]) * BigInt(roundingInc);
}
function roundDayTimeDurationByInc(durationFields, nanoInc, roundingMode) {
	const maxUnit = Math.min(getMaxDurationUnit(durationFields), 6);
	return nanoToDurationDayTimeFields(roundBigNanoToInc(durationDayTimeToBigNano(durationFields), BigInt(nanoInc), roundingMode), maxUnit);
}
function roundRelativeDuration(durationFields, endEpochNano, largestUnit, smallestUnit, roundingInc, roundingMode, relativeOps, isZoned) {
	if (0 === smallestUnit && 1 === roundingInc) return durationFields;
	const sign = computeDurationSign(durationFields) || 1;
	let [roundedDurationFields, roundedEpochNano, grewBigUnit] = (isUniformUnit(smallestUnit, isZoned) ? isZoned && smallestUnit < 6 && largestUnit >= 6 ? nudgeZonedTimeDuration : nudgeDayTimeDuration : nudgeRelativeDuration)(sign, durationFields, endEpochNano, largestUnit, smallestUnit, roundingInc, roundingMode, relativeOps);
	return grewBigUnit && 7 !== smallestUnit && (roundedDurationFields = ((durationFields, endEpochNano, largestUnit, smallestUnit, sign, relativeOps) => {
		for (let currentUnit = smallestUnit + 1; currentUnit <= largestUnit; currentUnit++) {
			if (7 === currentUnit && 7 !== largestUnit) continue;
			const baseDurationFields = clearDurationFields(currentUnit, durationFields);
			baseDurationFields[durationFieldNamesAsc[currentUnit]] += sign;
			const thresholdCompare = compareBigInts(endEpochNano, moveRelativeToEpochNano(relativeOps, baseDurationFields));
			if (thresholdCompare && thresholdCompare !== sign) break;
			durationFields = baseDurationFields;
		}
		return durationFields;
	})(roundedDurationFields, roundedEpochNano, largestUnit, Math.max(6, smallestUnit), sign, relativeOps)), roundedDurationFields;
}
function roundBigNanoToInc(bigNano, bigNanoInc, roundingMode) {
	return roundBigNanoToIncWithTail(bigNano, bigNanoInc, roundingMode, bigNano / bigNanoInc % 2n);
}
function roundBigNanoToDayOriginInc(bigNano, bigNanoInc, roundingMode) {
	const [day, timeNano] = divModFloorBigInt(bigNano, bigNanoInUtcDay);
	const dayOriginNano = day * bigNanoInUtcDay;
	return dayOriginNano + roundBigNanoToIncWithTail(timeNano, bigNanoInc, roundingMode, (dayOriginNano / bigNanoInc + timeNano / bigNanoInc) % 2n);
}
function roundBigNanoToIncWithTail(bigNano, bigNanoInc, roundingMode, quotientTail) {
	const quotient = bigNano / bigNanoInc;
	const remainder = bigNano % bigNanoInc;
	let fraction = 0;
	remainder && (fraction = fabricateNearHalfFraction(compareBigInts(2n * (remainder < 0n ? -remainder : remainder), bigNanoInc), Math.sign(Number(remainder))));
	const roundedTail = roundWithMode(Number(quotientTail) + fraction, roundingMode);
	return (quotient - quotientTail + BigInt(roundedTail)) * bigNanoInc;
}
function roundNumberToInc(num, roundingInc, roundingMode) {
	return roundWithMode(num / roundingInc, roundingMode) * roundingInc;
}
function roundWithMode(num, roundingMode) {
	return roundingModeFuncs[roundingMode](num);
}
function nudgeDayTimeDuration(sign, durationFields, endEpochNano, largestUnit, smallestUnit, roundingInc, roundingMode) {
	const bigNano = durationDayTimeToBigNano(durationFields);
	const roundedBigNano = roundBigNanoToInc(bigNano, computeBigNanoInc(smallestUnit, roundingInc), roundingMode);
	const nanoDiff = roundedBigNano - bigNano;
	const expandedBigUnit = Math.sign(Number(roundedBigNano / bigNanoInUtcDay) - Number(bigNano / bigNanoInUtcDay)) === sign;
	const roundedDayTimeFields = nanoToDurationDayTimeFields(roundedBigNano, Math.min(largestUnit, 6));
	return [
		{
			...durationFields,
			...roundedDayTimeFields
		},
		endEpochNano + nanoDiff,
		expandedBigUnit
	];
}
function nudgeZonedTimeDuration(sign, durationFields, endEpochNano, _largestUnit, smallestUnit, roundingInc, roundingMode, relativeOps) {
	const timeNano = Number(durationTimeToBigNano(durationFields));
	const nanoInc = computeNanoInc(smallestUnit, roundingInc);
	let roundedTimeNano = roundNumberToInc(timeNano, nanoInc, roundingMode);
	const dayWindow = clampRelativeDuration({
		...durationFields,
		...durationTimeFieldDefaults
	}, 6, sign, relativeOps, endEpochNano);
	const dayEpochNano0 = dayWindow.ee;
	const dayEpochNano1 = dayWindow.te;
	const beyondDayNano = roundedTimeNano - Number(dayEpochNano1 - dayEpochNano0);
	let dayDelta = 0;
	beyondDayNano && Math.sign(beyondDayNano) !== sign ? endEpochNano = dayEpochNano0 + BigInt(roundedTimeNano) : (dayDelta += sign, roundedTimeNano = roundNumberToInc(beyondDayNano, nanoInc, roundingMode), endEpochNano = dayEpochNano1 + BigInt(roundedTimeNano));
	const durationTimeFields = nanoToDurationTimeFields(roundedTimeNano);
	return [
		{
			...durationFields,
			...durationTimeFields,
			days: durationFields.days + dayDelta
		},
		endEpochNano,
		Boolean(dayDelta)
	];
}
function nudgeRelativeDuration(sign, durationFields, endEpochNano, _largestUnit, smallestUnit, roundingInc, roundingMode, relativeOps) {
	const smallestUnitFieldName = durationFieldNamesAsc[smallestUnit];
	const baseDurationFields = clearDurationFields(smallestUnit, durationFields);
	7 === smallestUnit && (durationFields = {
		...durationFields,
		weeks: durationFields.weeks + Math.trunc(durationFields.days / 7)
	});
	baseDurationFields[smallestUnitFieldName] = divTrunc(durationFields[smallestUnitFieldName], roundingInc) * roundingInc;
	const nudgeWindow = clampRelativeDuration(baseDurationFields, smallestUnit, roundingInc * sign, relativeOps, endEpochNano);
	const epochNano0 = nudgeWindow.ee;
	const epochNano1 = nudgeWindow.te;
	const frac = computeEpochNanoFrac(endEpochNano, epochNano0, epochNano1);
	const windowStartVal = nudgeWindow.pe[smallestUnitFieldName];
	const windowEndVal = nudgeWindow.se[smallestUnitFieldName];
	const roundedVal = roundNumberToInc(windowStartVal + frac * sign * roundingInc, roundingInc, roundingMode);
	const roundedToEnd = roundedVal === windowEndVal;
	return baseDurationFields[smallestUnitFieldName] = roundedVal, [
		baseDurationFields,
		roundedToEnd ? epochNano1 : epochNano0,
		nudgeWindow.Ae || roundedToEnd
	];
}
function getTimeZoneTransitionEpochNanoseconds(slots, options) {
	return slots.timeZone.O(slots.epochNanoseconds, ((options) => {
		const normalizedOptions = normalizeOptionsOrString(options, "direction");
		const res = coerceDirection(normalizedOptions, 0);
		return res || throwRangeError(invalidEntity("direction", res)), res;
	})(options));
}
const zonedEpochSlotsToIso = /*@__PURE__*/ memoize(_zonedEpochSlotsToIso, WeakMap);
function _zonedEpochSlotsToIso(slots) {
	const { epochNanoseconds, timeZone } = slots;
	const offsetNanoseconds = timeZone.B(epochNanoseconds);
	return {
		...epochNanoToIsoDateTime(epochNanoseconds + BigInt(offsetNanoseconds)),
		offsetNanoseconds
	};
}
function getMatchingInstantFor(timeZone, isoDateTime, offsetNano, offsetDisambig = 0, epochDisambig = 0, epochFuzzy, hasZ) {
	if (void 0 !== offsetNano && 1 === offsetDisambig && (1 === offsetDisambig || hasZ)) return isoDateTimeAndOffsetToEpochNano(isoDateTime, offsetNano);
	2 !== offsetDisambig && 0 !== offsetDisambig || checkIsoDateInBounds(isoDateTime, 0);
	const possibleEpochNanos = timeZone.N(isoDateTime);
	if (void 0 !== offsetNano && 3 !== offsetDisambig) {
		const matchingEpochNano = ((possibleEpochNanos, isoDateTime, offsetNano, fuzzy) => {
			const zonedEpochNano = isoDateTimeToEpochNano(isoDateTime);
			fuzzy && (offsetNano = roundToMinute(offsetNano));
			for (const possibleEpochNano of possibleEpochNanos) {
				let possibleOffsetNano = Number(zonedEpochNano - possibleEpochNano);
				if (fuzzy && (possibleOffsetNano = roundToMinute(possibleOffsetNano)), possibleOffsetNano === offsetNano) return possibleEpochNano;
			}
		})(possibleEpochNanos, isoDateTime, offsetNano, epochFuzzy);
		if (void 0 !== matchingEpochNano) return matchingEpochNano;
		0 === offsetDisambig && throwRangeError("Invalid TimeZone offset");
	}
	return hasZ ? isoDateTimeToEpochNano(isoDateTime) : getSingleInstantFor(timeZone, isoDateTime, epochDisambig, possibleEpochNanos);
}
function getSingleInstantFor(timeZone, isoDateTime, disambig = 0, possibleEpochNanos = timeZone.N(isoDateTime)) {
	if (1 === possibleEpochNanos.length) return possibleEpochNanos[0];
	if (1 === disambig && throwRangeError("Ambiguous offset"), possibleEpochNanos.length) return possibleEpochNanos[3 === disambig ? 1 : 0];
	const zonedEpochNano = isoDateTimeToEpochNano(isoDateTime);
	const gapNano = ((timeZone, zonedEpochNano) => {
		const startOffsetNano = timeZone.B(zonedEpochNano - bigNanoInUtcDay);
		return ((gapNano) => (gapNano > 864e11 && throwRangeError("Out-of-bounds TimeZone gap"), gapNano))(timeZone.B(zonedEpochNano + bigNanoInUtcDay) - startOffsetNano);
	})(timeZone, zonedEpochNano);
	const shiftedIsoDateTime = epochNanoToIsoDateTime(zonedEpochNano + BigInt(gapNano * (2 === disambig ? -1 : 1)));
	return (possibleEpochNanos = timeZone.N(shiftedIsoDateTime))[2 === disambig ? 0 : possibleEpochNanos.length - 1];
}
function getStartOfDayInstantFor(timeZone, isoDateTime) {
	const possibleEpochNanos = timeZone.N(isoDateTime);
	if (possibleEpochNanos.length) return possibleEpochNanos[0];
	const zonedEpochNanoDayBefore = isoDateTimeToEpochNano(isoDateTime) - bigNanoInUtcDay;
	return timeZone.O(zonedEpochNanoDayBefore, 1);
}
function moveYearMonth(doSubtract, calendar, isoDateFields, durationSlots, options) {
	const overflow = refineOverflowOptions(options);
	durationSlots.sign && getMaxDurationUnit(durationSlots) < 8 && throwRangeError("Cannot use small units");
	return moveToStartOfMonth(calendar, dateAddWithOverflow(calendar, checkIsoDateInBounds(moveToStartOfMonth(calendar, isoDateFields)), doSubtract ? negateDurationFields(durationSlots) : durationSlots, overflow));
}
function moveEpochNano(epochNano, durationFields) {
	return checkEpochNanoInBounds(epochNano + (durationHasDateParts(fields = durationFields) && throwRangeError("Cannot use large units"), durationTimeToBigNano(fields)));
	var fields;
}
function moveZonedEpochSlots(slots, durationFields, options) {
	const { calendar, epochNanoseconds: epochNano, timeZone } = slots;
	const timeOnlyNano = durationTimeToBigNano(durationFields);
	let movedEpochNano = epochNano;
	if (durationHasDateParts(durationFields)) {
		const isoDateTime = zonedEpochSlotsToIso(slots);
		movedEpochNano = getSingleInstantFor(timeZone, combineDateAndTime(moveDate(calendar, isoDateTime, {
			...durationFields,
			...durationTimeFieldDefaults
		}, options), isoDateTime)) + timeOnlyNano;
	} else movedEpochNano += timeOnlyNano, refineOverflowOptions(options);
	return {
		...slots,
		epochNanoseconds: checkEpochNanoInBounds(movedEpochNano)
	};
}
function moveDateTime(calendar, isoDateTimeFields, durationFields, options) {
	const [movedTimeFields, dayDelta] = moveTime(isoDateTimeFields, durationFields);
	return checkIsoDateTimeInBounds(combineDateAndTime(moveDate(calendar, isoDateTimeFields, {
		...durationFields,
		...durationTimeFieldDefaults,
		days: durationFields.days + dayDelta
	}, options), movedTimeFields));
}
function moveDate(calendar, isoDateFields, durationFields, options) {
	if (durationFields.years || durationFields.months || durationFields.weeks) return dateAddWithOverflow(calendar, isoDateFields, durationFields, refineOverflowOptions(options));
	refineOverflowOptions(options);
	const days = durationFields.days + Number(durationTimeToBigNano(durationFields) / bigNanoInUtcDay);
	return days ? checkIsoDateInBounds(moveByDays(isoDateFields, days)) : isoDateFields;
}
function moveToStartOfMonth(calendar, isoDateFields) {
	return moveByDays(isoDateFields, 1 - computeCalendarDateFields(calendar, isoDateFields).day);
}
function moveTime(timeFields, durationFields) {
	const durationBigNano = durationTimeToBigNano(durationFields);
	const durDays = Number(durationBigNano / bigNanoInUtcDay);
	const durTimeNano = Number(durationBigNano % bigNanoInUtcDay);
	const [newTimeFields, overflowDays] = nanoToTimeAndDay(timeFieldsToNano(timeFields) + durTimeNano);
	return [newTimeFields, durDays + overflowDays];
}
function moveByDays(isoDate, days) {
	return days ? epochDaysToIsoDate(isoDateToEpochDays(isoDate) + days) : isoDate;
}
function dateAddWithOverflow(calendar, isoDateFields, durationFields, overflow) {
	let { years, months, weeks, days } = durationFields;
	let isoDate;
	if (days += Number(durationTimeToBigNano(durationFields) / bigNanoInUtcDay), years || months) isoDate = addDateMonths(calendar, isoDateFields, years, months, overflow);
	else {
		if (!weeks && !days) return isoDateFields;
		isoDate = isoDateFields;
	}
	return (weeks || days) && (isoDate = moveByDays(isoDate, 7 * weeks + days)), checkIsoDateInBounds(isoDate);
}
function addDateMonths(calendar, isoDateFields, years, months, overflow) {
	let { year, month, day } = computeCalendarDateFields(calendar, isoDateFields);
	if (years) {
		const [monthCodeNumber, isLeapMonth] = computeCalendarMonthCodeParts(calendar, year, month);
		year += years, month = computeYearMovedMonth(calendar, monthCodeNumber, isLeapMonth, calendar ? calendar.p(year) : void 0, overflow), month = clampEntity("month", month, 1, computeCalendarMonthsInYearForYear(calendar, year), overflow);
	}
	if (months) {
		const yearMonthParts = calendar ? calendar.K(year, month, months) : addIsoMonths(year, month, months);
		({year: year, month: month} = yearMonthParts);
	}
	return day = clampEntity("day", day, 1, computeCalendarDaysInMonthForYearMonth(calendar, year, month), overflow), computeCalendarIsoFieldsFromParts(calendar, year, month, day);
}
function computeYearMovedMonth(calendar, monthCodeNumber, isLeapMonth, targetLeapMonth, overflow) {
	if (isLeapMonth) {
		const leapMonthMeta = calendar ? calendar.l : void 0;
		return void 0 !== targetLeapMonth && (leapMonthMeta < 0 || targetLeapMonth === monthCodeNumber + 1) ? targetLeapMonth : (1 === overflow && throwRangeError(invalidLeapMonth), leapMonthMeta < 0 ? -leapMonthMeta : monthCodeNumber);
	}
	return monthCodeNumberToMonth(monthCodeNumber, 0, targetLeapMonth);
}
function getCommonCalendar(a, b) {
	return getCalendarSlotId(a) !== getCalendarSlotId(b) && throwRangeError("Mismatching Calendars"), a;
}
function getCommonTimeZone(a, b) {
	return a.m !== b.m && throwRangeError("Mismatching TimeZones"), a;
}
function getZonedTimeZoneId(slots) {
	return slots.timeZone.id;
}
function diffInstants(invert, instantSlots0, instantSlots1, options) {
	const [largestUnit, smallestUnit, roundingInc, roundingMode] = refineDiffOptions(invert, options, 3, 5);
	const durationFields = diffEpochNanos(instantSlots0.epochNanoseconds, instantSlots1.epochNanoseconds, largestUnit, smallestUnit, roundingInc, roundingMode);
	return createDurationSlots(invert ? negateDurationFields(durationFields) : durationFields);
}
function diffZonedDateTimes(invert, calendar, slots0, slots1, options) {
	const [largestUnit, smallestUnit, roundingInc, roundingMode] = refineDiffOptions(invert, options, 5);
	const epochNano0 = slots0.epochNanoseconds;
	const epochNano1 = slots1.epochNanoseconds;
	let durationFields;
	if (compareBigInts(epochNano1, epochNano0)) {
		if (largestUnit < 6) durationFields = diffEpochNanos(epochNano0, epochNano1, largestUnit, smallestUnit, roundingInc, roundingMode);
		else {
			const timeZone = getCommonTimeZone(slots0.timeZone, slots1.timeZone);
			durationFields = diffZonedEpochsExact(timeZone, calendar, slots0, slots1, largestUnit), durationFields = roundRelativeDuration(durationFields, epochNano1, largestUnit, smallestUnit, roundingInc, roundingMode, createZonedRelativeOps(calendar, timeZone, slots0), 1);
		}
	} else durationFields = durationFieldDefaults;
	return createDurationSlots(invert ? negateDurationFields(durationFields) : durationFields);
}
function diffPlainDateTimes(invert, calendar, plainDateTimeSlots0, plainDateTimeSlots1, options) {
	const [largestUnit, smallestUnit, roundingInc, roundingMode] = refineDiffOptions(invert, options, 6);
	const startEpochNano = isoDateTimeToEpochNano(plainDateTimeSlots0);
	const endEpochNano = isoDateTimeToEpochNano(plainDateTimeSlots1);
	const sign = compareBigInts(endEpochNano, startEpochNano);
	let durationFields;
	return sign ? largestUnit <= 6 ? durationFields = diffEpochNanos(startEpochNano, endEpochNano, largestUnit, smallestUnit, roundingInc, roundingMode) : (durationFields = diffDateTimesBig(calendar, plainDateTimeSlots0, plainDateTimeSlots1, sign, largestUnit), durationFields = roundRelativeDuration(durationFields, endEpochNano, largestUnit, smallestUnit, roundingInc, roundingMode, createDateTimeRelativeOps(calendar, plainDateTimeSlots0))) : durationFields = durationFieldDefaults, createDurationSlots(invert ? negateDurationFields(durationFields) : durationFields);
}
function diffPlainDates(invert, calendar, plainDateSlots0, plainDateSlots1, options) {
	const [largestUnit, smallestUnit, roundingInc, roundingMode] = refineDiffOptions(invert, options, 6, 9, 6);
	return diffDateLike(invert, calendar, plainDateSlots0, plainDateSlots1, largestUnit, smallestUnit, roundingInc, roundingMode);
}
function diffPlainYearMonth(invert, calendar, plainYearMonthSlots0, plainYearMonthSlots1, options) {
	const [largestUnit, smallestUnit, roundingInc, roundingMode] = refineDiffOptions(invert, options, 9, 9, 8);
	const firstOfMonth0 = moveToStartOfMonth(calendar, plainYearMonthSlots0);
	const firstOfMonth1 = moveToStartOfMonth(calendar, plainYearMonthSlots1);
	return compareIsoDate(firstOfMonth0, firstOfMonth1) ? diffDateLike(invert, calendar, checkIsoDateInBounds(firstOfMonth0), checkIsoDateInBounds(firstOfMonth1), largestUnit, smallestUnit, roundingInc, roundingMode, 8) : createDurationSlots(durationFieldDefaults);
}
function diffDateLike(invert, calendar, startIsoDate, endIsoDate, largestUnit, smallestUnit, roundingInc, roundingMode, smallestPrecision = 6) {
	const startEpochNano = isoDateToEpochNano(startIsoDate);
	const endEpochNano = isoDateToEpochNano(endIsoDate);
	let durationFields;
	return compareBigInts(endEpochNano, startEpochNano) ? 6 === largestUnit ? durationFields = diffEpochNanos(startEpochNano, endEpochNano, largestUnit, smallestUnit, roundingInc, roundingMode) : (durationFields = diffCalendarDates(calendar, startIsoDate, endIsoDate, largestUnit), smallestUnit === smallestPrecision && 1 === roundingInc || (durationFields = roundRelativeDuration(durationFields, endEpochNano, largestUnit, smallestUnit, roundingInc, roundingMode, createDateRelativeOps(calendar, startIsoDate)))) : durationFields = durationFieldDefaults, createDurationSlots(invert ? negateDurationFields(durationFields) : durationFields);
}
function diffPlainTimes(invert, plainTimeSlots0, plainTimeSlots1, options) {
	const [largestUnit, smallestUnit, roundingInc, roundingMode] = refineDiffOptions(invert, options, 5, 5);
	const timeDiffNano = roundNumberToInc(timeFieldsToNano(plainTimeSlots1) - timeFieldsToNano(plainTimeSlots0), computeNanoInc(smallestUnit, roundingInc), roundingMode);
	const durationFields = {
		...durationFieldDefaults,
		...nanoToDurationTimeFields(timeDiffNano, largestUnit)
	};
	return createDurationSlots(invert ? negateDurationFields(durationFields) : durationFields);
}
function diffZonedEpochsExact(timeZone, calendar, slots0, slots1, largestUnit) {
	const sign = compareBigInts(slots1.epochNanoseconds, slots0.epochNanoseconds);
	if (!sign) return durationFieldDefaults;
	if (largestUnit < 6) return {
		...durationFieldDefaults,
		...nanoToDurationDayTimeFields(slots1.epochNanoseconds - slots0.epochNanoseconds, largestUnit)
	};
	if (!compareIsoDate(zonedEpochSlotsToIso(slots0), zonedEpochSlotsToIso(slots1))) return {
		...durationFieldDefaults,
		...nanoToDurationDayTimeFields(slots1.epochNanoseconds - slots0.epochNanoseconds, 5)
	};
	const [isoFields0, isoFields1, remainderNano] = prepareZonedEpochDiff(timeZone, slots0, slots1, sign);
	return {
		...6 === largestUnit ? {
			...durationFieldDefaults,
			days: diffDays(isoFields0, isoFields1)
		} : diffCalendarDates(calendar, isoFields0, isoFields1, largestUnit),
		...nanoToDurationTimeFields(remainderNano)
	};
}
function diffDateTimesExact(calendar, startIsoDateTime, endIsoDateTime, largestUnit) {
	const startEpochNano = isoDateTimeToEpochNano(startIsoDateTime);
	const endEpochNano = isoDateTimeToEpochNano(endIsoDateTime);
	const sign = compareBigInts(endEpochNano, startEpochNano);
	return sign ? largestUnit <= 6 ? {
		...durationFieldDefaults,
		...nanoToDurationDayTimeFields(endEpochNano - startEpochNano, largestUnit)
	} : diffDateTimesBig(calendar, startIsoDateTime, endIsoDateTime, sign, largestUnit) : durationFieldDefaults;
}
function diffDateTimesBig(calendar, startIsoDateTime, endIsoDateTime, sign, largestUnit) {
	let diffEndDate = endIsoDateTime;
	let timeNano = timeFieldsToNano(endIsoDateTime) - timeFieldsToNano(startIsoDateTime);
	return Math.sign(timeNano) === -sign && (diffEndDate = moveByDays(endIsoDateTime, -sign), timeNano += 864e11 * sign), {
		...diffCalendarDates(calendar, startIsoDateTime, diffEndDate, largestUnit),
		...nanoToDurationTimeFields(timeNano)
	};
}
function diffCalendarDates(calendar, startIsoDate, endIsoDate, largestUnit) {
	if (largestUnit <= 7) {
		const days = diffDays(startIsoDate, endIsoDate);
		return 7 === largestUnit ? {
			...durationFieldDefaults,
			weeks: divTrunc(days, 7),
			days: modTrunc(days, 7)
		} : {
			...durationFieldDefaults,
			days
		};
	}
	const yearMonthDayStart = computeCalendarDateFields(calendar, startIsoDate);
	const yearMonthDayEnd = computeCalendarDateFields(calendar, endIsoDate);
	if (8 === largestUnit) {
		const { year: year0, month: month0, day: day0 } = yearMonthDayStart;
		const { year: year1, month: month1, day: day1 } = yearMonthDayEnd;
		const sign = Math.sign(compareNumbers(year1, year0) || compareNumbers(month1, month0) || diffDays(startIsoDate, endIsoDate));
		let months = 0;
		let days = 0;
		if (sign) {
			months = calendar ? calendar._(year0, month0, year1, month1) : diffIsoMonthSlots(year0, month0, year1, month1);
			let anchorIsoDate = addDateMonths(calendar, startIsoDate, 0, months, 0);
			sign * compareNumbers(day0, day1) > 0 && (months -= sign, anchorIsoDate = addDateMonths(calendar, startIsoDate, 0, months, 0)), days = diffDays(anchorIsoDate, endIsoDate);
		}
		return {
			...durationFieldDefaults,
			months,
			days
		};
	}
	const { year: year0, month: month0, day: day0 } = yearMonthDayStart;
	let { year: year1, month: month1, day: day1 } = yearMonthDayEnd;
	let yearDiff = year1 - year0;
	let monthDiff = month1 - month0;
	let dayDiff = day1 - day0;
	if (yearDiff || monthDiff) {
		const sign = Math.sign(yearDiff || monthDiff);
		let daysInMonth1 = computeCalendarDaysInMonthForYearMonth(calendar, year1, month1);
		let dayCorrect = 0;
		if (Math.sign(day1 - day0) === -sign) {
			const origDaysInMonth1 = daysInMonth1;
			const yearMonthParts = calendar ? calendar.K(year1, month1, -sign) : addIsoMonths(year1, month1, -sign);
			({year: year1, month: month1} = yearMonthParts), yearDiff = year1 - year0, monthDiff = month1 - month0, daysInMonth1 = computeCalendarDaysInMonthForYearMonth(calendar, year1, month1), dayCorrect = sign < 0 ? -origDaysInMonth1 : daysInMonth1;
		}
		if (dayDiff = day1 - Math.min(day0, daysInMonth1) + dayCorrect, yearDiff) {
			const [monthCodeNumber0, isLeapMonth0] = computeCalendarMonthCodeParts(calendar, year0, month0);
			const [monthCodeNumber1, isLeapMonth1] = computeCalendarMonthCodeParts(calendar, year1, month1);
			const leapMonthMeta = calendar ? calendar.l : void 0;
			if (monthDiff = void 0 !== leapMonthMeta && isLeapMonth0 && !isLeapMonth1 && (leapMonthMeta < 0 ? sign > 0 && monthCodeNumber1 === -leapMonthMeta : sign < 0 && monthCodeNumber1 === monthCodeNumber0) ? 0 : monthCodeNumber1 - monthCodeNumber0 || Number(isLeapMonth1) - Number(isLeapMonth0), Math.sign(monthDiff) === -sign) {
				const monthCorrect = sign < 0 && -computeCalendarMonthsInYearForYear(calendar, year1);
				year1 -= sign, yearDiff = year1 - year0, monthDiff = month1 - computeYearMovedMonth(calendar, monthCodeNumber0, isLeapMonth0, calendar ? calendar.p(year1) : void 0, 0) + (monthCorrect || computeCalendarMonthsInYearForYear(calendar, year1));
			} else if (calendar) {
				const month0Projected = computeYearMovedMonth(calendar, monthCodeNumber0, isLeapMonth0, calendar.p(year1), 0);
				monthDiff = calendar._(year1, month0Projected, year1, month1);
			}
		}
	}
	return {
		...durationFieldDefaults,
		years: yearDiff,
		months: monthDiff,
		days: dayDiff
	};
}
function compareIsoDate(isoDate0, isoDate1) {
	return compareNumbers(isoDate0.year, isoDate1.year) || compareNumbers(isoDate0.month, isoDate1.month) || compareNumbers(isoDate0.day, isoDate1.day);
}
function prepareZonedEpochDiff(timeZone, slots0, slots1, sign) {
	const startIsoDate = zonedEpochSlotsToIso(slots0);
	const endIsoDate = zonedEpochSlotsToIso(slots1);
	const endEpochNano = slots1.epochNanoseconds;
	let dayCorrection = 0;
	const timeDiffNano = timeFieldsToNano(endIsoDate) - timeFieldsToNano(startIsoDate);
	Math.sign(timeDiffNano) === -sign && dayCorrection++;
	const maxDayCorrection = dayCorrection + (sign > 0 ? 1 : 0);
	for (; dayCorrection <= maxDayCorrection; dayCorrection++) {
		const midIsoDate = moveByDays(endIsoDate, dayCorrection * -sign);
		const midEpochNano = getSingleInstantFor(timeZone, combineDateAndTime(midIsoDate, startIsoDate));
		if (compareBigInts(endEpochNano, midEpochNano) !== -sign) return [
			startIsoDate,
			midIsoDate,
			Number(endEpochNano - midEpochNano)
		];
	}
}
function diffEpochNanos(startEpochNano, endEpochNano, largestUnit, smallestUnit, roundingInc, roundingMode) {
	return {
		...durationFieldDefaults,
		...nanoToDurationDayTimeFields(roundBigNanoToInc(endEpochNano - startEpochNano, computeBigNanoInc(smallestUnit, roundingInc), roundingMode), largestUnit)
	};
}
function diffDays(startIsoDate, endIsoDate) {
	return isoDateToEpochDays(endIsoDate) - isoDateToEpochDays(startIsoDate);
}
function createDateRelativeOps(calendar, origin) {
	return {
		origin,
		ie: isoDateToEpochNano(origin),
		calendar,
		he: isoDateToEpochNano
	};
}
function createDateTimeRelativeOps(calendar, origin) {
	return {
		origin,
		ie: isoDateTimeToEpochNano(origin),
		calendar,
		he: (movedIsoDate) => isoDateTimeToEpochNano(combineDateAndTime(movedIsoDate, origin))
	};
}
function createZonedRelativeOps(calendar, timeZone, slots) {
	const origin = zonedEpochSlotsToIso(slots);
	return {
		origin,
		ie: slots.epochNanoseconds,
		calendar,
		he: (movedIsoDate) => getSingleInstantFor(timeZone, combineDateAndTime(movedIsoDate, origin))
	};
}
function moveRelativeToEpochNano(relativeOps, dateDuration) {
	return durationHasDateParts(dateDuration) ? relativeOps.he(moveDate(relativeOps.calendar, relativeOps.origin, dateDuration)) : relativeOps.ie;
}
function spanRelativeDuration(relativeToSlots, durationFields, largestUnit) {
	const { calendar } = relativeToSlots;
	if (isZonedEpochSlots(relativeToSlots)) {
		const { timeZone } = relativeToSlots;
		const endSlots = moveZonedEpochSlots(relativeToSlots, durationFields);
		return [
			diffZonedEpochsExact(timeZone, calendar, relativeToSlots, endSlots, largestUnit),
			endSlots.epochNanoseconds,
			createZonedRelativeOps(calendar, timeZone, relativeToSlots)
		];
	}
	const origin = checkIsoDateTimeInBounds(combineDateAndTime(relativeToSlots, timeFieldDefaults));
	const end = moveDateTime(calendar, origin, durationFields);
	return [
		diffDateTimesExact(calendar, origin, end, largestUnit),
		isoDateTimeToEpochNano(end),
		createDateRelativeOps(calendar, relativeToSlots)
	];
}
function moveRelativeEndpointToEpochNano(relativeToSlots, durationFields) {
	return isZonedEpochSlots(relativeToSlots) ? moveZonedEpochSlots(relativeToSlots, durationFields).epochNanoseconds : isoDateTimeToEpochNano(moveDateTime(relativeToSlots.calendar, combineDateAndTime(relativeToSlots, timeFieldDefaults), durationFields));
}
function isZonedEpochSlots(slots) {
	return "timeZone" in slots;
}
function isUniformUnit(unit, isZoned) {
	return unit <= 6 - (isZoned ? 1 : 0);
}
function nanoToGivenFields(nano, largestUnit, fieldNames) {
	const fields = {};
	for (let unit = largestUnit; unit >= 0; unit--) {
		const divisor = unitNanoMap[unit];
		fields[fieldNames[unit]] = divTrunc(nano, divisor), nano = modTrunc(nano, divisor);
	}
	return fields;
}
const maxDurationSeconds = 2 ** 53;
function addDurations(refineRelativeTo, doSubtract, slots, otherSlots, options) {
	const relativeToSlots = refineRelativeTo(normalizeOptions(options).relativeTo);
	const maxUnit = Math.max(getMaxDurationUnit(slots), getMaxDurationUnit(otherSlots));
	return isUniformUnit(maxUnit, relativeToSlots && isZonedEpochSlots(relativeToSlots)) ? addDayTimeDurationsChecked(doSubtract, slots, otherSlots, maxUnit) : (relativeToSlots || throwRangeError("Missing relativeTo"), doSubtract && (otherSlots = negateDurationFields(otherSlots)), createDurationSlots(((relativeToSlots, durationFields0, durationFields1, largestUnit) => {
		const { calendar } = relativeToSlots;
		if (isZonedEpochSlots(relativeToSlots)) {
			const { timeZone } = relativeToSlots;
			return diffZonedEpochsExact(timeZone, calendar, relativeToSlots, moveZonedEpochSlots(moveZonedEpochSlots(relativeToSlots, durationFields0), durationFields1), largestUnit);
		}
		const origin = combineDateAndTime(relativeToSlots, timeFieldDefaults);
		return diffDateTimesExact(calendar, origin, moveDateTime(calendar, moveDateTime(calendar, origin, durationFields0), durationFields1), largestUnit);
	})(relativeToSlots, slots, otherSlots, maxUnit)));
}
function addDayTimeDurationsChecked(doSubtract, slots, otherSlots, maxUnit) {
	return createDurationSlots(validateDurationFields(((a, b, largestUnit, doSubtract) => {
		const combined = durationDayTimeToBigNano(a) + durationDayTimeToBigNano(b) * BigInt(doSubtract ? -1 : 1);
		return Number.isFinite(Number(combined / bigNanoInUtcDay)) || throwRangeError("Out-of-bounds date"), {
			...durationFieldDefaults,
			...nanoToDurationDayTimeFields(combined, largestUnit)
		};
	})(slots, otherSlots, maxUnit, doSubtract)));
}
function roundDuration(refineRelativeTo, slots, options) {
	const durationLargestUnit = getMaxDurationUnit(slots);
	const [largestUnit, smallestUnit, roundingInc, roundingMode, relativeToSlots] = ((options, defaultLargestUnit, refineRelativeTo) => {
		options = normalizeOptionsOrString(options, smallestUnitStr);
		let largestUnit = coerceLargestUnit(options);
		const relativeToInternals = refineRelativeTo(options.relativeTo);
		let roundingInc = coerceRoundingIncInteger(options);
		const roundingMode = coerceRoundingMode(options, 7);
		let smallestUnit = coerceSmallestUnit(options);
		return void 0 === largestUnit && void 0 === smallestUnit && throwRangeError("Required smallestUnit or largestUnit"), smallestUnit ??= 0, largestUnit ??= Math.max(smallestUnit, defaultLargestUnit), checkLargestSmallestUnit(largestUnit, smallestUnit), roundingInc = validateRoundingInc(roundingInc, smallestUnit, 1), roundingInc > 1 && smallestUnit > 5 && largestUnit !== smallestUnit && throwRangeError("For calendar units with roundingIncrement > 1, use largestUnit = smallestUnit"), [
			largestUnit,
			smallestUnit,
			roundingInc,
			roundingMode,
			relativeToInternals
		];
	})(options, durationLargestUnit, refineRelativeTo);
	if (!relativeToSlots && Math.max(durationLargestUnit, largestUnit) <= 6) return createDurationSlots(validateDurationFields(((durationFields, largestUnit, smallestUnit, roundingInc, roundingMode) => {
		const roundedBigNano = roundBigNanoToInc(durationDayTimeToBigNano(durationFields), computeBigNanoInc(smallestUnit, roundingInc), roundingMode);
		return {
			...durationFieldDefaults,
			...nanoToDurationDayTimeFields(roundedBigNano, largestUnit)
		};
	})(slots, largestUnit, smallestUnit, roundingInc, roundingMode)));
	const isZoned = relativeToSlots && isZonedEpochSlots(relativeToSlots);
	const needsZonedDayLength = isZoned && largestUnit >= 6 && smallestUnit < 6;
	if (!slots.sign && !needsZonedDayLength) return slots;
	relativeToSlots || throwRangeError("Missing relativeTo");
	const [balancedDuration, endEpochNano, relativeOps] = spanRelativeDuration(relativeToSlots, slots, largestUnit);
	return createDurationSlots(roundRelativeDuration(balancedDuration, endEpochNano, largestUnit, smallestUnit, roundingInc, roundingMode, relativeOps, isZoned));
}
function absDuration(slots) {
	return -1 === slots.sign ? negateDuration(slots) : slots;
}
function negateDuration(slots) {
	return createDurationSlots(negateDurationFields(slots));
}
function negateDurationFields(fields) {
	const res = {};
	for (const fieldName of durationFieldNamesAsc) res[fieldName] = -1 * fields[fieldName] || 0;
	return res;
}
function computeDurationSign(fields, fieldNames = durationFieldNamesAsc) {
	let sign = 0;
	for (const fieldName of fieldNames) {
		const fieldSign = Math.sign(fields[fieldName]);
		fieldSign && (sign && sign !== fieldSign && throwRangeError("Cannot mix duration signs"), sign = fieldSign);
	}
	return sign;
}
function validateDurationFields(fields) {
	for (const calendarUnit of durationCalendarFieldNamesAsc) clampEntity(calendarUnit, fields[calendarUnit], -4294967295, 4294967295, 1);
	const bigNano = durationDayTimeToBigNano(fields);
	return validateDurationTimeUnit(Number(bigNano / bigNanoInSec)), fields;
}
function validateDurationTimeUnit(n) {
	Number.isSafeInteger(n) || throwRangeError("Out-of-bounds duration");
}
function durationDayTimeToBigNano(fields) {
	return BigInt(fields.days) * bigNanoInUtcDay + durationTimeToBigNano(fields);
}
function durationTimeToBigNano(fields) {
	return BigInt(fields.hours) * bigNanoInHour + BigInt(fields.minutes) * bigNanoInMinute + durationSubMinuteToBigNano(fields);
}
function durationSubMinuteToBigNano(fields) {
	return BigInt(fields.seconds) * bigNanoInSec + BigInt(fields.milliseconds) * bigNanoInMilli + BigInt(fields.microseconds) * bigNanoInMicro + BigInt(fields.nanoseconds);
}
function nanoToDurationDayTimeFields(bigNano, largestUnit = 6) {
	const days = Number(bigNano / bigNanoInUtcDay);
	const timeNano = Number(bigNano % bigNanoInUtcDay);
	const unitNano = unitNanoMap[largestUnit];
	const largestUnitVal = largestUnit <= 3 ? Number(bigNano / BigInt(unitNano)) : days * (nanoInUtcDay / unitNano) + divTrunc(timeNano, unitNano);
	Number.isFinite(largestUnitVal) || throwRangeError("Out-of-bounds date"), largestUnit <= 3 && Math.abs(largestUnitVal) / (nanoInSec / unitNanoMap[largestUnit]) >= maxDurationSeconds && throwRangeError("Out-of-bounds date");
	const dayTimeFields = nanoToGivenFields(timeNano, largestUnit, durationFieldNamesAsc);
	return dayTimeFields[durationFieldNamesAsc[largestUnit]] = largestUnitVal, dayTimeFields;
}
function nanoToDurationTimeFields(nano, largestUnit = 5) {
	return nanoToGivenFields(nano, largestUnit, durationFieldNamesAsc);
}
function durationHasDateParts(fields) {
	return Boolean(computeDurationSign(fields, durationDateFieldNamesAsc));
}
function getMaxDurationUnit(fields) {
	let unit = 9;
	for (; unit > 0 && !fields[durationFieldNamesAsc[unit]]; unit--);
	return unit;
}
function compareZonedEpochSlots(zonedEpochSlots0, zonedEpochSlots1) {
	return compareBigInts(zonedEpochSlots0.epochNanoseconds, zonedEpochSlots1.epochNanoseconds);
}
function compareDurations(refineRelativeTo, durationSlots0, durationSlots1, options) {
	const relativeToSlots = refineRelativeTo(normalizeOptions(options).relativeTo);
	const maxUnit = Math.max(getMaxDurationUnit(durationSlots0), getMaxDurationUnit(durationSlots1));
	return allPropsEqual(durationFieldNamesAsc, durationSlots0, durationSlots1) ? 0 : isUniformUnit(maxUnit, relativeToSlots && isZonedEpochSlots(relativeToSlots)) ? compareBigInts(durationDayTimeToBigNano(durationSlots0), durationDayTimeToBigNano(durationSlots1)) : (relativeToSlots || throwRangeError("Missing relativeTo"), compareBigInts(moveRelativeEndpointToEpochNano(relativeToSlots, durationSlots0), moveRelativeEndpointToEpochNano(relativeToSlots, durationSlots1)));
}
function compareIsoDateTimeFields(isoDateTime0, isoDateTime1) {
	return compareIsoDateFields(isoDateTime0, isoDateTime1) || compareTimeFields(isoDateTime0, isoDateTime1);
}
function compareIsoDateFields(isoFields0, isoFields1) {
	return compareNumbers(isoDateToEpochDays(isoFields0), isoDateToEpochDays(isoFields1));
}
function compareTimeFields(isoFields0, isoFields1) {
	return compareNumbers(timeFieldsToNano(isoFields0), timeFieldsToNano(isoFields1));
}
function instantsEqual(instantSlots0, instantSlots1) {
	return !compareZonedEpochSlots(instantSlots0, instantSlots1);
}
function zonedDateTimesEqual(zonedDateTimeSlots0, zonedDateTimeSlots1) {
	return !compareZonedEpochSlots(zonedDateTimeSlots0, zonedDateTimeSlots1) && zonedDateTimeSlots0.timeZone.m === zonedDateTimeSlots1.timeZone.m && zonedDateTimeSlots0.calendar === zonedDateTimeSlots1.calendar;
}
function plainDateTimesEqual(plainDateTimeSlots0, plainDateTimeSlots1) {
	return !compareIsoDateTimeFields(plainDateTimeSlots0, plainDateTimeSlots1) && plainDateTimeSlots0.calendar === plainDateTimeSlots1.calendar;
}
function plainDatesEqual(plainDateSlots0, plainDateSlots1) {
	return !compareIsoDateFields(plainDateSlots0, plainDateSlots1) && plainDateSlots0.calendar === plainDateSlots1.calendar;
}
function plainYearMonthsEqual(plainYearMonthSlots0, plainYearMonthSlots1) {
	return !compareIsoDateFields(plainYearMonthSlots0, plainYearMonthSlots1) && plainYearMonthSlots0.calendar === plainYearMonthSlots1.calendar;
}
function plainMonthDaysEqual(plainMonthDaySlots0, plainMonthDaySlots1) {
	return !compareIsoDateFields(plainMonthDaySlots0, plainMonthDaySlots1) && plainMonthDaySlots0.calendar === plainMonthDaySlots1.calendar;
}
function plainTimesEqual(plainTimeSlots0, plainTimeSlots1) {
	return !compareTimeFields(plainTimeSlots0, plainTimeSlots1);
}
function getCalendarEraOrigins(calendar) {
	return 0 === calendar ? gregoryEraOrigins : calendar ? calendar.k : void 0;
}
function getCalendarFieldNames(calendar, fieldNames, fieldNamesWithEra = fieldNames) {
	return getCalendarEraOrigins(calendar) ? fieldNamesWithEra : fieldNames;
}
function resolveCalendarYear(calendar, fields) {
	const exoticCalendar = calendar || void 0;
	const eraOrigins = getCalendarEraOrigins(calendar);
	let { era, eraYear, year } = fields;
	if (void 0 !== year && (year = toIntegerWithTrunc(year, "year")), void 0 !== eraYear && (eraYear = toIntegerWithTrunc(eraYear, "eraYear")), void 0 !== era || void 0 !== eraYear) {
		void 0 !== era && void 0 !== eraYear || throwTypeError("Mismatching era/eraYear"), eraOrigins || throwRangeError("Forbidden era/eraYear");
		const normalizedEra = normalizeEraName(era);
		const eraOrigin = eraOrigins[normalizedEra];
		void 0 === eraOrigin && throwRangeError(((era) => `Invalid era: ${era}`)(era));
		const yearByEra = exoticCalendar?.$ ? exoticCalendar.$(eraYear, normalizedEra, eraOrigin) : eraYearToYear(eraYear, eraOrigin);
		void 0 !== year && year !== yearByEra && throwRangeError("Mismatching year/eraYear"), year = yearByEra;
	} else void 0 === year && throwTypeError(missingYear(eraOrigins));
	return year;
}
function resolveCalendarMonth(calendar, fields, year, overflow, monthCodeParts) {
	let { month, monthCode } = fields;
	if (void 0 !== monthCode) {
		const monthByCode = ((calendar, monthCode, year, overflow, monthCodeParts = parseMonthCode(monthCode)) => {
			const leapMonth = calendar ? calendar.p(year) : void 0;
			const [monthCodeNumber, wantsLeapMonth] = monthCodeParts;
			let month = monthCodeNumberToMonth(monthCodeNumber, wantsLeapMonth, leapMonth);
			if (wantsLeapMonth) {
				const leapMonthMeta = calendar ? calendar.l : void 0;
				void 0 === leapMonthMeta && throwRangeError(invalidLeapMonth), leapMonthMeta > 0 ? (month > leapMonthMeta && throwRangeError(invalidLeapMonth), leapMonth !== month && (1 === overflow && throwRangeError(invalidLeapMonth), month = monthCodeNumberToMonth(monthCodeNumber, 0, leapMonth))) : (month !== -leapMonthMeta && throwRangeError(invalidLeapMonth), void 0 === leapMonth && 1 === overflow && throwRangeError(invalidLeapMonth));
			}
			return month;
		})(calendar, monthCode, year, overflow, monthCodeParts);
		void 0 !== month && month !== monthByCode && throwRangeError("Mismatching month/monthCode"), month = monthByCode, overflow = 1;
	} else void 0 === month && throwTypeError("Missing month/monthCode");
	return clampEntity("month", month, 1, computeCalendarMonthsInYearForYear(calendar, year), overflow);
}
function resolveCalendarDay(calendar, fields, month, year, overflow) {
	return clampProp(fields, "day", 1, computeCalendarDaysInMonthForYearMonth(calendar, year, month), overflow);
}
function eraYearToYear(eraYear, eraOrigin) {
	return (eraOrigin + eraYear) * (Math.sign(eraOrigin) || 1) || 0;
}
function resolveTimeFields(fields, overflow) {
	return constrainTimeFields(pluckProps(timeFieldNamesAsc, {
		...timeFieldDefaults,
		...fields
	}), overflow);
}
const offsetRegExp = /*@__PURE__*/ createRegExp("([+-])(\\d{2})(?::?(\\d{2})(?::?(\\d{2})(?:[.,](\\d{1,9}))?)?)?");
function parseOffsetNano(s) {
	const offsetNano = parseOffsetNanoMaybe(s);
	return void 0 === offsetNano && throwRangeError(failedParse(s)), offsetNano;
}
function parseOffsetNanoMaybe(s, onlyHourMinute) {
	const parts = offsetRegExp.exec(s);
	if (parts && ((s) => ((s) => {
		"T" !== s[0] && "t" !== s[0] || (s = s.slice(1));
		const fractionIndex = s.search(/[.,]/);
		const main = fractionIndex < 0 ? s : s.slice(0, fractionIndex);
		const parts = main.split(":");
		return 1 === parts.length ? /^(?:\d{2}|\d{4}|\d{6})$/i.test(main) : (2 === parts.length || 3 === parts.length) && parts.every((part) => 2 === part.length && /^\d{2}$/i.test(part));
	})(s.slice(1)))(parts[0])) return ((parts, onlyHourMinute) => {
		const firstSubMinutePart = parts[4] || parts[5];
		onlyHourMinute && firstSubMinutePart && throwRangeError(invalidSubstring(firstSubMinutePart));
		return offsetNano = (parseInt0(parts[2]) * nanoInHour + parseInt0(parts[3]) * nanoInMinute + parseInt0(parts[4]) * nanoInSec + parseSubsecNano(parts[5] || "")) * parseSign(parts[1]), Math.abs(offsetNano) >= 864e11 && throwRangeError("Out-of-bounds offset"), offsetNano;
		var offsetNano;
	})(parts, onlyHourMinute);
}
const dateFieldRefiners = {
	era: toStringViaPrimitive,
	month: toPositiveIntegerWithTruncation,
	monthCode(monthCode, entityName) {
		if ("string" == typeof monthCode) return monthCode;
		if (monthCode && "object" == typeof monthCode) {
			const monthCodeToString = monthCode.toString;
			if ("function" == typeof monthCodeToString) return requireString(monthCodeToString.call(monthCode), entityName);
		}
		return requireString(monthCode, entityName);
	},
	day: toPositiveIntegerWithTruncation
};
const timeFieldRefiners = /*@__PURE__*/ zipPropsConst(timeFieldNamesAsc, toIntegerWithTrunc);
const durationFieldRefiners = /*@__PURE__*/ zipPropsConst(durationFieldNamesAsc, toStrictInteger);
const dateTimeFieldRefiners = /*@__PURE__*/ Object.assign({}, dateFieldRefiners, timeFieldRefiners);
const zonedDateTimeFieldRefiners = {
	offset(offsetString) {
		return parseOffsetNano(toStringViaPrimitive(offsetString));
	},
	...dateTimeFieldRefiners
};
function readAndRefineBagFields(bag, validFieldNames, fieldRefiners, requiredFieldNames, disallowEmpty = !requiredFieldNames) {
	const res = {};
	let anyMatching = 0;
	for (const fieldName of validFieldNames) {
		let fieldVal = bag[fieldName];
		if (void 0 !== fieldVal) {
			anyMatching = 1;
			const refiner = fieldRefiners[fieldName];
			refiner && (fieldVal = refiner(fieldVal, fieldName)), res[fieldName] = fieldVal;
		} else requiredFieldNames && requiredFieldNames.includes(fieldName) && throwTypeError(missingField(fieldName));
	}
	return disallowEmpty && !anyMatching && throwTypeError(noValidFields(validFieldNames)), res;
}
function createPlainDateTimeFromRefinedFields(isoDate, time = timeFieldDefaults, calendar) {
	const isoDateTime = combineDateAndTime(isoDate, time);
	return checkIsoDateTimeInBounds(isoDateTime), createDateTimeSlots(isoDateTime, calendar);
}
function createPlainDateFromFields(calendar, fields, options) {
	return createPlainDateFromPreparedFields(calendar, fields, prepareDateFields(calendar, fields), refineOverflowOptions(options));
}
function createPlainDateFromFieldsWithOptionsRefiner(calendar, fields, refineOptions) {
	const prepared = prepareDateFields(calendar, fields);
	const refinedOptions = refineOptions();
	return [createPlainDateFromPreparedFields(calendar, fields, prepared, refinedOptions[0]), ...refinedOptions];
}
function createPlainDateFromPreparedFields(calendar, fields, prepared, overflow) {
	const year = prepared[1];
	const month = resolveCalendarMonth(calendar, fields, year, overflow, prepared[0]);
	return createDateSlots(checkIsoDateInBounds(computeCalendarIsoFieldsFromParts(calendar, year, month, resolveCalendarDay(calendar, fields, month, year, overflow))), calendar);
}
function parseMonthCodeField(fields) {
	if (void 0 !== fields.monthCode) return parseMonthCode(fields.monthCode);
}
function prepareDateFields(calendar, fields) {
	const eraOrigins = getCalendarEraOrigins(calendar);
	return void 0 !== fields.year || void 0 !== fields.era && void 0 !== fields.eraYear || throwTypeError(missingYear(eraOrigins)), void 0 === fields.monthCode && void 0 === fields.month && throwTypeError("Missing month/monthCode"), void 0 === fields.day && throwTypeError(missingField("day")), [parseMonthCodeField(fields), resolveCalendarYear(calendar, fields)];
}
function createPlainYearMonthFromFields(calendar, fields, options) {
	const eraOrigins = getCalendarEraOrigins(calendar);
	void 0 !== fields.year || void 0 !== fields.era && void 0 !== fields.eraYear || throwTypeError(missingYear(eraOrigins)), void 0 === fields.monthCode && void 0 === fields.month && throwTypeError("Missing month/monthCode");
	const monthCodeParts = parseMonthCodeField(fields);
	const year = resolveCalendarYear(calendar, fields);
	return createDateSlots(checkIsoYearMonthInBounds(computeCalendarIsoFieldsFromParts(calendar, year, resolveCalendarMonth(calendar, fields, year, refineOverflowOptions(options), monthCodeParts), 1)), calendar);
}
function createPlainMonthDayFromFields(calendar, fields, options) {
	const isIso = calendar === void 0;
	const eraOrigins = getCalendarEraOrigins(calendar);
	void 0 === fields.day && throwTypeError(missingField("day")), isIso || void 0 === fields.month || void 0 !== fields.year || void 0 !== fields.era && void 0 !== fields.eraYear || throwTypeError(missingYear(eraOrigins));
	const monthCodeParts = parseMonthCodeField(fields);
	let yearMaybe = void 0 !== fields.eraYear || void 0 !== fields.year ? resolveCalendarYear(calendar, fields) : void 0;
	const overflow = refineOverflowOptions(options);
	let day;
	let monthCodeNumber;
	let isLeapMonth;
	if (void 0 === yearMaybe && isIso && (yearMaybe = 1972), void 0 !== yearMaybe) {
		isIso || checkIsoDateInBounds(computeCalendarIsoFieldsFromParts(calendar, yearMaybe, 1, 1));
		const month = resolveCalendarMonth(calendar, fields, yearMaybe, overflow, monthCodeParts);
		day = resolveCalendarDay(calendar, fields, month, yearMaybe, overflow), [monthCodeNumber, isLeapMonth] = computeCalendarMonthCodeParts(calendar, yearMaybe, month);
	} else {
		void 0 === fields.monthCode && throwTypeError("Missing month/monthCode"), [monthCodeNumber, isLeapMonth] = monthCodeParts;
		const referenceYear = calendar ? calendar.ne : 1972;
		if (void 0 !== referenceYear) day = resolveCalendarDay(calendar, fields, resolveCalendarMonth(calendar, fields, referenceYear, overflow, monthCodeParts), referenceYear, overflow);
		else {
			const constrainedDay = 0 === overflow && calendar ? calendar.fe?.(monthCodeNumber, isLeapMonth, fields.day) : void 0;
			day = void 0 !== constrainedDay ? constrainedDay : fields.day;
		}
	}
	isLeapMonth && ((calendar && calendar.U?.[monthCodeNumber]) ?? 1 / 0) < fields.day && (1 === overflow && throwRangeError(invalidLeapMonth), isLeapMonth = 0, day = constrainToRange(fields.day, 1, (calendar && calendar.R) ?? 1 / 0));
	let res = calendar ? calendar.u(monthCodeNumber, Boolean(isLeapMonth), day) : computeIsoYearMonthFieldsForMonthDay(monthCodeNumber, Boolean(isLeapMonth));
	for (; !res && 0 === overflow && day > 1;) day--, res = calendar ? calendar.u(monthCodeNumber, Boolean(isLeapMonth), day) : computeIsoYearMonthFieldsForMonthDay(monthCodeNumber, Boolean(isLeapMonth));
	res || throwRangeError("Cannot guess year");
	const { year: finalYear, month: finalMonth } = res;
	return createDateSlots(checkIsoDateInBounds(computeCalendarIsoFieldsFromParts(calendar, finalYear, finalMonth, day)), calendar);
}
const RawDateTimeFormat = Intl.DateTimeFormat;
function formatEpochMilliToPartsRecord(intlFormat, epochMilli) {
	epochMilli < -864e13 && throwRangeError("Out-of-bounds date");
	const parts = intlFormat.formatToParts(epochMilli);
	const hash = {};
	for (const part of parts) hash[part.type] = part.value;
	return hash;
}
const timeZonePeriodDaysByName = {
	"El_Aaiun": 17,
	"Tucuman": 12,
	"Tirane": 11,
	"Riga": 10,
	"Simferopol": 9,
	"Vienna": 9,
	"Tunis": 8,
	"Boa_Vista": 6,
	"Fortaleza": 6,
	"Maceio": 6,
	"Noronha": 6,
	"Recife": 6,
	"Gaza": 6,
	"Hebron": 6,
	"DeNoronha": 6
};
const minPossibleTransitionSec = -388152e4;
function refineTimeDisplayTuple(options, maxSmallestUnit = 4) {
	const subsecDigits = coerceFractionalSecondDigits(options);
	const roundingMode = coerceRoundingMode(options, 4);
	const smallestUnit = coerceSmallestUnit(options);
	return [roundingMode, ...resolveSmallestUnitAndSubsecDigits(validateUnitRange(smallestUnitStr, smallestUnit, 0, maxSmallestUnit), subsecDigits)];
}
function refineDateDisplayOptions(options) {
	return coerceCalendarDisplay(normalizeOptions(options));
}
function refineTimeDisplayOptions(options, maxSmallestUnit) {
	return refineTimeDisplayTuple(normalizeOptions(options), maxSmallestUnit);
}
function resolveSmallestUnitAndSubsecDigits(smallestUnit, subsecDigits) {
	return null != smallestUnit ? [unitNanoMap[smallestUnit], smallestUnit < 4 ? 9 - 3 * smallestUnit : -1] : [void 0 === subsecDigits ? 1 : 10 ** (9 - subsecDigits), subsecDigits];
}
function formatInstantIso(refineTimeZoneString, instantSlots, options) {
	const [timeZoneArg, roundingMode, nanoInc, subsecDigits] = ((options) => {
		const subsecDigits = coerceFractionalSecondDigits(options = normalizeOptions(options));
		const roundingMode = coerceRoundingMode(options, 4);
		const smallestUnit = coerceSmallestUnit(options);
		return [
			options.timeZone,
			roundingMode,
			...resolveSmallestUnitAndSubsecDigits(validateUnitRange(smallestUnitStr, smallestUnit, 0, 4), subsecDigits)
		];
	})(options);
	const providedTimeZone = void 0 !== timeZoneArg;
	return ((providedTimeZone, timeZone, epochNano, roundingMode, nanoInc, subsecDigits) => {
		epochNano = roundBigNanoToDayOriginInc(epochNano, BigInt(nanoInc), roundingMode);
		const offsetNano = timeZone.B(epochNano);
		return formatIsoDateTimeFields(epochNanoToIsoDateTime(epochNano + BigInt(offsetNano)), subsecDigits) + (providedTimeZone ? formatOffsetNano(roundToMinute(offsetNano)) : "Z");
	})(providedTimeZone, queryTimeZone(providedTimeZone ? refineTimeZoneString(timeZoneArg) : "UTC"), instantSlots.epochNanoseconds, roundingMode, nanoInc, subsecDigits);
}
function formatZonedDateTimeIso(zonedDateTimeSlots0, options) {
	const displayOptions = ((options) => {
		options = normalizeOptions(options);
		const calendarDisplay = coerceCalendarDisplay(options);
		const subsecDigits = coerceFractionalSecondDigits(options);
		const offsetDisplay = coerceOffsetDisplay(options);
		const roundingMode = coerceRoundingMode(options, 4);
		const smallestUnit = coerceSmallestUnit(options);
		return [
			calendarDisplay,
			coerceTimeZoneDisplay(options),
			offsetDisplay,
			roundingMode,
			...resolveSmallestUnitAndSubsecDigits(validateUnitRange(smallestUnitStr, smallestUnit, 0, 4), subsecDigits)
		];
	})(options);
	return ((calendar, timeZoneId, timeZone, epochNano, calendarDisplay, timeZoneDisplay, offsetDisplay, roundingMode, nanoInc, subsecDigits) => {
		epochNano = roundBigNanoToDayOriginInc(epochNano, BigInt(nanoInc), roundingMode);
		const offsetNano = timeZone.B(epochNano);
		return formatIsoDateTimeFields(epochNanoToIsoDateTime(epochNano + BigInt(offsetNano)), subsecDigits) + formatOffsetNano(roundToMinute(offsetNano), offsetDisplay) + formatTimeZone(timeZoneId, timeZoneDisplay) + formatCalendar(calendar, calendarDisplay);
	})(zonedDateTimeSlots0.calendar, zonedDateTimeSlots0.timeZone.id, zonedDateTimeSlots0.timeZone, zonedDateTimeSlots0.epochNanoseconds, ...displayOptions);
}
function formatPlainDateTimeIso(plainDateTimeSlots0, options) {
	const displayOptions = ((options) => (options = normalizeOptions(options), [coerceCalendarDisplay(options), ...refineTimeDisplayTuple(options)]))(options);
	return ((calendar, isoDateTime, calendarDisplay, roundingMode, nanoInc, subsecDigits) => formatIsoDateTimeFields(roundDateTimeToNano(isoDateTime, nanoInc, roundingMode), subsecDigits) + formatCalendar(calendar, calendarDisplay))(plainDateTimeSlots0.calendar, plainDateTimeSlots0, ...displayOptions);
}
function formatPlainDateIso(plainDateSlots, options) {
	return calendar = plainDateSlots.calendar, isoDate = plainDateSlots, calendarDisplay = refineDateDisplayOptions(options), formatIsoDateFields(isoDate) + formatCalendar(calendar, calendarDisplay);
	var calendar, isoDate, calendarDisplay;
}
function formatPlainYearMonthIso(plainYearMonthSlots, options) {
	return formatDateLikeIso(plainYearMonthSlots.calendar, formatIsoYearMonthFields, plainYearMonthSlots, refineDateDisplayOptions(options));
}
function formatPlainMonthDayIso(plainMonthDaySlots, options) {
	return formatDateLikeIso(plainMonthDaySlots.calendar, formatIsoMonthDayFields, plainMonthDaySlots, refineDateDisplayOptions(options));
}
function formatDateLikeIso(calendar, formatSimple, isoDate, calendarDisplay) {
	return 1 === calendarDisplay ? calendar === void 0 ? formatSimple(isoDate) : formatIsoDateFields(isoDate) : calendarDisplay > 1 || 0 === calendarDisplay && calendar !== void 0 ? formatIsoDateFields(isoDate) + formatCalendarId(getCalendarSlotId(calendar), 2 === calendarDisplay) : formatSimple(isoDate);
}
function formatPlainTimeIso(slots, options) {
	return ((fields, roundingMode, nanoInc, subsecDigits) => formatTimeFields(roundTimeToNano(fields, nanoInc, roundingMode)[0], subsecDigits))(slots, ...refineTimeDisplayOptions(options));
}
function formatDurationIso(slots, options) {
	const [roundingMode, nanoInc, subsecDigits] = refineTimeDisplayOptions(options, 3);
	return nanoInc > 1 && validateDurationFields(slots = {
		...slots,
		...roundDayTimeDurationByInc(slots, nanoInc, roundingMode)
	}), formatDurationSlots(slots, subsecDigits);
}
function formatDurationSlots(durationSlots, subsecDigits) {
	const { sign } = durationSlots;
	const abs = -1 === sign ? negateDurationFields(durationSlots) : durationSlots;
	const { hours, minutes } = abs;
	const bigNano = durationSubMinuteToBigNano(abs);
	const wholeSec = Number(bigNano / bigNanoInSec);
	const subsecNano = Number(bigNano % bigNanoInSec);
	validateDurationTimeUnit(wholeSec);
	const subsecNanoString = formatSubsecNano(subsecNano, subsecDigits);
	const forceSec = subsecDigits >= 0 || !sign || subsecNanoString;
	return (sign < 0 ? "-" : "") + "P" + formatDurationFragments({
		"Y": formatDurationNumber(abs.years),
		"M": formatDurationNumber(abs.months),
		"W": formatDurationNumber(abs.weeks),
		"D": formatDurationNumber(abs.days)
	}) + (hours || minutes || wholeSec || forceSec ? "T" + formatDurationFragments({
		"H": formatDurationNumber(hours),
		"M": formatDurationNumber(minutes),
		"S": formatDurationNumber(wholeSec, forceSec) + subsecNanoString
	}) : "");
}
function formatDurationFragments(fragObj) {
	const parts = [];
	for (const fragName in fragObj) {
		const fragVal = fragObj[fragName];
		fragVal && parts.push(fragVal, fragName);
	}
	return parts.join("");
}
function formatDurationNumber(n, force) {
	if (!n && !force) return "";
	const options = Object.create(null);
	return options.useGrouping = 0, n.toLocaleString("fullwide", options);
}
function formatIsoDateTimeFields(isoDateTime, subsecDigits) {
	return formatIsoDateFields(isoDateTime) + "T" + formatTimeFields(isoDateTime, subsecDigits);
}
function formatIsoDateFields(isoDateFields) {
	return formatIsoYearMonthFields(isoDateFields) + "-" + padNumber2(isoDateFields.day);
}
function formatIsoYearMonthFields(isoDateFields) {
	const { year } = isoDateFields;
	return (year < 0 || year > 9999 ? getSignStr(year) + padNumber(6, Math.abs(year)) : padNumber(4, year)) + "-" + padNumber2(isoDateFields.month);
}
function formatIsoMonthDayFields(isoDateFields) {
	return padNumber2(isoDateFields.month) + "-" + padNumber2(isoDateFields.day);
}
function formatTimeFields(timeFields, subsecDigits) {
	const parts = [padNumber2(timeFields.hour), padNumber2(timeFields.minute)];
	return -1 !== subsecDigits && parts.push(padNumber2(timeFields.second) + ((millisecond, microsecond, nanosecond, subsecDigits) => formatSubsecNano(millisecond * nanoInMilli + microsecond * nanoInMicro + nanosecond, subsecDigits))(timeFields.millisecond, timeFields.microsecond, timeFields.nanosecond, subsecDigits)), parts.join(":");
}
function formatOffsetNano(offsetNano, offsetDisplay = 0) {
	if (1 === offsetDisplay) return "";
	const [hour, nanoRemainder0] = divModFloor(Math.abs(offsetNano), nanoInHour);
	const [minute, nanoRemainder1] = divModFloor(nanoRemainder0, nanoInMinute);
	const [second, nanoRemainder2] = divModFloor(nanoRemainder1, nanoInSec);
	return getSignStr(offsetNano) + padNumber2(hour) + ":" + padNumber2(minute) + (second || nanoRemainder2 ? ":" + padNumber2(second) + formatSubsecNano(nanoRemainder2) : "");
}
function formatTimeZone(timeZoneId, timeZoneDisplay) {
	return 1 !== timeZoneDisplay ? "[" + (2 === timeZoneDisplay ? "!" : "") + timeZoneId + "]" : "";
}
function formatCalendar(calendar, calendarDisplay) {
	return calendarDisplay > 1 || 0 === calendarDisplay && calendar !== void 0 ? formatCalendarId(getCalendarSlotId(calendar), 2 === calendarDisplay) : "";
}
function formatCalendarId(calendarId, isCritical) {
	return "[" + (isCritical ? "!" : "") + "u-ca=" + calendarId + "]";
}
const trailingZerosRE = /0+$/;
function formatSubsecNano(totalNano, subsecDigits) {
	let s = padNumber(9, totalNano);
	return s = void 0 === subsecDigits ? s.replace(trailingZerosRE, "") : s.slice(0, subsecDigits), s ? "." + s : "";
}
function getSignStr(num) {
	return num < 0 ? "-" : "+";
}
const icuRegExp = /^(AC|AE|AG|AR|AS|BE|BS|CA|CN|CS|CT|EA|EC|IE|IS|JS|MI|NE|NS|PL|PN|PR|PS|SS|VS)T$/;
const badCharactersRegExp = /[^\w\/:+-]+/;
function refineTimeZoneId(rawId) {
	return resolveTimeZoneId(requireString(rawId));
}
function resolveTimeZoneId(rawId) {
	return resolveTimeZoneRecord(rawId).id;
}
function resolveTimeZoneRecord(rawId) {
	const upperRawId = rawId.toUpperCase();
	const offsetRecord = ((upperRawId) => {
		const offsetNano = parseOffsetNanoMaybe(upperRawId, 1);
		if (void 0 !== offsetNano) return {
			id: formatOffsetNano(offsetNano),
			X: offsetNano,
			m: offsetNano
		};
	})(upperRawId);
	if (offsetRecord) return {
		kind: "fixed",
		...offsetRecord
	};
	const normId = "UTC" === upperRawId ? "UTC" : ((rawId) => (badCharactersRegExp.test(rawId) && throwRangeError(invalidTimeZone(rawId)), icuRegExp.test(rawId) && throwRangeError("Forbidden ICU TimeZone"), rawId.toLowerCase().split("/").map((part, partI) => (part.length <= 3 || /\d/.test(part)) && !/etc|yap/.test(part) ? part.toUpperCase() : part.replace(/baja|dumont|[a-z]+/g, (a, i) => a.length <= 2 && !partI || "in" === a || "chat" === a ? a.toUpperCase() : a.length > 2 || !i ? capitalize(a).replace(/island|noronha|murdo|rivadavia|urville/, capitalize) : a)).join("/")))(rawId);
	return queryNamedTimeZoneRecord(normId);
}
const queryNamedTimeZoneRecord = /*@__PURE__*/ memoize((normId) => {
	if ("UTC" === normId) return {
		kind: "utc",
		id: normId,
		m: normId
	};
	const upperNormId = normId.toUpperCase();
	const format = queryTimeZoneIntlFormat(upperNormId);
	return {
		kind: "named",
		id: normId,
		format,
		m: format.resolvedOptions().timeZone
	};
});
const queryTimeZoneIntlFormat = /*@__PURE__*/ memoize((upperNormId) => new RawDateTimeFormat("en-u-hc-h23", {
	calendar: "iso8601",
	timeZone: upperNormId,
	era: "short",
	year: "numeric",
	month: "numeric",
	day: "numeric",
	hour: "numeric",
	minute: "numeric",
	second: "numeric"
}));
function queryTimeZone(rawTimeZoneId) {
	const record = resolveTimeZoneRecord(rawTimeZoneId);
	return queryTimeZoneRecord(record.id, record);
}
const queryTimeZoneRecord = /*@__PURE__*/ memoize((normTimeZoneId, record) => "named" === record.kind ? new IntlTimeZone(normTimeZoneId, record.m, record.format) : new FixedTimeZone(normTimeZoneId, record.m, "fixed" === record.kind ? record.X : 0));
var FixedTimeZone = class {
	constructor(id, compareKey, offsetNano) {
		this.id = id, this.m = compareKey, this.X = offsetNano;
	}
	B() {
		return this.X;
	}
	N(isoDateTime) {
		return [isoDateTimeAndOffsetToEpochNano(isoDateTime, this.X)];
	}
	O() {}
};
var IntlTimeZone = class {
	constructor(id, compareKey, format) {
		this.id = id, this.m = compareKey, this.ke = ((computeOffsetSec, periodDays) => {
			const getSample = memoize(computeOffsetSec);
			const getSplit = memoize(createSplitTuple);
			const periodSec = 86400 * periodDays;
			function getOffsetSec(epochSec) {
				const [startEpochSec, endEpochSec] = computePeriod(epochSec, periodSec);
				const clampedStartEpochSec = clampIntlSampleEpochSec(startEpochSec);
				const clampedEndEpochSec = clampIntlSampleEpochSec(endEpochSec);
				const startOffsetSec = getSample(clampedStartEpochSec);
				const endOffsetSec = getSample(clampedEndEpochSec);
				return startOffsetSec === endOffsetSec ? startOffsetSec : pinch(getSplit(clampedStartEpochSec, clampedEndEpochSec), startOffsetSec, endOffsetSec, epochSec);
			}
			function pinch(split, startOffsetSec, endOffsetSec, forEpochSec) {
				let offsetSec;
				let splitDurSec;
				for (; (void 0 === forEpochSec || void 0 === (offsetSec = forEpochSec < split[0] ? startOffsetSec : forEpochSec >= split[1] ? endOffsetSec : void 0)) && (splitDurSec = split[1] - split[0]);) {
					const middleEpochSec = split[0] + Math.floor(splitDurSec / 2);
					computeOffsetSec(middleEpochSec) === endOffsetSec ? split[1] = middleEpochSec : split[0] = middleEpochSec + 1;
				}
				return offsetSec;
			}
			return {
				xe(zonedEpochSec) {
					const wideOffsetSec0 = getOffsetSec(zonedEpochSec - 86400);
					const wideOffsetSec1 = getOffsetSec(zonedEpochSec + 86400);
					const wideUtcEpochSec0 = zonedEpochSec - wideOffsetSec0;
					const wideUtcEpochSec1 = zonedEpochSec - wideOffsetSec1;
					if (wideOffsetSec0 === wideOffsetSec1) return [wideUtcEpochSec0];
					const narrowOffsetSec0 = getOffsetSec(wideUtcEpochSec0);
					return narrowOffsetSec0 === getOffsetSec(wideUtcEpochSec1) ? [zonedEpochSec - narrowOffsetSec0] : wideOffsetSec0 > wideOffsetSec1 ? [wideUtcEpochSec0, wideUtcEpochSec1] : [];
				},
				we: getOffsetSec,
				O: function getTransition(epochSec, direction) {
					if (direction > 0 && epochSec >= 864e10) return;
					if (direction < 0) {
						if (epochSec <= minPossibleTransitionSec) return;
						const lookaheadEpochSec = getCurrentEpochSec() + 94867200;
						if (epochSec > lookaheadEpochSec) return getTransition(lookaheadEpochSec, -1);
					}
					let [startEpochSec, endEpochSec] = computePeriod(direction > 0 ? Math.max(epochSec, minPossibleTransitionSec) : epochSec, periodSec);
					const inc = periodSec * direction;
					const searchLimit = direction > 0 ? Math.max(epochSec, getCurrentEpochSec()) + 94867200 : minPossibleTransitionSec;
					const inBounds = () => direction < 0 ? endEpochSec > searchLimit : startEpochSec < searchLimit;
					for (; inBounds();) {
						const clampedStartEpochSec = clampIntlSampleEpochSec(startEpochSec);
						const clampedEndEpochSec = clampIntlSampleEpochSec(endEpochSec);
						const startOffsetSec = getSample(clampedStartEpochSec);
						const endOffsetSec = getSample(clampedEndEpochSec);
						if (startOffsetSec !== endOffsetSec) {
							const split = getSplit(clampedStartEpochSec, clampedEndEpochSec);
							pinch(split, startOffsetSec, endOffsetSec);
							const transitionEpochSec = split[0];
							if ((compareNumbers(transitionEpochSec, epochSec) || 1) === direction) return transitionEpochSec;
						}
						startEpochSec += inc, endEpochSec += inc;
					}
				}
			};
		})(((format) => (epochSec) => {
			const intlParts = formatEpochMilliToPartsRecord(format, 1e3 * epochSec);
			return 86400 * isoArgsToEpochDays(((intlParts) => {
				const relatedYear = intlParts.relatedYear;
				if (void 0 !== relatedYear) return parseInt(relatedYear);
				const year = parseInt(intlParts.year);
				return void 0 !== intlParts.era && "bce" === normalizeEraName(intlParts.era) ? 1 - year : year;
			})(intlParts), parseInt(intlParts.month), parseInt(intlParts.day)) + 3600 * parseInt(intlParts.hour) + 60 * parseInt(intlParts.minute) + parseInt(intlParts.second) - epochSec;
		})(format), ((timeZoneId) => {
			const timeZoneName = timeZoneId.split("/").pop();
			return timeZonePeriodDaysByName[timeZoneName] || 60;
		})(id));
	}
	B(epochNano) {
		return this.ke.we(((epochNano) => epochNanoToSecMod(epochNano)[0])(epochNano)) * nanoInSec;
	}
	N(isoDateTime) {
		const zonedEpochSec = 86400 * isoDateToEpochDays(isoDateTime) + timeFieldsToSec(isoDateTime);
		const subsecNano = timeFieldsToSubsecNano(isoDateTime);
		return this.ke.xe(zonedEpochSec).map((epochSec) => checkEpochNanoInBounds(BigInt(epochSec) * bigNanoInSec + BigInt(subsecNano)));
	}
	O(epochNano, direction) {
		const [epochSec, subsecNano] = epochNanoToSecMod(epochNano);
		const resEpochSec = this.ke.O(epochSec + (direction > 0 || subsecNano ? 1 : 0), direction);
		if (void 0 !== resEpochSec) return BigInt(resEpochSec) * bigNanoInSec;
	}
};
function getCurrentEpochSec() {
	return Math.floor(Date.now() / 1e3);
}
function createSplitTuple(startEpochSec, endEpochSec) {
	return [startEpochSec, endEpochSec];
}
function computePeriod(epochSec, periodSec) {
	const startEpochSec = Math.floor(epochSec / periodSec) * periodSec;
	return [startEpochSec, startEpochSec + periodSec];
}
function clampIntlSampleEpochSec(epochSec) {
	return constrainToRange(epochSec, -1e10, 864e10);
}
function refineMaybeZonedDateTimeObjectLike(refineTimeZoneString, calendar, bag) {
	const fields = readAndRefineBagFields(bag, getCalendarFieldNames(calendar, dateTimeAndZoneFieldNamesAlpha, dateTimeAndZoneFieldNamesWithEraAlpha), zonedDateTimeFieldRefiners, [], 0);
	if (void 0 !== fields.timeZone) {
		const isoDateFields = createPlainDateFromFields(calendar, fields);
		const timeFields = resolveTimeFields(fields);
		const timeZone = queryTimeZone(refineTimeZoneString(fields.timeZone));
		return {
			epochNanoseconds: getMatchingInstantFor(timeZone, combineDateAndTime(isoDateFields, timeFields), fields.offset),
			timeZone,
			calendar
		};
	}
	return createPlainDateFromFields(calendar, fields);
}
function refineZonedDateTimeObjectLike(refineTimeZoneString, calendar, bag, options) {
	const fields = readAndRefineBagFields(bag, getCalendarFieldNames(calendar, dateTimeAndZoneFieldNamesAlpha, dateTimeAndZoneFieldNamesWithEraAlpha), zonedDateTimeFieldRefiners, timeZoneFieldNames, 0);
	const timeZoneId = refineTimeZoneString(fields.timeZone);
	const [isoDateFields, overflow, offsetDisambig, epochDisambig] = createPlainDateFromFieldsWithOptionsRefiner(calendar, fields, () => refineZonedFieldOptions(options));
	const timeFields = resolveTimeFields(fields, overflow);
	const timeZone = queryTimeZone(timeZoneId);
	return createZonedEpochNanoSlots(getMatchingInstantFor(timeZone, combineDateAndTime(isoDateFields, timeFields), fields.offset, offsetDisambig, epochDisambig), timeZone, calendar);
}
function refinePlainDateTimeObjectLike(calendar, bag, options) {
	const fields = readAndRefineBagFields(bag, getCalendarFieldNames(calendar, dateTimeFieldNamesAlpha, dateTimeFieldNamesWithEraAlpha), dateTimeFieldRefiners, [], 0);
	const [isoDateInternals, overflow] = createPlainDateFromFieldsWithOptionsRefiner(calendar, fields, () => [refineOverflowOptions(options)]);
	return createPlainDateTimeFromRefinedFields(isoDateInternals, resolveTimeFields(fields, overflow), calendar);
}
function refinePlainDateObjectLike(calendar, bag, options, requireFields = []) {
	return createPlainDateFromFields(calendar, readAndRefineBagFields(bag, getCalendarFieldNames(calendar, dateFieldNamesAlpha, dateFieldNamesWithEraAlpha), dateFieldRefiners, requireFields), options);
}
function refinePlainYearMonthObjectLike(calendar, bag, options, requireFields) {
	return createPlainYearMonthFromFields(calendar, readAndRefineBagFields(bag, getCalendarFieldNames(calendar, yearMonthFieldNamesAlpha, yearMonthFieldNamesWithEraAlpha), dateFieldRefiners, requireFields), options);
}
function refinePlainMonthDayObjectLike(calendar, calendarAbsent, bag, options) {
	const fields = readAndRefineBagFields(bag, getCalendarFieldNames(calendar, dateFieldNamesAlpha, dateFieldNamesWithEraAlpha), dateFieldRefiners, dayFieldNamesAsc, 0);
	return calendarAbsent && void 0 !== fields.month && void 0 === fields.monthCode && void 0 === fields.year && (fields.year = 1972), createPlainMonthDayFromFields(calendar, fields, options);
}
function refinePlainTimeObjectLike(bag, options) {
	return resolveTimeFields(readAndRefineBagFields(bag, timeFieldNamesAlpha, timeFieldRefiners, [], 1), refineOverflowOptions(options));
}
function refineDurationObjectLike(bag) {
	const durationFields = readAndRefineBagFields(bag, durationFieldNamesAlpha, durationFieldRefiners);
	return createDurationSlots(validateDurationFields({
		...durationFieldDefaults,
		...durationFields
	}));
}
function throwFailedParse(s) {
	throwRangeError(failedParse(s));
}
function parseInstant(s) {
	const organized = parseDateTimeLike(s = toStringViaPrimitive(s));
	let offsetNano;
	return organized || throwFailedParse(s), organized.C ? offsetNano = 0 : organized.offset ? offsetNano = parseOffsetNano(organized.offset) : throwFailedParse(s), organized.timeZoneId && parseOffsetNanoMaybe(organized.timeZoneId, 1), validateIsoDateTimeFields(organized), createEpochNanoSlots(isoDateTimeAndOffsetToEpochNano(organized, offsetNano));
}
function parseRelativeToSlots(s, resolveCalendar) {
	const organized = parseDateTimeLike(requireString(s));
	return organized || throwFailedParse(s), organized.timeZoneId ? finalizeZonedDateTime(organized, resolveCalendar, void 0) : (organized.C && throwFailedParse(s), finalizeDate(organized, resolveCalendar));
}
function parseZonedDateTime(s, resolveCalendar, options) {
	const organized = parseDateTimeLike(requireString(s));
	return organized && organized.timeZoneId || throwFailedParse(s), finalizeZonedDateTime(organized, resolveCalendar, options);
}
function parsePlainDateTime(s, resolveCalendar) {
	const organized = parseDateTimeLike(requireString(s));
	return organized && !organized.C || throwFailedParse(s), finalizeDateTime(organized, resolveCalendar);
}
function parsePlainDate(s, resolveCalendar) {
	const slots = finalizeDateLike(parsePlainDateLike(requireString(s)), void 0, resolveCalendar);
	return createDateSlots(slots, slots.calendar);
}
function parsePlainYearMonth(s, resolveCalendar) {
	const organized = parseYearMonthOnly(requireString(s));
	if (organized) return requireIsoCalendar(organized), createDateSlots(checkIsoYearMonthInBounds(validateIsoDateFields(organized)), resolveCalendar(organized.calendarId));
	const dateSlots = finalizeDateLike(parsePlainDateLike(s), projectIsoYearMonthDate, resolveCalendar);
	const { calendar } = dateSlots;
	return createDateSlots(moveToStartOfMonth(calendar, dateSlots), calendar);
}
function requireIsoCalendar(organized) {
	"iso8601" !== organized.calendarId && throwRangeError(invalidSubstring(organized.calendarId));
}
function parsePlainMonthDay(s, resolveCalendar) {
	const organized = parseMonthDayOnly(requireString(s));
	if (organized) return requireIsoCalendar(organized), createDateSlots(validateIsoDateFields(organized), resolveCalendar(organized.calendarId));
	const dateSlots = finalizeDateLike(parsePlainDateLike(s), projectIsoMonthDayDate, resolveCalendar);
	const { calendar } = dateSlots;
	const { year: origYear, month: origMonth, day } = computeCalendarDateFields(calendar, dateSlots);
	const [monthCodeNumber, isLeapMonth] = computeCalendarMonthCodeParts(calendar, origYear, origMonth);
	const { year, month } = ((calendar, monthCodeNumber, isLeapMonth, day) => {
		const yearMonthFields = calendar ? calendar.u(monthCodeNumber, isLeapMonth, day) : computeIsoYearMonthFieldsForMonthDay(monthCodeNumber, isLeapMonth);
		return yearMonthFields || throwRangeError("Cannot guess year"), yearMonthFields;
	})(calendar, monthCodeNumber, isLeapMonth, day);
	return createDateSlots(checkIsoDateInBounds(computeCalendarIsoFieldsFromParts(calendar, year, month, day)), calendar);
}
function parsePlainTime(s) {
	let organized = ((s) => {
		const parts = parseTimeOnlyParts(s);
		return parts ? (organizeAnnotationParts(parts[13]), organizeTimeParts(parts, 1)) : void 0;
	})(s = requireString(s));
	if (!organized) {
		const dateTime = parseDateTimeLike(s);
		dateTime && dateTime.re || throwFailedParse(s), dateTime.C && throwRangeError(invalidSubstring("Z")), requireIsoCalendar(dateTime), organized = dateTime;
	}
	let altParsed;
	return (altParsed = parseYearMonthOnly(s)) && isIsoDateFieldsValid(altParsed) && throwFailedParse(s), (altParsed = parseMonthDayOnly(s)) && isIsoDateFieldsValid(altParsed) && throwFailedParse(s), createTimeSlots(validateTimeFields(organized));
}
function parseDuration(s) {
	const parts = durationRegExp.exec(requireString(s));
	return parts || throwFailedParse(s), createDurationSlots(validateDurationFields(((parts) => {
		let hasAny = 0;
		let hasAnyFrac = 0;
		let leftoverNano = 0;
		let durationFields = {
			years: parseUnit(parts[2]),
			months: parseUnit(parts[3]),
			weeks: parseUnit(parts[4]),
			days: parseUnit(parts[5]),
			hours: parseUnit(parts[6], parts[7], 5),
			minutes: parseUnit(parts[8], parts[9], 4),
			seconds: parseUnit(parts[10], parts[11], 3),
			...nanoToGivenFields(leftoverNano, 2, durationFieldNamesAsc)
		};
		return hasAny || throwRangeError(noValidFields(durationFieldNamesAsc)), parseSign(parts[1]) < 0 && (durationFields = negateDurationFields(durationFields)), durationFields;
		function parseUnit(wholeStr, fracStr, timeUnit) {
			let leftoverUnits = 0;
			let wholeUnits = 0;
			return timeUnit && ([leftoverUnits, leftoverNano] = divModFloor(leftoverNano, unitNanoMap[timeUnit])), void 0 !== wholeStr && (hasAnyFrac && throwRangeError(invalidSubstring(wholeStr)), wholeUnits = ((s) => {
				const n = parseInt(s);
				return Number.isFinite(n) || throwRangeError(invalidSubstring(s)), n;
			})(wholeStr), hasAny = 1, fracStr && (leftoverNano = parseSubsecNano(fracStr) * (unitNanoMap[timeUnit] / nanoInSec), hasAnyFrac = 1)), leftoverUnits + wholeUnits;
		}
	})(parts)));
}
function parseCalendarId(s) {
	const res = parseDateTimeLike(s) || parseYearMonthOnly(s) || parseMonthDayOnly(s);
	if (res) return res.calendarId;
	const timeParts = parseTimeOnlyParts(s);
	return timeParts ? organizeAnnotationParts(timeParts[13]).calendarId : s;
}
function parseTimeZoneId(s) {
	const parsed = parseDateTimeLike(s);
	return parsed && (parsed.timeZoneId || parsed.C && "UTC" || parsed.offset) || s;
}
function parsePlainDateLike(s) {
	const organized = parseDateTimeLike(s);
	return organized && !organized.C || throwFailedParse(s), organized;
}
function finalizeDateLike(organized, isoDateProjector, resolveCalendar) {
	return isoDateProjector && "iso8601" === organized.calendarId ? (validateIsoDateFields(organized), organized.re && validateTimeFields(organized), finalizeDate(isoDateProjector(organized), resolveCalendar)) : organized.re ? finalizeDateTime(organized, resolveCalendar) : finalizeDate(organized, resolveCalendar);
}
function projectIsoYearMonthDate(organized) {
	const day = 12 * organized.year + organized.month === isoYearMonthIndexMin ? 20 : 1;
	return {
		...organized,
		day
	};
}
function projectIsoMonthDayDate(organized) {
	return {
		...organized,
		year: 1972
	};
}
function finalizeZonedDateTime(organized, resolveCalendar, options) {
	const timeZone = queryTimeZone(resolveTimeZoneId(organized.timeZoneId));
	let epochNano;
	if (validateIsoDateTimeFields(organized), organized.re) {
		const offsetNano = organized.offset ? parseOffsetNano(organized.offset) : void 0;
		const [, offsetDisambig, epochDisambig] = refineZonedFieldOptions(options);
		epochNano = getMatchingInstantFor(timeZone, organized, offsetNano, offsetDisambig, epochDisambig, !(timeZone.X || void 0 === organized.offset || (offset = organized.offset, offset.replace(/\D/g, "").length > 4)), organized.C);
	} else refineZonedFieldOptions(options), epochNano = getStartOfDayInstantFor(timeZone, organized);
	var offset;
	return checkEpochNanoInBounds(epochNano), createZonedEpochNanoSlots(epochNano, timeZone, resolveCalendar(organized.calendarId));
}
function finalizeDateTime(organized, resolveCalendar) {
	return validateIsoDateTimeFields(organized), checkIsoDateTimeInBounds(organized), {
		...combineDateAndTime(organized, organized),
		calendar: resolveCalendar(organized.calendarId)
	};
}
function finalizeDate(organized, resolveCalendar) {
	return validateIsoDateFields(organized), checkIsoDateInBounds(organized), {
		calendar: resolveCalendar(organized.calendarId),
		year: organized.year,
		month: organized.month,
		day: organized.day
	};
}
function timeRegExpStr(separatorIndex) {
	return `(\\d{2})(?:(:?)(\\d{2})(?:\\${separatorIndex}(\\d{2})(?:[.,](\\d{1,9}))?)?)?`;
}
const dateTimeRegExpStr = "(?:(?:([+-])(\\d{6}))|(\\d{4}))(-?)(\\d{2})\\4(\\d{2})(?:[T ]" + timeRegExpStr(8) + "(Z|([+-])" + timeRegExpStr(15) + ")?)?";
const yearMonthRegExp = /*@__PURE__*/ createRegExp("(?:(?:([+-])(\\d{6}))|(\\d{4}))-?(\\d{2})((?:\\[(!?)([^\\]]*)\\]){0,9})");
const monthDayRegExp = /*@__PURE__*/ createRegExp("(?:--)?(\\d{2})-?(\\d{2})((?:\\[(!?)([^\\]]*)\\]){0,9})");
const dateTimeRegExp = /*@__PURE__*/ createRegExp(dateTimeRegExpStr + "((?:\\[(!?)([^\\]]*)\\]){0,9})");
const timeRegExp = /*@__PURE__*/ createRegExp("T?" + timeRegExpStr(2) + `(([+-])${timeRegExpStr(9)})?((?:\\[(!?)([^\\]]*)\\]){0,9})`);
const annotationRegExp = /*@__PURE__*/ new RegExp("\\[(!?)([^\\]]*)\\]", "g");
const durationRegExp = /*@__PURE__*/ createRegExp("([+-])?P(\\d+Y)?(\\d+M)?(\\d+W)?(\\d+D)?(?:T(?!$)(?:(\\d+)(?:[.,](\\d{1,9}))?H)?(?:(\\d+)(?:[.,](\\d{1,9}))?M)?(?:(\\d+)(?:[.,](\\d{1,9}))?S)?)?");
function parseDateTimeLike(s) {
	const parts = dateTimeRegExp.exec(s);
	return parts ? ((parts) => {
		const zOrOffset = parts[12];
		const hasZ = "Z" === (zOrOffset || "").toUpperCase();
		return {
			year: organizeIsoYearParts(parts),
			month: parseInt(parts[5]),
			day: parseInt(parts[6]),
			...organizeTimeParts(parts, 7),
			...organizeAnnotationParts(parts[19]),
			re: Boolean(parts[7]),
			C: hasZ,
			offset: hasZ ? void 0 : zOrOffset
		};
	})(parts) : void 0;
}
function parseYearMonthOnly(s) {
	const parts = yearMonthRegExp.exec(s);
	if (parts) return ((parts) => ({
		year: organizeIsoYearParts(parts),
		month: parseInt(parts[4]),
		day: 1,
		...organizeAnnotationParts(parts[5])
	}))(parts);
}
function parseMonthDayOnly(s) {
	const parts = monthDayRegExp.exec(s);
	return parts ? ((parts) => ({
		year: 1972,
		month: parseInt(parts[1]),
		day: parseInt(parts[2]),
		...organizeAnnotationParts(parts[3])
	}))(parts) : void 0;
}
function parseTimeOnlyParts(s) {
	const parts = timeRegExp.exec(s);
	if (parts) return parts[6] && parseOffsetNano(parts[6]), parts;
}
function organizeTimeParts(parts, hourIndex) {
	const second = parseInt0(parts[hourIndex + 3]);
	return {
		...nanoToTimeAndDay(parseSubsecNano(parts[hourIndex + 4] || ""))[0],
		hour: parseInt0(parts[hourIndex]),
		minute: parseInt0(parts[hourIndex + 2]),
		second: 60 === second ? 59 : second
	};
}
function organizeIsoYearParts(parts) {
	const yearSign = parseSign(parts[1]);
	const year = parseInt(parts[2] || parts[3]);
	return yearSign < 0 && !year && throwRangeError(invalidSubstring(-0)), yearSign * year;
}
function organizeAnnotationParts(s) {
	let calendarIsCritical;
	let timeZoneId;
	const calendarIds = [];
	return s.replace(annotationRegExp, (whole, criticalStr, mainStr) => {
		const isCritical = Boolean(criticalStr);
		const [val, name] = mainStr.split("=").reverse();
		return name ? "u-ca" === name ? (calendarIds.push(val.toLowerCase()), calendarIsCritical || (calendarIsCritical = isCritical)) : (isCritical || /[A-Z]/.test(name)) && throwRangeError(invalidSubstring(whole)) : (timeZoneId && throwRangeError(invalidSubstring(whole)), timeZoneId = val), "";
	}), calendarIds.length > 1 && calendarIsCritical && throwRangeError(invalidSubstring(s)), {
		timeZoneId,
		calendarId: calendarIds[0] || "iso8601"
	};
}
function mergeCalendarFields(calendar, baseFields, additionalFields) {
	const merged = Object.assign(Object.create(null), baseFields);
	return spliceFields(merged, additionalFields, monthFieldNames), getCalendarEraOrigins(calendar) && (spliceFields(merged, additionalFields, allYearFieldNames), calendar && calendar.ge && spliceFields(merged, additionalFields, monthDayFieldNames, eraYearFieldNames)), merged;
}
function spliceFields(dest, additional, allPropNames, deletablePropNames) {
	let anyMatching = 0;
	const nonMatchingPropNames = [];
	for (const propName of allPropNames) void 0 !== additional[propName] ? anyMatching = 1 : nonMatchingPropNames.push(propName);
	if (Object.assign(dest, additional), anyMatching) for (const deletablePropName of deletablePropNames || nonMatchingPropNames) delete dest[deletablePropName];
}
function mergeZonedDateTimeFields(zonedDateTimeSlots, modFields, options) {
	const { calendar, timeZone } = zonedDateTimeSlots;
	const validFieldNames = getCalendarFieldNames(calendar, dateTimeAndOffsetFieldNamesAlpha, dateTimeAndOffsetFieldNamesWithEraAlpha);
	const zonedSlots = zonedEpochSlotsToIso(zonedDateTimeSlots);
	const { year, month, day } = computeCalendarDateFields(calendar, zonedSlots);
	const origFields = {
		year,
		monthCode: computeMonthCode(calendar, year, month),
		day,
		hour: zonedSlots.hour,
		minute: zonedSlots.minute,
		second: zonedSlots.second,
		millisecond: zonedSlots.millisecond,
		microsecond: zonedSlots.microsecond,
		nanosecond: zonedSlots.nanosecond,
		offset: zonedSlots.offsetNanoseconds
	};
	const partialFields = readAndRefineBagFields(modFields, validFieldNames, zonedDateTimeFieldRefiners);
	const mergedCalendarFields = mergeCalendarFields(calendar, origFields, partialFields);
	const mergedAllFields = {
		...origFields,
		...partialFields
	};
	const [isoDateFields, overflow, offsetDisambig, epochDisambig] = createPlainDateFromFieldsWithOptionsRefiner(calendar, mergedCalendarFields, () => refineZonedFieldOptions(options, 2));
	return createZonedEpochNanoSlots(getMatchingInstantFor(timeZone, combineDateAndTime(isoDateFields, constrainTimeFields(mergedAllFields, overflow)), mergedAllFields.offset, offsetDisambig, epochDisambig), timeZone, calendar);
}
function mergePlainDateTimeFields(plainDateTimeSlots, modFields, options) {
	const { calendar } = plainDateTimeSlots;
	const validFieldNames = getCalendarFieldNames(calendar, dateTimeFieldNamesAlpha, dateTimeFieldNamesWithEraAlpha);
	const { year, month, day } = computeCalendarDateFields(calendar, plainDateTimeSlots);
	const origFields = {
		year,
		monthCode: computeMonthCode(calendar, year, month),
		day,
		hour: plainDateTimeSlots.hour,
		minute: plainDateTimeSlots.minute,
		second: plainDateTimeSlots.second,
		millisecond: plainDateTimeSlots.millisecond,
		microsecond: plainDateTimeSlots.microsecond,
		nanosecond: plainDateTimeSlots.nanosecond
	};
	const partialFields = readAndRefineBagFields(modFields, validFieldNames, dateTimeFieldRefiners);
	const mergedCalendarFields = mergeCalendarFields(calendar, origFields, partialFields);
	const mergedAllFields = {
		...origFields,
		...partialFields
	};
	const [plainDateSlots, overflow] = createPlainDateFromFieldsWithOptionsRefiner(calendar, mergedCalendarFields, () => [refineOverflowOptions(options)]);
	return createPlainDateTimeFromRefinedFields(plainDateSlots, constrainTimeFields(mergedAllFields, overflow), calendar);
}
function mergePlainDateFields(plainDateSlots, modFields, options) {
	const { calendar } = plainDateSlots;
	const validFieldNames = getCalendarFieldNames(calendar, dateFieldNamesAlpha, dateFieldNamesWithEraAlpha);
	const { year, month, day } = computeCalendarDateFields(calendar, plainDateSlots);
	return createPlainDateFromFields(calendar, mergeCalendarFields(calendar, {
		year,
		monthCode: computeMonthCode(calendar, year, month),
		day
	}, readAndRefineBagFields(modFields, validFieldNames, dateFieldRefiners)), options);
}
function mergePlainYearMonthFields(plainYearMonthSlots, modFields, options) {
	const { calendar } = plainYearMonthSlots;
	const validFieldNames = getCalendarFieldNames(calendar, yearMonthFieldNamesAlpha, yearMonthFieldNamesWithEraAlpha);
	const { year, month } = computeCalendarDateFields(calendar, plainYearMonthSlots);
	return createPlainYearMonthFromFields(calendar, mergeCalendarFields(calendar, {
		year,
		monthCode: computeMonthCode(calendar, year, month)
	}, readAndRefineBagFields(modFields, validFieldNames, dateFieldRefiners)), options);
}
function mergePlainMonthDayFields(plainMonthDaySlots, modFields, options) {
	const { calendar } = plainMonthDaySlots;
	const validFieldNames = getCalendarFieldNames(calendar, dateFieldNamesAlpha, dateFieldNamesWithEraAlpha);
	const { year, month, day } = computeCalendarDateFields(calendar, plainMonthDaySlots);
	return createPlainMonthDayFromFields(calendar, mergeCalendarFields(calendar, {
		monthCode: computeMonthCode(calendar, year, month),
		day
	}, readAndRefineBagFields(modFields, validFieldNames, dateFieldRefiners)), options);
}
function mergePlainTimeFields(initialFields, mod, options) {
	return ((initialFields, modFields, options) => resolveTimeFields({
		...pluckProps(timeFieldNamesAlpha, initialFields),
		...readAndRefineBagFields(modFields, timeFieldNamesAlpha, timeFieldRefiners)
	}, refineOverflowOptions(options)))(initialFields, mod, options);
}
function mergeDurationFields(slots, fields) {
	return createDurationSlots((initialFields = slots, modFields = fields, validateDurationFields({
		...initialFields,
		...readAndRefineBagFields(modFields, durationFieldNamesAlpha, durationFieldRefiners)
	})));
	var initialFields, modFields;
}
function computeMonthCode(calendar, year, month) {
	const [monthCodeNumber, isLeapMonth] = computeCalendarMonthCodeParts(calendar, year, month);
	return formatMonthCode(monthCodeNumber, isLeapMonth);
}
function instantToZonedDateTime(instantSlots, timeZone, calendar) {
	return createZonedEpochNanoSlots(instantSlots.epochNanoseconds, timeZone, calendar);
}
function zonedDateTimeToInstant(zonedDateTimeSlots0) {
	return createEpochNanoSlots(zonedDateTimeSlots0.epochNanoseconds);
}
function zonedDateTimeToPlainDateTime(zonedDateTimeSlots0) {
	return createDateTimeSlots(zonedEpochSlotsToIso(zonedDateTimeSlots0), zonedDateTimeSlots0.calendar);
}
function zonedDateTimeToPlainDate(zonedDateTimeSlots0) {
	return createDateSlots(zonedEpochSlotsToIso(zonedDateTimeSlots0), zonedDateTimeSlots0.calendar);
}
function zonedDateTimeToPlainTime(zonedDateTimeSlots0) {
	return createTimeSlots(zonedEpochSlotsToIso(zonedDateTimeSlots0));
}
function plainDateTimeToZonedDateTime(plainDateTimeSlots, timeZone, options) {
	return createZonedEpochNanoSlots(checkEpochNanoInBounds(getSingleInstantFor(timeZone, plainDateTimeSlots, ((options) => coerceEpochDisambig(normalizeOptions(options)))(options))), timeZone, plainDateTimeSlots.calendar);
}
function plainDateToZonedDateTime(refineTimeZoneString, refinePlainTimeArg, plainDateSlots, options) {
	const timeZoneId = refineTimeZoneString(options.timeZone);
	const plainTimeArg = options.plainTime;
	const timeFields = void 0 !== plainTimeArg ? refinePlainTimeArg(plainTimeArg) : void 0;
	const timeZone = queryTimeZone(timeZoneId);
	let epochNano;
	return epochNano = timeFields ? getSingleInstantFor(timeZone, combineDateAndTime(plainDateSlots, timeFields)) : getStartOfDayInstantFor(timeZone, combineDateAndTime(plainDateSlots, timeFieldDefaults)), createZonedEpochNanoSlots(epochNano, timeZone, plainDateSlots.calendar);
}
function convertPlainYearMonthToDate(calendar, input, bag) {
	return createPlainDateFromMergedFields(calendar, pluckProps(getCalendarFieldNames(calendar, yearMonthCodeFieldNamesAlpha, yearMonthCodeFieldNamesWithEraAlpha), input), readAndRefineBagFields(requireObjectLike(bag), dayFieldNamesAsc, dateFieldRefiners, []));
}
function convertPlainMonthDayToDate(calendar, input, bag) {
	const extraFieldNames = getCalendarFieldNames(calendar, yearFieldNamesAsc, yearFieldNamesWithEraAlpha);
	return createPlainDateFromMergedFields(calendar, pluckProps(monthCodeDayFieldNamesAlpha, input), readAndRefineBagFields(requireObjectLike(bag), extraFieldNames, dateFieldRefiners, []));
}
function convertToPlainMonthDay(calendar, input) {
	return createPlainMonthDayFromFields(calendar, readAndRefineBagFields(input, monthCodeDayFieldNamesAlpha, dateFieldRefiners));
}
function convertToPlainYearMonth(calendar, input, options) {
	return createPlainYearMonthFromFields(calendar, readAndRefineBagFields(input, getCalendarFieldNames(calendar, yearMonthCodeFieldNamesAlpha, yearMonthCodeFieldNamesWithEraAlpha), dateFieldRefiners), options);
}
function createPlainDateFromMergedFields(calendar, inputFields, extraFields) {
	const mergedFieldNames = getCalendarFieldNames(calendar, yearMonthCodeDayFieldNamesAlpha, yearMonthCodeDayFieldNamesWithEraAlpha);
	let mergedFields = mergeCalendarFields(calendar, inputFields, extraFields);
	return mergedFields = readAndRefineBagFields(mergedFields, mergedFieldNames, dateFieldRefiners, []), createPlainDateFromFields(calendar, mergedFields);
}
function epochMilliToInstant(epochMilli) {
	return createEpochNanoSlots(checkEpochNanoInBounds(BigInt(toStrictInteger(epochMilli)) * bigNanoInMilli));
}
function epochNanoToInstant(epochNano) {
	return createEpochNanoSlots(checkEpochNanoInBounds(toBigInt(epochNano)));
}
function applyPlainFormatTimeZone(options) {
	return options.timeZone = "UTC", ["full", "long"].includes(options.timeStyle) && (options.timeStyle = "medium"), options;
}
function applyZonedFormatTimeZone(options, timeZoneId) {
	return void 0 !== options.timeZone && throwTypeError("Cannot specify TimeZone"), options.timeZone = timeZoneId, options;
}
function checkResolvedCalendarCompatible(format, slots, strictCalendarCheck) {
	const resolvedCalendarId = format.resolvedOptions().calendar;
	!strictCalendarCheck && slots.calendar === void 0 || getCalendarSlotId(slots.calendar) === resolvedCalendarId || throwRangeError("Mismatching Calendars");
}
function createOptionsTransformer(shapeFieldNames, invalidShapeFieldNames, ignoredFieldNames, defaultShapeFields, dateStyleReplacementFields) {
	const shapeFieldNameSet = new Set(shapeFieldNames);
	const invalidShapeFieldNameSet = new Set(invalidShapeFieldNames);
	const ignoredFieldNameSet = new Set(ignoredFieldNames);
	return (options, allowPartialOverlap) => {
		let dateStyle;
		let timeStyle;
		const granularShapeFields = {};
		const modifierFields = {};
		const otherFields = {};
		let hasInvalidGranularShapeFields = 0;
		let hasInvalidStyleFields = 0;
		for (const name of Object.keys(options)) {
			const value = options[name];
			void 0 === value || ignoredFieldNameSet.has(name) || (shapeFieldNameSet.has(name) ? "dateStyle" === name ? dateStyle = value : "timeStyle" === name ? timeStyle = value : granularShapeFields[name] = value : "era" === name ? modifierFields[name] = value : invalidShapeFieldNameSet.has(name) ? "dateStyle" === name || "timeStyle" === name ? hasInvalidStyleFields = 1 : hasInvalidGranularShapeFields = 1 : otherFields[name] = value);
		}
		const hasDateStyle = void 0 !== dateStyle;
		const hasTimeStyle = void 0 !== timeStyle;
		const hasAnyStyle = hasDateStyle || hasTimeStyle;
		const hasGranularShapeFields = Object.keys(granularShapeFields).length > 0;
		const hasInvalids = hasInvalidGranularShapeFields || hasInvalidStyleFields;
		const hasShapeFields = hasGranularShapeFields || hasDateStyle || hasTimeStyle;
		const hasModifierFields = Object.keys(modifierFields).length > 0;
		(!allowPartialOverlap && hasInvalids || allowPartialOverlap && hasInvalids && !hasShapeFields || hasAnyStyle && (hasGranularShapeFields || hasModifierFields || hasInvalidGranularShapeFields)) && throwTypeError("Invalid formatting options");
		const transformedOptions = {};
		return hasAnyStyle || hasShapeFields || Object.assign(transformedOptions, defaultShapeFields), Object.assign(transformedOptions, granularShapeFields, modifierFields, otherFields), hasDateStyle && (dateStyleReplacementFields ? Object.assign(transformedOptions, dateStyleReplacementFields[dateStyle]) : transformedOptions.dateStyle = dateStyle), hasTimeStyle && (transformedOptions.timeStyle = timeStyle), transformedOptions;
	};
}
const dateDefaultShapeFields = {
	year: "numeric",
	month: "numeric",
	day: "numeric"
};
const timeDefaultShapeFields = {
	hour: "numeric",
	minute: "numeric",
	second: "numeric"
};
const dateTimeDefaultShapeFields = /*@__PURE__*/ Object.assign({}, dateDefaultShapeFields, timeDefaultShapeFields);
const dateShapeFieldNames = [
	"weekday",
	"year",
	"month",
	"day",
	"dateStyle"
];
const timeShapeFieldNames = [
	"dayPeriod",
	"hour",
	"minute",
	"second",
	"fractionalSecondDigits",
	"timeStyle"
];
const dateTimeShapeFieldNames = /*@__PURE__*/ dateShapeFieldNames.concat(timeShapeFieldNames);
const yearMonthIgnoredFieldNames = /*@__PURE__*/ ["weekday", "day"].concat(timeShapeFieldNames);
const monthDayIgnoredFieldNames = /*@__PURE__*/ ["weekday", "year"].concat(timeShapeFieldNames);
const transformInstantOptions = /*@__PURE__*/ createOptionsTransformer(dateTimeShapeFieldNames, [], [], dateTimeDefaultShapeFields);
const transformZonedOptions = /*@__PURE__*/ createOptionsTransformer(dateTimeShapeFieldNames, [], [], {
	...dateTimeDefaultShapeFields,
	timeZoneName: "short"
});
const transformDateTimeOptions = /*@__PURE__*/ createOptionsTransformer(dateTimeShapeFieldNames, [], ["timeZoneName"], dateTimeDefaultShapeFields);
const transformDateOptions = /*@__PURE__*/ createOptionsTransformer(dateShapeFieldNames, timeShapeFieldNames, ["timeZoneName"], dateDefaultShapeFields);
const transformTimeOptions = /*@__PURE__*/ createOptionsTransformer(timeShapeFieldNames, dateShapeFieldNames, ["timeZoneName", "era"], timeDefaultShapeFields);
const transformYearMonthOptions = /*@__PURE__*/ createOptionsTransformer([
	"year",
	"month",
	"dateStyle"
], yearMonthIgnoredFieldNames, ["timeZoneName"], {
	year: "numeric",
	month: "numeric"
}, {
	full: {
		year: "numeric",
		month: "long"
	},
	long: {
		year: "numeric",
		month: "long"
	},
	medium: {
		year: "numeric",
		month: "short"
	},
	short: {
		year: "2-digit",
		month: "numeric"
	}
});
const transformMonthDayOptions = /*@__PURE__*/ createOptionsTransformer([
	"month",
	"day",
	"dateStyle"
], monthDayIgnoredFieldNames, ["timeZoneName", "era"], {
	month: "numeric",
	day: "numeric"
}, {
	full: {
		month: "long",
		day: "numeric"
	},
	long: {
		month: "long",
		day: "numeric"
	},
	medium: {
		month: "short",
		day: "numeric"
	},
	short: {
		month: "numeric",
		day: "numeric"
	}
});
function zonedDateTimeWithPlainTime(zonedDateTimeSlots, plainTimeFields) {
	const { timeZone } = zonedDateTimeSlots;
	const isoDateTime = zonedEpochSlotsToIso(zonedDateTimeSlots);
	const { offsetNanoseconds } = isoDateTime;
	const time = plainTimeFields || timeFieldDefaults;
	let epochNano;
	return epochNano = plainTimeFields ? getMatchingInstantFor(timeZone, combineDateAndTime(isoDateTime, time), offsetNanoseconds, 2) : getStartOfDayInstantFor(timeZone, combineDateAndTime(isoDateTime, time)), createZonedEpochNanoSlots(epochNano, timeZone, zonedDateTimeSlots.calendar);
}
function getCurrentIsoDateTime(timeZone) {
	const epochNano = getCurrentEpochNano();
	const offsetNano = timeZone.B(epochNano);
	return epochNanoToIsoDateTime(epochNano + BigInt(offsetNano));
}
function getCurrentEpochNano() {
	return BigInt(Date.now()) * bigNanoInMilli;
}
function getCurrentTimeZoneId() {
	return new RawDateTimeFormat().resolvedOptions().timeZone;
}
//#endregion
//#region ../../node_modules/temporal-polyfill/chunks/apiHelpers.js
const PlainYearMonthBranding = "PlainYearMonth";
const PlainMonthDayBranding = "PlainMonthDay";
const PlainDateBranding = "PlainDate";
const PlainDateTimeBranding = "PlainDateTime";
const PlainTimeBranding = "PlainTime";
const ZonedDateTimeBranding = "ZonedDateTime";
const InstantBranding = "Instant";
const DurationBranding = "Duration";
function defineTemporalClass(branding, cls, getSlots, ...getterMaps) {
	return Object.defineProperties(cls, createNameDescriptors(branding)), Object.defineProperties(cls.prototype, createStringTagDescriptors("Temporal." + branding)), Object.defineProperties(cls.prototype, mapProps((getter) => ({
		get() {
			return getter(getSlots(this));
		},
		configurable: 1
	}), Object.assign({}, ...getterMaps))), cls;
}
const attachDebugString = "noop" === noop.name ? (instance) => {
	Object.defineProperty(instance, "_str_", { value: instance.toJSON() });
} : noop;
function invalidRecordType() {
	throwTypeError(invalidCallingContext);
}
function forbiddenValueOf() {
	throwTypeError(forbiddenValueOf$1);
}
const yearMonthFieldGetters$1 = {
	era(slots) {
		return computeCalendarEraFields(slots.calendar, slots).era;
	},
	eraYear(slots) {
		return computeCalendarEraFields(slots.calendar, slots).eraYear;
	},
	year(slots) {
		return computeCalendarDateFields(slots.calendar, slots).year;
	},
	month(slots) {
		return computeCalendarDateFields(slots.calendar, slots).month;
	},
	monthCode(slots) {
		return computeCalendarMonthCode(slots.calendar, slots);
	}
};
const dateFieldGetters$1 = {
	era(slots) {
		return computeCalendarEraFields(slots.calendar, slots).era;
	},
	eraYear(slots) {
		return computeCalendarEraFields(slots.calendar, slots).eraYear;
	},
	year(slots) {
		return computeCalendarDateFields(slots.calendar, slots).year;
	},
	month(slots) {
		return computeCalendarDateFields(slots.calendar, slots).month;
	},
	monthCode(slots) {
		return computeCalendarMonthCode(slots.calendar, slots);
	},
	day(slots) {
		return computeCalendarDateFields(slots.calendar, slots).day;
	}
};
const monthDayFieldGetters$1 = {
	monthCode(slots) {
		return computeCalendarMonthCode(slots.calendar, slots);
	},
	day(slots) {
		return computeCalendarDateFields(slots.calendar, slots).day;
	}
};
const yearMonthDerivedGetters = {
	daysInMonth(slots) {
		return computeCalendarDaysInMonth(slots.calendar, slots);
	},
	daysInYear(slots) {
		return computeCalendarDaysInYear(slots.calendar, slots);
	},
	monthsInYear(slots) {
		return computeCalendarMonthsInYear(slots.calendar, slots);
	},
	inLeapYear(slots) {
		return computeCalendarInLeapYear(slots.calendar, slots);
	}
};
const dateDerivedGetters = {
	dayOfWeek(slots) {
		return computeIsoDayOfWeek(slots);
	},
	dayOfYear(slots) {
		return computeCalendarDayOfYear(slots.calendar, slots);
	},
	weekOfYear(slots) {
		return computeCalendarWeekOfYear(slots.calendar, slots);
	},
	yearOfWeek(slots) {
		return computeCalendarYearOfWeek(slots.calendar, slots);
	},
	daysInWeek() {
		return 7;
	},
	daysInMonth(slots) {
		return computeCalendarDaysInMonth(slots.calendar, slots);
	},
	daysInYear(slots) {
		return computeCalendarDaysInYear(slots.calendar, slots);
	},
	monthsInYear(slots) {
		return computeCalendarMonthsInYear(slots.calendar, slots);
	},
	inLeapYear(slots) {
		return computeCalendarInLeapYear(slots.calendar, slots);
	}
};
function createNativeGetters(shimGetters) {
	return createPropGetters(Object.keys(shimGetters));
}
createNativeGetters(yearMonthDerivedGetters), createNativeGetters(dateDerivedGetters);
//#endregion
//#region ../../node_modules/temporal-polyfill/chunks/classApi-basic.js
function resolveBasicCalendarId(rawCalendarId) {
	const lowerRawCalendarId = requireString(rawCalendarId).toLowerCase();
	return lowerRawCalendarId === "iso8601" ? void 0 : lowerRawCalendarId === "gregory" ? 0 : void throwRangeError(exoticCalendarRequired(rawCalendarId, "temporal-polyfill/full"));
}
function resolveBasicCalendarArg(rawCalendarId = isoCalendarId) {
	return resolveBasicCalendarId(rawCalendarId);
}
const zonedDateTimeSlotsMap = /*@__PURE__*/ new WeakMap();
const ZonedDateTime = /*@__PURE__*/ defineTemporalClass(ZonedDateTimeBranding, class {
	constructor(epochNanoseconds, timeZoneId, calendar = void 0) {
		const epochNano = checkEpochNanoInBounds(toBigInt(epochNanoseconds));
		const timeZone = queryTimeZone(refineTimeZoneId(timeZoneId));
		const calendarImpl = resolveBasicCalendarArg(calendar);
		initZonedDateTime(this, createZonedEpochNanoSlots(epochNano, timeZone, calendarImpl));
	}
	static from(arg, options = void 0) {
		return createZonedDateTime(toZonedDateTimeSlots(arg, options));
	}
	static compare(arg0, arg1) {
		return compareZonedEpochSlots(toZonedDateTimeSlots(arg0), toZonedDateTimeSlots(arg1));
	}
	get calendarId() {
		return getCalendarSlotId(getZonedDateTimeSlots(this).calendar);
	}
	get timeZoneId() {
		return getZonedDateTimeSlots(this).timeZone.id;
	}
	get epochMilliseconds() {
		return getEpochMilli(getZonedDateTimeSlots(this));
	}
	get epochNanoseconds() {
		return getEpochNano(getZonedDateTimeSlots(this));
	}
	get offset() {
		return formatOffsetNano(zonedEpochSlotsToIso(getZonedDateTimeSlots(this)).offsetNanoseconds);
	}
	get offsetNanoseconds() {
		return zonedEpochSlotsToIso(getZonedDateTimeSlots(this)).offsetNanoseconds;
	}
	get hoursInDay() {
		return computeZonedHoursInDay(getZonedDateTimeSlots(this));
	}
	with(mod, options = void 0) {
		return createZonedDateTime(mergeZonedDateTimeFields(getZonedDateTimeSlots(this), validateBag(mod), options));
	}
	withCalendar(calendarArg) {
		return createZonedDateTime({
			...getZonedDateTimeSlots(this),
			calendar: refineCalendarArg(calendarArg)
		});
	}
	withTimeZone(timeZoneArg) {
		return createZonedDateTime({
			...getZonedDateTimeSlots(this),
			timeZone: queryTimeZone(refineTimeZoneArg(timeZoneArg))
		});
	}
	withPlainTime(plainTimeArg = void 0) {
		return createZonedDateTime(zonedDateTimeWithPlainTime(getZonedDateTimeSlots(this), optionalToPlainTimeFields(plainTimeArg)));
	}
	add(durationArg, options = void 0) {
		return createZonedDateTime(moveZonedEpochSlots(getZonedDateTimeSlots(this), toDurationSlots(durationArg), options));
	}
	subtract(durationArg, options = void 0) {
		return createZonedDateTime(moveZonedEpochSlots(getZonedDateTimeSlots(this), negateDurationFields(toDurationSlots(durationArg)), options));
	}
	until(otherArg, options = void 0) {
		const slots = getZonedDateTimeSlots(this);
		const other = toZonedDateTimeSlots(otherArg);
		return createDuration(createDurationSlots(diffZonedDateTimes(0, getCommonCalendar(slots.calendar, other.calendar), slots, other, options)));
	}
	since(otherArg, options = void 0) {
		const slots = getZonedDateTimeSlots(this);
		const other = toZonedDateTimeSlots(otherArg);
		return createDuration(createDurationSlots(diffZonedDateTimes(1, getCommonCalendar(slots.calendar, other.calendar), slots, other, options)));
	}
	round(options) {
		const slots = getZonedDateTimeSlots(this);
		const [smallestUnit, roundingInc, roundingMode] = refineRoundingOptions(options);
		return createZonedDateTime(roundZonedEpochSlotsToUnit(slots, smallestUnit, roundingInc, roundingMode));
	}
	startOfDay() {
		return createZonedDateTime(computeZonedStartOfDay(getZonedDateTimeSlots(this)));
	}
	equals(otherArg) {
		return zonedDateTimesEqual(getZonedDateTimeSlots(this), toZonedDateTimeSlots(otherArg));
	}
	toInstant() {
		return createInstant(zonedDateTimeToInstant(getZonedDateTimeSlots(this)));
	}
	toPlainDateTime() {
		return createPlainDateTime(zonedDateTimeToPlainDateTime(getZonedDateTimeSlots(this)));
	}
	toPlainDate() {
		return createPlainDate(zonedDateTimeToPlainDate(getZonedDateTimeSlots(this)));
	}
	toPlainTime() {
		return createPlainTime(zonedDateTimeToPlainTime(getZonedDateTimeSlots(this)));
	}
	toLocaleString(locales = void 0, options = {}) {
		const slots = getZonedDateTimeSlots(this);
		const format = new RawDateTimeFormat(locales, applyZonedFormatTimeZone(transformZonedOptions(options), getZonedTimeZoneId(slots)));
		return checkResolvedCalendarCompatible(format, slots), format.format(getEpochMilli(slots));
	}
	toString(options = void 0) {
		return formatZonedDateTimeIso(getZonedDateTimeSlots(this), options);
	}
	toJSON() {
		return formatZonedDateTimeIso(getZonedDateTimeSlots(this));
	}
	getTimeZoneTransition(options) {
		const slots = getZonedDateTimeSlots(this);
		const newEpochNano = getTimeZoneTransitionEpochNanoseconds(slots, options);
		return newEpochNano ? createZonedDateTime({
			...slots,
			epochNanoseconds: newEpochNano
		}) : null;
	}
	valueOf() {
		return forbiddenValueOf();
	}
}, getZonedDateTimeIsoSlots, dateFieldGetters$1, dateDerivedGetters, timeGetters);
function createZonedDateTime(slots) {
	return initZonedDateTime(Object.create(ZonedDateTime.prototype), slots);
}
function getZonedDateTimeSlots(obj) {
	return getZonedDateTimeSlotsIfPresent(obj) || invalidRecordType();
}
function getZonedDateTimeIsoSlots(obj) {
	const slots = getZonedDateTimeSlots(obj);
	return {
		...zonedEpochSlotsToIso(slots),
		calendar: slots.calendar
	};
}
function getZonedDateTimeSlotsIfPresent(obj) {
	return zonedDateTimeSlotsMap.get(obj);
}
function toZonedDateTimeSlots(arg, options) {
	if (isObjectLike(arg)) {
		const ownSlots = getZonedDateTimeSlotsIfPresent(arg);
		if (ownSlots) return refineZonedFieldOptions(options), ownSlots;
		return refineZonedDateTimeObjectLike(refineTimeZoneArg, getCalendarFromBag(arg), arg, options);
	}
	return parseZonedDateTime(arg, resolveBasicCalendarId, options);
}
function initZonedDateTime(instance, slots) {
	return zonedDateTimeSlotsMap.set(instance, slots), attachDebugString(instance), instance;
}
function refineTimeZoneArg(arg) {
	if (isObjectLike(arg)) {
		const slots = getZonedDateTimeSlotsIfPresent(arg);
		return slots || throwTypeError(invalidTimeZone(arg)), slots.timeZone.id;
	}
	return ((arg) => resolveTimeZoneId(parseTimeZoneId(requireString(arg))))(arg);
}
const instantSlotsMap = /*@__PURE__*/ new WeakMap();
const Instant = /*@__PURE__*/ defineTemporalClass(InstantBranding, class {
	constructor(epochNanoseconds) {
		const epochNano = checkEpochNanoInBounds(toBigInt(epochNanoseconds));
		initInstant(this, createEpochNanoSlots(epochNano));
	}
	static from(arg) {
		return createInstant(toInstantSlots(arg));
	}
	static fromEpochMilliseconds(epochMilli) {
		return createInstant(epochMilliToInstant(epochMilli));
	}
	static fromEpochNanoseconds(epochNano) {
		return createInstant(epochNanoToInstant(epochNano));
	}
	static compare(a, b) {
		return compareZonedEpochSlots(toInstantSlots(a), toInstantSlots(b));
	}
	get epochMilliseconds() {
		return getEpochMilli(getInstantSlots(this));
	}
	get epochNanoseconds() {
		return getEpochNano(getInstantSlots(this));
	}
	add(durationArg) {
		return createInstant(createEpochNanoSlots(moveEpochNano(getInstantSlots(this).epochNanoseconds, toDurationSlots(durationArg))));
	}
	subtract(durationArg) {
		return createInstant(createEpochNanoSlots(moveEpochNano(getInstantSlots(this).epochNanoseconds, negateDurationFields(toDurationSlots(durationArg)))));
	}
	until(otherArg, options = void 0) {
		return createDuration(diffInstants(0, getInstantSlots(this), toInstantSlots(otherArg), options));
	}
	since(otherArg, options = void 0) {
		return createDuration(diffInstants(1, getInstantSlots(this), toInstantSlots(otherArg), options));
	}
	round(options) {
		const slots = getInstantSlots(this);
		const [smallestUnit, roundingInc, roundingMode] = refineRoundingOptions(options, 5, 1);
		return createInstant(createEpochNanoSlots(roundBigNanoToDayOriginInc(slots.epochNanoseconds, computeBigNanoInc(smallestUnit, roundingInc), roundingMode)));
	}
	equals(otherArg) {
		return instantsEqual(getInstantSlots(this), toInstantSlots(otherArg));
	}
	toZonedDateTimeISO(timeZoneArg) {
		return createZonedDateTime(instantToZonedDateTime(getInstantSlots(this), queryTimeZone(refineTimeZoneArg(timeZoneArg))));
	}
	toLocaleString(locales = void 0, options = {}) {
		const slots = getInstantSlots(this);
		return new RawDateTimeFormat(locales, transformInstantOptions(options)).format(getEpochMilli(slots));
	}
	toString(options = void 0) {
		return formatInstantIso(refineTimeZoneArg, getInstantSlots(this), options);
	}
	toJSON() {
		return formatInstantIso(refineTimeZoneArg, getInstantSlots(this));
	}
	valueOf() {
		return forbiddenValueOf();
	}
});
function createInstant(slots) {
	return initInstant(Object.create(Instant.prototype), slots);
}
function getInstantSlots(obj) {
	return getInstantSlotsIfPresent(obj) || invalidRecordType();
}
function getInstantSlotsIfPresent(obj) {
	return instantSlotsMap.get(obj);
}
function toInstantSlots(arg) {
	if (isObjectLike(arg)) {
		const ownSlots = getInstantSlotsIfPresent(arg);
		if (ownSlots) return ownSlots;
		const zonedDateTimeSlots = getZonedDateTimeSlotsIfPresent(arg);
		if (zonedDateTimeSlots) return createEpochNanoSlots(zonedDateTimeSlots.epochNanoseconds);
	}
	return parseInstant(arg);
}
const { toTemporalInstant: toTemporalInstant$1 } = { toTemporalInstant() {
	const epochMilli = Date.prototype.valueOf.call(this);
	return createInstant(createEpochNanoSlots(BigInt(requireNumberIsInteger(epochMilli)) * bigNanoInMilli));
} };
function initInstant(instance, slots) {
	return instantSlotsMap.set(instance, slots), attachDebugString(instance), instance;
}
const plainMonthDaySlotsMap = /*@__PURE__*/ new WeakMap();
const PlainMonthDay = /*@__PURE__*/ defineTemporalClass(PlainMonthDayBranding, class {
	constructor(isoMonth, isoDay, calendar = void 0, referenceIsoYear) {
		const isoMonthInt = toIntegerWithTrunc(isoMonth);
		const isoDayInt = toIntegerWithTrunc(isoDay);
		const calendarImpl = resolveBasicCalendarArg(calendar);
		const fields = checkIsoDateInBounds(validateIsoDateFields({
			year: toIntegerWithTrunc(referenceIsoYear ?? 1972),
			month: isoMonthInt,
			day: isoDayInt
		}));
		initPlainMonthDay(this, createDateSlots(fields, calendarImpl));
	}
	static from(arg, options = void 0) {
		return createPlainMonthDay(toPlainMonthDaySlots(arg, options));
	}
	get calendarId() {
		return getCalendarSlotId(getPlainMonthDaySlots(this).calendar);
	}
	with(mod, options = void 0) {
		return createPlainMonthDay(mergePlainMonthDayFields(getPlainMonthDaySlots(this), validateBag(mod), options));
	}
	equals(otherArg) {
		return plainMonthDaysEqual(getPlainMonthDaySlots(this), toPlainMonthDaySlots(otherArg));
	}
	toPlainDate(bag) {
		return createPlainDate(convertPlainMonthDayToDate(getPlainMonthDaySlots(this).calendar, this, bag));
	}
	toLocaleString(locales = void 0, options = {}) {
		const slots = getPlainMonthDaySlots(this);
		const format = new RawDateTimeFormat(locales, applyPlainFormatTimeZone(transformMonthDayOptions(options)));
		return checkResolvedCalendarCompatible(format, slots, 1), format.format(isoDateToEpochMilli(slots));
	}
	toString(options = void 0) {
		return formatPlainMonthDayIso(getPlainMonthDaySlots(this), options);
	}
	toJSON() {
		return formatPlainMonthDayIso(getPlainMonthDaySlots(this));
	}
	valueOf() {
		return forbiddenValueOf();
	}
}, getPlainMonthDaySlots, monthDayFieldGetters$1);
function createPlainMonthDay(slots) {
	return initPlainMonthDay(Object.create(PlainMonthDay.prototype), slots);
}
function getPlainMonthDaySlots(obj) {
	return getPlainMonthDaySlotsIfPresent(obj) || invalidRecordType();
}
function getPlainMonthDaySlotsIfPresent(obj) {
	return plainMonthDaySlotsMap.get(obj);
}
function toPlainMonthDaySlots(arg, options) {
	if (isObjectLike(arg)) {
		const ownSlots = getPlainMonthDaySlotsIfPresent(arg);
		if (ownSlots) return refineOverflowOptions(options), ownSlots;
		const calendarMaybe = extractCalendarFromBag(arg);
		return refinePlainMonthDayObjectLike(void 0 === calendarMaybe ? void 0 : calendarMaybe, void 0 === calendarMaybe, arg, options);
	}
	const res = parsePlainMonthDay(arg, resolveBasicCalendarId);
	return refineOverflowOptions(options), res;
}
function initPlainMonthDay(instance, slots) {
	return plainMonthDaySlotsMap.set(instance, slots), attachDebugString(instance), instance;
}
const plainYearMonthSlotsMap = /*@__PURE__*/ new WeakMap();
const PlainYearMonth = /*@__PURE__*/ defineTemporalClass(PlainYearMonthBranding, class {
	constructor(isoYear, isoMonth, calendar = void 0, referenceIsoDay) {
		const isoYearInt = toIntegerWithTrunc(isoYear);
		const isoMonthInt = toIntegerWithTrunc(isoMonth);
		const calendarImpl = resolveBasicCalendarArg(calendar);
		const fields = checkIsoYearMonthInBounds(validateIsoDateFields({
			year: isoYearInt,
			month: isoMonthInt,
			day: toIntegerWithTrunc(referenceIsoDay ?? 1)
		}));
		initPlainYearMonth(this, createDateSlots(fields, calendarImpl));
	}
	static from(arg, options = void 0) {
		return createPlainYearMonth(toPlainYearMonthSlots(arg, options));
	}
	static compare(arg0, arg1) {
		return compareIsoDateFields(toPlainYearMonthSlots(arg0), toPlainYearMonthSlots(arg1));
	}
	get calendarId() {
		return getCalendarSlotId(getPlainYearMonthSlots(this).calendar);
	}
	with(mod, options = void 0) {
		return createPlainYearMonth(mergePlainYearMonthFields(getPlainYearMonthSlots(this), validateBag(mod), options));
	}
	add(durationArg, options = void 0) {
		const slots = getPlainYearMonthSlots(this);
		return createPlainYearMonth(createDateSlots(moveYearMonth(0, slots.calendar, slots, toDurationSlots(durationArg), options), slots.calendar));
	}
	subtract(durationArg, options = void 0) {
		const slots = getPlainYearMonthSlots(this);
		return createPlainYearMonth(createDateSlots(moveYearMonth(1, slots.calendar, slots, toDurationSlots(durationArg), options), slots.calendar));
	}
	until(otherArg, options = void 0) {
		const slots = getPlainYearMonthSlots(this);
		const other = toPlainYearMonthSlots(otherArg);
		return createDuration(diffPlainYearMonth(0, getCommonCalendar(slots.calendar, other.calendar), slots, other, options));
	}
	since(otherArg, options = void 0) {
		const slots = getPlainYearMonthSlots(this);
		const other = toPlainYearMonthSlots(otherArg);
		return createDuration(diffPlainYearMonth(1, getCommonCalendar(slots.calendar, other.calendar), slots, other, options));
	}
	equals(otherArg) {
		return plainYearMonthsEqual(getPlainYearMonthSlots(this), toPlainYearMonthSlots(otherArg));
	}
	toPlainDate(bag) {
		return createPlainDate(convertPlainYearMonthToDate(getPlainYearMonthSlots(this).calendar, this, bag));
	}
	toLocaleString(locales = void 0, options = {}) {
		const slots = getPlainYearMonthSlots(this);
		const format = new RawDateTimeFormat(locales, applyPlainFormatTimeZone(transformYearMonthOptions(options)));
		return checkResolvedCalendarCompatible(format, slots, 1), format.format(isoDateToEpochMilli(slots));
	}
	toString(options = void 0) {
		return formatPlainYearMonthIso(getPlainYearMonthSlots(this), options);
	}
	toJSON() {
		return formatPlainYearMonthIso(getPlainYearMonthSlots(this));
	}
	valueOf() {
		return forbiddenValueOf();
	}
}, getPlainYearMonthSlots, yearMonthFieldGetters$1, yearMonthDerivedGetters);
function createPlainYearMonth(slots) {
	return initPlainYearMonth(Object.create(PlainYearMonth.prototype), slots);
}
function getPlainYearMonthSlots(obj) {
	return getPlainYearMonthSlotsIfPresent(obj) || invalidRecordType();
}
function getPlainYearMonthSlotsIfPresent(obj) {
	return plainYearMonthSlotsMap.get(obj);
}
function toPlainYearMonthSlots(arg, options) {
	if (isObjectLike(arg)) {
		const ownSlots = getPlainYearMonthSlotsIfPresent(arg);
		if (ownSlots) return refineOverflowOptions(options), ownSlots;
		return refinePlainYearMonthObjectLike(getCalendarFromBag(arg), arg, options);
	}
	const res = parsePlainYearMonth(arg, resolveBasicCalendarId);
	return refineOverflowOptions(options), res;
}
function initPlainYearMonth(instance, slots) {
	return plainYearMonthSlotsMap.set(instance, slots), attachDebugString(instance), instance;
}
function getTemporalBrandingAndSlots(obj) {
	if (!isObjectLike(obj)) return;
	let slots = getInstantSlotsIfPresent(obj);
	return slots ? [InstantBranding, slots] : (slots = getZonedDateTimeSlotsIfPresent(obj), slots ? [ZonedDateTimeBranding, slots] : (slots = getPlainDateTimeSlotsIfPresent(obj), slots ? [PlainDateTimeBranding, slots] : (slots = getPlainDateSlotsIfPresent(obj), slots ? [PlainDateBranding, slots] : (slots = getPlainTimeSlotsIfPresent(obj), slots ? [PlainTimeBranding, slots] : (slots = getPlainYearMonthSlotsIfPresent(obj), slots ? [PlainYearMonthBranding, slots] : (slots = getPlainMonthDaySlotsIfPresent(obj), slots ? [PlainMonthDayBranding, slots] : (slots = getDurationSlotsIfPresent(obj), slots ? [DurationBranding, slots] : void 0)))))));
}
function validateBag(bag) {
	return (getTemporalBrandingAndSlots(bag) || void 0 !== bag.calendar || void 0 !== bag.timeZone) && throwTypeError("Invalid bag"), bag;
}
const plainTimeSlotsMap = /*@__PURE__*/ new WeakMap();
const PlainTime = /*@__PURE__*/ defineTemporalClass(PlainTimeBranding, class {
	constructor(hour = 0, minute = 0, second = 0, millisecond = 0, microsecond = 0, nanosecond = 0) {
		const fields = validateTimeFields(mapProps(toIntegerWithTrunc, {
			hour,
			minute,
			second,
			millisecond,
			microsecond,
			nanosecond
		}));
		initPlainTime(this, createTimeSlots(fields));
	}
	static from(arg, options = void 0) {
		return createPlainTime(toPlainTimeSlots(arg, options));
	}
	static compare(arg0, arg1) {
		return compareTimeFields(toPlainTimeSlots(arg0), toPlainTimeSlots(arg1));
	}
	with(mod, options = void 0) {
		return createPlainTime(mergePlainTimeFields(getPlainTimeSlots(this), validateBag(mod), options));
	}
	add(durationArg) {
		return createPlainTime(moveTime(getPlainTimeSlots(this), toDurationSlots(durationArg))[0]);
	}
	subtract(durationArg) {
		return createPlainTime(moveTime(getPlainTimeSlots(this), negateDurationFields(toDurationSlots(durationArg)))[0]);
	}
	until(otherArg, options = void 0) {
		return createDuration(diffPlainTimes(0, getPlainTimeSlots(this), toPlainTimeSlots(otherArg), options));
	}
	since(otherArg, options = void 0) {
		return createDuration(diffPlainTimes(1, getPlainTimeSlots(this), toPlainTimeSlots(otherArg), options));
	}
	round(options) {
		const slots = getPlainTimeSlots(this);
		const [smallestUnit, roundingInc, roundingMode] = refineRoundingOptions(options, 5);
		return createPlainTime(roundTimeToNano(slots, computeNanoInc(smallestUnit, roundingInc), roundingMode)[0]);
	}
	equals(other) {
		return plainTimesEqual(getPlainTimeSlots(this), toPlainTimeSlots(other));
	}
	toLocaleString(locales = void 0, options = {}) {
		const slots = getPlainTimeSlots(this);
		return new RawDateTimeFormat(locales, applyPlainFormatTimeZone(transformTimeOptions(options))).format(timeFieldsToMilli(slots));
	}
	toString(options = void 0) {
		return formatPlainTimeIso(getPlainTimeSlots(this), options);
	}
	toJSON() {
		return formatPlainTimeIso(getPlainTimeSlots(this));
	}
	valueOf() {
		return forbiddenValueOf();
	}
}, getPlainTimeSlots, timeGetters);
function createPlainTime(slots) {
	return initPlainTime(Object.create(PlainTime.prototype), slots);
}
function getPlainTimeSlots(obj) {
	return getPlainTimeSlotsIfPresent(obj) || invalidRecordType();
}
function getPlainTimeSlotsIfPresent(obj) {
	return plainTimeSlotsMap.get(obj);
}
function toPlainTimeSlots(arg, options) {
	if (isObjectLike(arg)) {
		const ownSlots = getPlainTimeSlotsIfPresent(arg);
		if (ownSlots) return refineOverflowOptions(options), ownSlots;
		const dateTimeSlots = getPlainDateTimeSlotsIfPresent(arg);
		if (dateTimeSlots) return refineOverflowOptions(options), createTimeSlots(dateTimeSlots);
		const zonedDateTimeSlots = getZonedDateTimeSlotsIfPresent(arg);
		return zonedDateTimeSlots ? (refineOverflowOptions(options), zonedDateTimeToPlainTime(zonedDateTimeSlots)) : refinePlainTimeObjectLike(arg, options);
	}
	const timeSlots = parsePlainTime(arg);
	return refineOverflowOptions(options), timeSlots;
}
function optionalToPlainTimeFields(timeArg) {
	return void 0 === timeArg ? void 0 : toPlainTimeSlots(timeArg);
}
function initPlainTime(instance, slots) {
	return plainTimeSlotsMap.set(instance, slots), attachDebugString(instance), instance;
}
const plainDateTimeSlotsMap = /*@__PURE__*/ new WeakMap();
const PlainDateTime = /*@__PURE__*/ defineTemporalClass(PlainDateTimeBranding, class {
	constructor(isoYear, isoMonth, isoDay, hour = 0, minute = 0, second = 0, millisecond = 0, microsecond = 0, nanosecond = 0, calendar = void 0) {
		const fields = checkIsoDateTimeInBounds(validateIsoDateTimeFields(mapProps(toIntegerWithTrunc, {
			year: isoYear,
			month: isoMonth,
			day: isoDay,
			hour,
			minute,
			second,
			millisecond,
			microsecond,
			nanosecond
		})));
		const calendarImpl = resolveBasicCalendarArg(calendar);
		initPlainDateTime(this, createDateTimeSlots(fields, calendarImpl));
	}
	static from(arg, options = void 0) {
		return createPlainDateTime(toPlainDateTimeSlots(arg, options));
	}
	static compare(arg0, arg1) {
		return compareIsoDateTimeFields(toPlainDateTimeSlots(arg0), toPlainDateTimeSlots(arg1));
	}
	get calendarId() {
		return getCalendarSlotId(getPlainDateTimeSlots(this).calendar);
	}
	with(mod, options = void 0) {
		return createPlainDateTime(mergePlainDateTimeFields(getPlainDateTimeSlots(this), validateBag(mod), options));
	}
	withCalendar(calendarArg) {
		return createPlainDateTime(createDateTimeSlots(getPlainDateTimeSlots(this), refineCalendarArg(calendarArg)));
	}
	withPlainTime(plainTimeArg = void 0) {
		const slots = getPlainDateTimeSlots(this);
		return createPlainDateTime(createPlainDateTimeFromRefinedFields(slots, optionalToPlainTimeFields(plainTimeArg), slots.calendar));
	}
	add(durationArg, options = void 0) {
		const slots = getPlainDateTimeSlots(this);
		return createPlainDateTime(createDateTimeSlots(moveDateTime(slots.calendar, slots, toDurationSlots(durationArg), options), slots.calendar));
	}
	subtract(durationArg, options = void 0) {
		const slots = getPlainDateTimeSlots(this);
		return createPlainDateTime(createDateTimeSlots(moveDateTime(slots.calendar, slots, negateDurationFields(toDurationSlots(durationArg)), options), slots.calendar));
	}
	until(otherArg, options = void 0) {
		const slots = getPlainDateTimeSlots(this);
		const other = toPlainDateTimeSlots(otherArg);
		return createDuration(diffPlainDateTimes(0, getCommonCalendar(slots.calendar, other.calendar), slots, other, options));
	}
	since(otherArg, options = void 0) {
		const slots = getPlainDateTimeSlots(this);
		const other = toPlainDateTimeSlots(otherArg);
		return createDuration(diffPlainDateTimes(1, getCommonCalendar(slots.calendar, other.calendar), slots, other, options));
	}
	round(options) {
		const slots = getPlainDateTimeSlots(this);
		const [smallestUnit, roundingInc, roundingMode] = refineRoundingOptions(options);
		return createPlainDateTime(createDateTimeSlots(roundDateTimeToNano(slots, computeNanoInc(smallestUnit, roundingInc), roundingMode), slots.calendar));
	}
	equals(otherArg) {
		return plainDateTimesEqual(getPlainDateTimeSlots(this), toPlainDateTimeSlots(otherArg));
	}
	toZonedDateTime(timeZoneArg, options = void 0) {
		return createZonedDateTime(plainDateTimeToZonedDateTime(getPlainDateTimeSlots(this), queryTimeZone(refineTimeZoneArg(timeZoneArg)), options));
	}
	toPlainDate() {
		const slots = getPlainDateTimeSlots(this);
		return createPlainDate(createDateSlots(slots, slots.calendar));
	}
	toPlainTime() {
		return createPlainTime(createTimeSlots(getPlainDateTimeSlots(this)));
	}
	toLocaleString(locales = void 0, options = {}) {
		const slots = getPlainDateTimeSlots(this);
		const format = new RawDateTimeFormat(locales, applyPlainFormatTimeZone(transformDateTimeOptions(options)));
		return checkResolvedCalendarCompatible(format, slots), format.format(isoDateTimeToEpochMilli(slots));
	}
	toString(options = void 0) {
		return formatPlainDateTimeIso(getPlainDateTimeSlots(this), options);
	}
	toJSON() {
		return formatPlainDateTimeIso(getPlainDateTimeSlots(this));
	}
	valueOf() {
		return forbiddenValueOf();
	}
}, getPlainDateTimeSlots, dateFieldGetters$1, dateDerivedGetters, timeGetters);
function createPlainDateTime(slots) {
	return initPlainDateTime(Object.create(PlainDateTime.prototype), slots);
}
function getPlainDateTimeSlots(obj) {
	return getPlainDateTimeSlotsIfPresent(obj) || invalidRecordType();
}
function getPlainDateTimeSlotsIfPresent(obj) {
	return plainDateTimeSlotsMap.get(obj);
}
function toPlainDateTimeSlots(arg, options) {
	if (isObjectLike(arg)) {
		const ownSlots = getPlainDateTimeSlotsIfPresent(arg);
		if (ownSlots) return refineOverflowOptions(options), ownSlots;
		const dateSlots = getPlainDateSlotsIfPresent(arg);
		if (dateSlots) return refineOverflowOptions(options), createDateTimeSlots(combineDateAndTime(dateSlots, timeFieldDefaults), dateSlots.calendar);
		const zonedDateTimeSlots = getZonedDateTimeSlotsIfPresent(arg);
		if (zonedDateTimeSlots) return refineOverflowOptions(options), zonedDateTimeToPlainDateTime(zonedDateTimeSlots);
		return refinePlainDateTimeObjectLike(getCalendarFromBag(arg), arg, options);
	}
	const res = parsePlainDateTime(arg, resolveBasicCalendarId);
	return refineOverflowOptions(options), res;
}
function initPlainDateTime(instance, slots) {
	return plainDateTimeSlotsMap.set(instance, slots), attachDebugString(instance), instance;
}
const plainDateSlotsMap = /*@__PURE__*/ new WeakMap();
const PlainDate = /*@__PURE__*/ defineTemporalClass(PlainDateBranding, class {
	constructor(isoYear, isoMonth, isoDay, calendar = void 0) {
		const fields = checkIsoDateInBounds(validateIsoDateFields(mapProps(toIntegerWithTrunc, {
			year: isoYear,
			month: isoMonth,
			day: isoDay
		})));
		const calendarImpl = resolveBasicCalendarArg(calendar);
		initPlainDate(this, createDateSlots(fields, calendarImpl));
	}
	static from(arg, options = void 0) {
		return createPlainDate(toPlainDateSlots(arg, options));
	}
	static compare(arg0, arg1) {
		return compareIsoDateFields(toPlainDateSlots(arg0), toPlainDateSlots(arg1));
	}
	get calendarId() {
		return getCalendarSlotId(getPlainDateSlots(this).calendar);
	}
	with(mod, options = void 0) {
		return createPlainDate(mergePlainDateFields(getPlainDateSlots(this), validateBag(mod), options));
	}
	withCalendar(calendarArg) {
		return createPlainDate(createDateSlots(getPlainDateSlots(this), refineCalendarArg(calendarArg)));
	}
	add(durationArg, options = void 0) {
		const slots = getPlainDateSlots(this);
		return createPlainDate(createDateSlots(moveDate(slots.calendar, slots, toDurationSlots(durationArg), options), slots.calendar));
	}
	subtract(durationArg, options = void 0) {
		const slots = getPlainDateSlots(this);
		return createPlainDate(createDateSlots(moveDate(slots.calendar, slots, negateDurationFields(toDurationSlots(durationArg)), options), slots.calendar));
	}
	until(otherArg, options = void 0) {
		const slots = getPlainDateSlots(this);
		const other = toPlainDateSlots(otherArg);
		return createDuration(diffPlainDates(0, getCommonCalendar(slots.calendar, other.calendar), slots, other, options));
	}
	since(otherArg, options = void 0) {
		const slots = getPlainDateSlots(this);
		const other = toPlainDateSlots(otherArg);
		return createDuration(diffPlainDates(1, getCommonCalendar(slots.calendar, other.calendar), slots, other, options));
	}
	equals(otherArg) {
		return plainDatesEqual(getPlainDateSlots(this), toPlainDateSlots(otherArg));
	}
	toZonedDateTime(options) {
		const optionsObj = isObjectLike(options) ? {
			timeZone: options.timeZone,
			plainTime: options.plainTime
		} : { timeZone: options };
		return createZonedDateTime(plainDateToZonedDateTime(refineTimeZoneArg, toPlainTimeSlots, getPlainDateSlots(this), optionsObj));
	}
	toPlainDateTime(plainTimeArg = void 0) {
		const slots = getPlainDateSlots(this);
		return createPlainDateTime(createPlainDateTimeFromRefinedFields(slots, optionalToPlainTimeFields(plainTimeArg), slots.calendar));
	}
	toPlainYearMonth() {
		return createPlainYearMonth(convertToPlainYearMonth(getPlainDateSlots(this).calendar, this));
	}
	toPlainMonthDay() {
		return createPlainMonthDay(convertToPlainMonthDay(getPlainDateSlots(this).calendar, this));
	}
	toLocaleString(locales = void 0, options = {}) {
		const slots = getPlainDateSlots(this);
		const format = new RawDateTimeFormat(locales, applyPlainFormatTimeZone(transformDateOptions(options)));
		return checkResolvedCalendarCompatible(format, slots), format.format(isoDateToEpochMilli(slots));
	}
	toString(options = void 0) {
		return formatPlainDateIso(getPlainDateSlots(this), options);
	}
	toJSON() {
		return formatPlainDateIso(getPlainDateSlots(this));
	}
	valueOf() {
		return forbiddenValueOf();
	}
}, getPlainDateSlots, dateFieldGetters$1, dateDerivedGetters);
function createPlainDate(slots) {
	return initPlainDate(Object.create(PlainDate.prototype), slots);
}
function getPlainDateSlots(obj) {
	return getPlainDateSlotsIfPresent(obj) || invalidRecordType();
}
function getPlainDateSlotsIfPresent(obj) {
	return plainDateSlotsMap.get(obj);
}
function toPlainDateSlots(arg, options) {
	if (isObjectLike(arg)) {
		const ownSlots = getPlainDateSlotsIfPresent(arg);
		if (ownSlots) return refineOverflowOptions(options), ownSlots;
		const dateTimeSlots = getPlainDateTimeSlotsIfPresent(arg);
		if (dateTimeSlots) return refineOverflowOptions(options), createDateSlots(dateTimeSlots, dateTimeSlots.calendar);
		const zonedDateTimeSlots = getZonedDateTimeSlotsIfPresent(arg);
		if (zonedDateTimeSlots) return refineOverflowOptions(options), zonedDateTimeToPlainDate(zonedDateTimeSlots);
		return refinePlainDateObjectLike(getCalendarFromBag(arg), arg, options);
	}
	const res = parsePlainDate(arg, resolveBasicCalendarId);
	return refineOverflowOptions(options), res;
}
function initPlainDate(instance, slots) {
	return plainDateSlotsMap.set(instance, slots), attachDebugString(instance), instance;
}
function getCalendarFromBag(bag) {
	const calendar = extractCalendarFromBag(bag);
	return void 0 === calendar ? void 0 : calendar;
}
function extractCalendarFromBag(bag) {
	const { calendar: calendarArg } = bag;
	if (void 0 !== calendarArg) return refineCalendarArg(calendarArg);
}
function refineCalendarArg(arg) {
	if (isObjectLike(arg)) {
		const slots = getPlainDateSlotsIfPresent(arg) || getPlainDateTimeSlotsIfPresent(arg) || getZonedDateTimeSlotsIfPresent(arg) || getPlainMonthDaySlotsIfPresent(arg) || getPlainYearMonthSlotsIfPresent(arg);
		return slots || throwTypeError(invalidCalendar(arg)), slots.calendar;
	}
	return ((arg) => resolveBasicCalendarId(parseCalendarId(requireString(arg))))(arg);
}
const durationSlotsMap = /*@__PURE__*/ new WeakMap();
const Duration = /*@__PURE__*/ defineTemporalClass(DurationBranding, class {
	constructor(years = 0, months = 0, weeks = 0, days = 0, hours = 0, minutes = 0, seconds = 0, milliseconds = 0, microseconds = 0, nanoseconds = 0) {
		const fields = validateDurationFields(mapProps(toStrictInteger, {
			years,
			months,
			weeks,
			days,
			hours,
			minutes,
			seconds,
			milliseconds,
			microseconds,
			nanoseconds
		}));
		initDuration(this, createDurationSlots(fields));
	}
	static from(arg) {
		return createDuration(toDurationSlots(arg));
	}
	static compare(durationArg0, durationArg1, options = void 0) {
		return compareDurations(refinePublicRelativeTo, toDurationSlots(durationArg0), toDurationSlots(durationArg1), options);
	}
	get sign() {
		return getDurationSlots(this).sign;
	}
	get blank() {
		return !getDurationSlots(this).sign;
	}
	with(mod) {
		return createDuration(mergeDurationFields(getDurationSlots(this), mod));
	}
	negated() {
		return createDuration(negateDuration(getDurationSlots(this)));
	}
	abs() {
		return createDuration(absDuration(getDurationSlots(this)));
	}
	add(otherArg, options = void 0) {
		return createDuration(addDurations(refinePublicRelativeTo, 0, getDurationSlots(this), toDurationSlots(otherArg), options));
	}
	subtract(otherArg, options = void 0) {
		return createDuration(addDurations(refinePublicRelativeTo, 1, getDurationSlots(this), toDurationSlots(otherArg), options));
	}
	round(roundTo) {
		return createDuration(roundDuration(refinePublicRelativeTo, getDurationSlots(this), roundTo));
	}
	total(totalOf) {
		return totalDuration(refinePublicRelativeTo, getDurationSlots(this), totalOf);
	}
	toLocaleString(locales = void 0, options) {
		const slots = getDurationSlots(this);
		return Intl.DurationFormat ? new Intl.DurationFormat(locales, options).format(slots) : formatDurationIso(slots, options);
	}
	toString(options = void 0) {
		return formatDurationIso(getDurationSlots(this), options);
	}
	toJSON() {
		return formatDurationIso(getDurationSlots(this));
	}
	valueOf() {
		return forbiddenValueOf();
	}
}, getDurationSlots, durationGetters);
function createDuration(slots) {
	return initDuration(Object.create(Duration.prototype), slots);
}
function getDurationSlots(obj) {
	return getDurationSlotsIfPresent(obj) || invalidRecordType();
}
function getDurationSlotsIfPresent(obj) {
	return durationSlotsMap.get(obj);
}
function toDurationSlots(arg) {
	if (isObjectLike(arg)) return getDurationSlotsIfPresent(arg) || refineDurationObjectLike(arg);
	return parseDuration(arg);
}
function refinePublicRelativeTo(relativeTo) {
	if (void 0 !== relativeTo) {
		if (isObjectLike(relativeTo)) {
			const zonedDateTimeSlots = getZonedDateTimeSlotsIfPresent(relativeTo);
			if (zonedDateTimeSlots) return zonedDateTimeSlots;
			const dateSlots = getPlainDateSlotsIfPresent(relativeTo);
			if (dateSlots) return dateSlots;
			const dateTimeSlots = getPlainDateTimeSlotsIfPresent(relativeTo);
			if (dateTimeSlots) return createDateSlots(dateTimeSlots, dateTimeSlots.calendar);
			return refineMaybeZonedDateTimeObjectLike(refineTimeZoneArg, getCalendarFromBag(relativeTo), relativeTo);
		}
		return parseRelativeToSlots(relativeTo, resolveBasicCalendarId);
	}
}
function initDuration(instance, slots) {
	return durationSlotsMap.set(instance, slots), attachDebugString(instance), instance;
}
const Now = /*@__PURE__*/ Object.defineProperties({}, {
	...createStringTagDescriptors("Temporal.Now"),
	...createPropDescriptors({
		timeZoneId() {
			return getCurrentTimeZoneId();
		},
		instant() {
			return createInstant(createEpochNanoSlots(getCurrentEpochNano()));
		},
		zonedDateTimeISO(timeZoneArg = getCurrentTimeZoneId()) {
			const timeZone = queryTimeZone(refineTimeZoneArg(timeZoneArg));
			return createZonedDateTime(createZonedEpochNanoSlots(getCurrentEpochNano(), timeZone));
		},
		plainDateTimeISO(timeZoneArg = getCurrentTimeZoneId()) {
			return createPlainDateTime(createDateTimeSlots(getCurrentIsoDateTime(queryTimeZone(refineTimeZoneArg(timeZoneArg)))));
		},
		plainDateISO(timeZoneArg = getCurrentTimeZoneId()) {
			return createPlainDate(createDateSlots(getCurrentIsoDateTime(queryTimeZone(refineTimeZoneArg(timeZoneArg)))));
		},
		plainTimeISO(timeZoneArg = getCurrentTimeZoneId()) {
			return createPlainTime(createTimeSlots(getCurrentIsoDateTime(queryTimeZone(refineTimeZoneArg(timeZoneArg)))));
		}
	})
});
const Temporal$1 = /*@__PURE__*/ Object.defineProperties({}, {
	...createStringTagDescriptors("Temporal"),
	...createPropDescriptors({
		PlainYearMonth,
		PlainMonthDay,
		PlainDate,
		PlainTime,
		PlainDateTime,
		ZonedDateTime,
		Instant,
		Duration,
		Now
	})
});
//#endregion
//#region ../../node_modules/temporal-polyfill/index.js
const Temporal = NativeTemporal || Temporal$1;
NativeTemporal && Date.prototype.toTemporalInstant;
//#endregion
//#region ../../node_modules/@tanstack/store/dist/alien.js
/* @__NO_SIDE_EFFECTS__ */
function createReactiveSystem({ update, notify, unwatched }) {
	return {
		link,
		unlink,
		propagate,
		checkDirty,
		shallowPropagate
	};
	function link(dep, sub, version) {
		const prevDep = sub.depsTail;
		if (prevDep !== void 0 && prevDep.dep === dep) return;
		const nextDep = prevDep !== void 0 ? prevDep.nextDep : sub.deps;
		if (nextDep !== void 0 && nextDep.dep === dep) {
			nextDep.version = version;
			sub.depsTail = nextDep;
			return;
		}
		const prevSub = dep.subsTail;
		if (prevSub !== void 0 && prevSub.version === version && prevSub.sub === sub) return;
		const newLink = sub.depsTail = dep.subsTail = {
			version,
			dep,
			sub,
			prevDep,
			nextDep,
			prevSub,
			nextSub: void 0
		};
		if (nextDep !== void 0) nextDep.prevDep = newLink;
		if (prevDep !== void 0) prevDep.nextDep = newLink;
		else sub.deps = newLink;
		if (prevSub !== void 0) prevSub.nextSub = newLink;
		else dep.subs = newLink;
	}
	function unlink(link, sub = link.sub) {
		const dep = link.dep;
		const prevDep = link.prevDep;
		const nextDep = link.nextDep;
		const nextSub = link.nextSub;
		const prevSub = link.prevSub;
		if (nextDep !== void 0) nextDep.prevDep = prevDep;
		else sub.depsTail = prevDep;
		if (prevDep !== void 0) prevDep.nextDep = nextDep;
		else sub.deps = nextDep;
		if (nextSub !== void 0) nextSub.prevSub = prevSub;
		else dep.subsTail = prevSub;
		if (prevSub !== void 0) prevSub.nextSub = nextSub;
		else if ((dep.subs = nextSub) === void 0) unwatched(dep);
		return nextDep;
	}
	function propagate(link) {
		let next = link.nextSub;
		let stack;
		top: do {
			const sub = link.sub;
			let flags = sub.flags;
			if (!(flags & 60)) sub.flags = flags | 32;
			else if (!(flags & 12)) flags = 0;
			else if (!(flags & 4)) sub.flags = flags & -9 | 32;
			else if (!(flags & 48) && isValidLink(link, sub)) {
				sub.flags = flags | 40;
				flags &= 1;
			} else flags = 0;
			if (flags & 2) notify(sub);
			if (flags & 1) {
				const subSubs = sub.subs;
				if (subSubs !== void 0) {
					const nextSub = (link = subSubs).nextSub;
					if (nextSub !== void 0) {
						stack = {
							value: next,
							prev: stack
						};
						next = nextSub;
					}
					continue;
				}
			}
			if ((link = next) !== void 0) {
				next = link.nextSub;
				continue;
			}
			while (stack !== void 0) {
				link = stack.value;
				stack = stack.prev;
				if (link !== void 0) {
					next = link.nextSub;
					continue top;
				}
			}
			break;
		} while (true);
	}
	function checkDirty(link, sub) {
		let stack;
		let checkDepth = 0;
		let dirty = false;
		top: do {
			const dep = link.dep;
			const flags = dep.flags;
			if (sub.flags & 16) dirty = true;
			else if ((flags & 17) === 17) {
				if (update(dep)) {
					const subs = dep.subs;
					if (subs.nextSub !== void 0) shallowPropagate(subs);
					dirty = true;
				}
			} else if ((flags & 33) === 33) {
				if (link.nextSub !== void 0 || link.prevSub !== void 0) stack = {
					value: link,
					prev: stack
				};
				link = dep.deps;
				sub = dep;
				++checkDepth;
				continue;
			}
			if (!dirty) {
				const nextDep = link.nextDep;
				if (nextDep !== void 0) {
					link = nextDep;
					continue;
				}
			}
			while (checkDepth--) {
				const firstSub = sub.subs;
				const hasMultipleSubs = firstSub.nextSub !== void 0;
				if (hasMultipleSubs) {
					link = stack.value;
					stack = stack.prev;
				} else link = firstSub;
				if (dirty) {
					if (update(sub)) {
						if (hasMultipleSubs) shallowPropagate(firstSub);
						sub = link.sub;
						continue;
					}
					dirty = false;
				} else sub.flags &= -33;
				sub = link.sub;
				const nextDep = link.nextDep;
				if (nextDep !== void 0) {
					link = nextDep;
					continue top;
				}
			}
			return dirty;
		} while (true);
	}
	function shallowPropagate(link) {
		do {
			const sub = link.sub;
			const flags = sub.flags;
			if ((flags & 48) === 32) {
				sub.flags = flags | 16;
				if ((flags & 6) === 2) notify(sub);
			}
		} while ((link = link.nextSub) !== void 0);
	}
	function isValidLink(checkLink, sub) {
		let link = sub.depsTail;
		while (link !== void 0) {
			if (link === checkLink) return true;
			link = link.prevDep;
		}
		return false;
	}
}
//#endregion
//#region ../../node_modules/@tanstack/store/dist/atom.js
function toObserver(nextHandler, errorHandler, completionHandler) {
	const isObserver = typeof nextHandler === "object";
	const self = isObserver ? nextHandler : void 0;
	return {
		next: (isObserver ? nextHandler.next : nextHandler)?.bind(self),
		error: (isObserver ? nextHandler.error : errorHandler)?.bind(self),
		complete: (isObserver ? nextHandler.complete : completionHandler)?.bind(self)
	};
}
const queuedEffects = [];
let cycle = 0;
const { link, unlink, propagate, checkDirty, shallowPropagate } = /* @__PURE__ */ createReactiveSystem({
	update(atom) {
		return atom._update();
	},
	notify(effect) {
		queuedEffects[queuedEffectsLength++] = effect;
		effect.flags &= -3;
	},
	unwatched(atom) {
		if (atom.depsTail !== void 0) {
			atom.depsTail = void 0;
			atom.flags = 17;
			purgeDeps(atom);
		}
	}
});
let notifyIndex = 0;
let queuedEffectsLength = 0;
let activeSub;
function purgeDeps(sub) {
	const depsTail = sub.depsTail;
	let dep = depsTail !== void 0 ? depsTail.nextDep : sub.deps;
	while (dep !== void 0) dep = unlink(dep, sub);
}
function flush() {
	while (notifyIndex < queuedEffectsLength) {
		const effect = queuedEffects[notifyIndex];
		queuedEffects[notifyIndex++] = void 0;
		effect.notify();
	}
	notifyIndex = 0;
	queuedEffectsLength = 0;
}
function createAtom(valueOrFn, options) {
	const isComputed = typeof valueOrFn === "function";
	const getter = valueOrFn;
	const atom = {
		_snapshot: isComputed ? void 0 : valueOrFn,
		subs: void 0,
		subsTail: void 0,
		deps: void 0,
		depsTail: void 0,
		flags: isComputed ? 0 : 1,
		get() {
			if (activeSub !== void 0) link(atom, activeSub, cycle);
			return atom._snapshot;
		},
		subscribe(observerOrFn) {
			const obs = toObserver(observerOrFn);
			const observed = { current: false };
			const e = effect(() => {
				atom.get();
				if (!observed.current) observed.current = true;
				else obs.next?.(atom._snapshot);
			});
			return { unsubscribe: () => {
				e.stop();
			} };
		},
		_update(getValue) {
			const prevSub = activeSub;
			const compare = options?.compare ?? Object.is;
			if (isComputed) {
				activeSub = atom;
				++cycle;
				atom.depsTail = void 0;
			} else if (getValue === void 0) return false;
			if (isComputed) atom.flags = 5;
			try {
				const oldValue = atom._snapshot;
				const newValue = typeof getValue === "function" ? getValue(oldValue) : getValue === void 0 && isComputed ? getter(oldValue) : getValue;
				if (oldValue === void 0 || !compare(oldValue, newValue)) {
					atom._snapshot = newValue;
					return true;
				}
				return false;
			} finally {
				activeSub = prevSub;
				if (isComputed) atom.flags &= -5;
				purgeDeps(atom);
			}
		}
	};
	if (isComputed) {
		atom.flags = 17;
		atom.get = function() {
			const flags = atom.flags;
			if (flags & 16 || flags & 32 && checkDirty(atom.deps, atom)) {
				if (atom._update()) {
					const subs = atom.subs;
					if (subs !== void 0) shallowPropagate(subs);
				}
			} else if (flags & 32) atom.flags = flags & -33;
			if (activeSub !== void 0) link(atom, activeSub, cycle);
			return atom._snapshot;
		};
	} else atom.set = function(valueOrFn) {
		if (atom._update(valueOrFn)) {
			const subs = atom.subs;
			if (subs !== void 0) {
				propagate(subs);
				shallowPropagate(subs);
				flush();
			}
		}
	};
	return atom;
}
function effect(fn) {
	const run = () => {
		const prevSub = activeSub;
		activeSub = effectObj;
		++cycle;
		effectObj.depsTail = void 0;
		effectObj.flags = 6;
		try {
			return fn();
		} finally {
			activeSub = prevSub;
			effectObj.flags &= -5;
			purgeDeps(effectObj);
		}
	};
	const effectObj = {
		deps: void 0,
		depsTail: void 0,
		subs: void 0,
		subsTail: void 0,
		flags: 6,
		notify() {
			const flags = this.flags;
			if (flags & 16 || flags & 32 && checkDirty(this.deps, this)) run();
			else this.flags = 2;
		},
		stop() {
			this.flags = 0;
			this.depsTail = void 0;
			purgeDeps(this);
		}
	};
	run();
	return effectObj;
}
//#endregion
//#region ../../node_modules/@tanstack/store/dist/store.js
var Store = class {
	constructor(valueOrFn, actionsFactory) {
		this.atom = createAtom(valueOrFn);
		this.get = this.get.bind(this);
		this.setState = this.setState.bind(this);
		this.subscribe = this.subscribe.bind(this);
		if (actionsFactory) this.actions = actionsFactory(this);
	}
	setState(updater) {
		this.atom.set(updater);
	}
	get state() {
		return this.atom.get();
	}
	get() {
		return this.state;
	}
	subscribe(observerOrFn) {
		return this.atom.subscribe(toObserver(observerOrFn));
	}
};
//#endregion
//#region ../scheduler-core/dist/js/index.mjs
/*!
* CoreUI PRO scheduler-core v0.1.0-rc.0 (https://coreui.io)
* Copyright 2026 The CoreUI Team (https://github.com/orgs/coreui/people)
* License (https://coreui.io/pro/license/)
* Bundles rrule (BSD-3-Clause) — see THIRD-PARTY-NOTICES.md in this package
*/
function layoutColumn(items, options = {}) {
	const { expandToFit = false, minEventMinutes = 0 } = options;
	if (items.length === 0) return [];
	const sorted = items.toSorted((a, b) => a.startMinutes - b.startMinutes || b.endMinutes - b.startMinutes - (a.endMinutes - a.startMinutes) || (a.key < b.key ? -1 : 1));
	const boxes = [];
	let group = [];
	let groupEnd = Number.NEGATIVE_INFINITY;
	const flush = () => {
		if (group.length > 0) {
			boxes.push(...layoutGroup(group, expandToFit));
			group = [];
		}
	};
	for (const entry of sorted) {
		const paddedEnd = Math.max(entry.endMinutes, entry.startMinutes + minEventMinutes);
		if (entry.startMinutes >= groupEnd) {
			flush();
			groupEnd = paddedEnd;
		} else groupEnd = Math.max(groupEnd, paddedEnd);
		group.push({
			...entry,
			paddedEnd,
			track: 0
		});
	}
	flush();
	return boxes;
}
function layoutGroup(group, expandToFit) {
	const trackEnds = [];
	const trackItems = [];
	for (const entry of group) {
		let track = trackEnds.findIndex((end) => end <= entry.startMinutes);
		if (track === -1) {
			track = trackEnds.length;
			trackEnds.push(0);
			trackItems.push([]);
		}
		entry.track = track;
		trackEnds[track] = entry.paddedEnd;
		trackItems[track].push(entry);
	}
	const trackCount = trackEnds.length;
	const trackWidth = 100 / trackCount;
	return group.map((entry) => {
		let span = 1;
		if (expandToFit) while (entry.track + span < trackCount && trackItems[entry.track + span].every((other) => other.paddedEnd <= entry.startMinutes || other.startMinutes >= entry.paddedEnd)) span += 1;
		return {
			key: entry.key,
			startMinutes: entry.startMinutes,
			endMinutes: entry.endMinutes,
			top: entry.startMinutes,
			height: entry.paddedEnd - entry.startMinutes,
			leftPct: entry.track * trackWidth,
			widthPct: trackWidth * span,
			track: entry.track,
			trackCount
		};
	});
}
/**
* --------------------------------------------------------------------------
* CoreUI PRO scheduler-core model/time.ts
* License (https://coreui.io/pro/license/)
* --------------------------------------------------------------------------
* The ONLY ISO/`Date` ⇄ Temporal boundary in the core. Everything past this
* file speaks Temporal; ISO strings and `Date` instances are converted here,
* once, into the scheduler instance's time zone.
*/
const OFFSET_OR_ZULU = /(?:z|[+-]\d{2}(?::?\d{2})?)$/i;
const DATE_ONLY = /^\d{4}-\d{2}-\d{2}$/;
const MINUTES_IN_DAY = 1440;
function toZoned(value, timeZone) {
	if (value instanceof Date) return Temporal.Instant.fromEpochMilliseconds(value.getTime()).toZonedDateTimeISO(timeZone);
	if (DATE_ONLY.test(value)) return Temporal.PlainDate.from(value).toZonedDateTime({ timeZone });
	if (OFFSET_OR_ZULU.test(value)) return Temporal.Instant.from(value).toZonedDateTimeISO(timeZone);
	return Temporal.PlainDateTime.from(value).toZonedDateTime(timeZone, { disambiguation: "compatible" });
}
function toPlainDate(value, timeZone) {
	if (typeof value === "string" && DATE_ONLY.test(value)) return Temporal.PlainDate.from(value);
	return toZoned(value, timeZone).toPlainDate();
}
/** ISO 8601 with UTC offset, without the IANA suffix — the wire format of every payload. */
function toISO(value) {
	return value.toString({ timeZoneName: "never" });
}
function startOfWeek(date, firstDayOfWeek = 1) {
	return date.subtract({ days: (date.dayOfWeek - firstDayOfWeek + 7) % 7 });
}
/** Wall-clock minutes since the start of the value's day. */
function minutesInDay(value) {
	return value.hour * 60 + value.minute;
}
/**
* The template duration between two instants of the same event, expressed in
* exact time units — RFC 5545 semantics: adding it to a zoned start crosses a
* DST transition without stretching the event's real length.
*/
function exactDuration(start, end) {
	return start.toInstant().until(end.toInstant(), { largestUnit: "hour" });
}
function compare(a, b) {
	return Temporal.ZonedDateTime.compare(a, b);
}
function overlaps(startA, endA, window) {
	return compare(startA, window.end) < 0 && compare(endA, window.start) > 0;
}
function systemTimeZone() {
	return Temporal.Now.timeZoneId();
}
function todayISO(timeZone) {
	return Temporal.Now.zonedDateTimeISO(timeZone).toPlainDate().toString();
}
/**
* Clips a timed occurrence into per-day segments over the visible days. The
* grid is a wall-clock 24 h surface, so segment minutes are wall-clock; a
* segment running to the end of a day always closes at 1440.
*/
function segmentIntoDays(occurrence, days, timeZone) {
	const segments = [];
	for (const [dayIndex, day] of days.entries()) {
		const dayStart = day.toZonedDateTime({ timeZone });
		const dayEnd = day.add({ days: 1 }).toZonedDateTime({ timeZone });
		if (compare(occurrence.start, dayEnd) >= 0 || compare(occurrence.end, dayStart) <= 0) continue;
		const clippedStart = compare(occurrence.start, dayStart) > 0 ? occurrence.start : dayStart;
		const clippedEnd = compare(occurrence.end, dayEnd) < 0 ? occurrence.end : dayEnd;
		segments.push({
			dayIndex,
			startMinutes: compare(clippedStart, dayStart) === 0 ? 0 : minutesInDay(clippedStart),
			endMinutes: compare(clippedEnd, dayEnd) === 0 ? MINUTES_IN_DAY : minutesInDay(clippedEnd)
		});
	}
	return segments;
}
/**
* --------------------------------------------------------------------------
* CoreUI PRO scheduler-core interaction/machine.ts
* License (https://coreui.io/pro/license/)
* --------------------------------------------------------------------------
* Drag/select state machine. All spatial reasoning happens in time-space
* (column index + wall-clock minutes); pixels are used only for the press
* threshold. Pointer and keyboard drive the same transitions, so preview,
* commit, and cancel semantics are identical for both by construction.
*/
const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
const nudgeMinutes = (minutes, step) => minutes === 0 ? 0 : Math.sign(minutes) * Math.max(Math.abs(minutes), step);
function createInteractionMachine(options = {}) {
	const { snap = 15, dayMinutes = MINUTES_IN_DAY, minMinutes = 0, minDurationMinutes = snap, pressThresholdPx = 3, onChange, onCommit, onClick } = options;
	let columnCount = options.columnCount ?? Number.POSITIVE_INFINITY;
	let state = { type: "idle" };
	let press = null;
	let drag = null;
	const snapRound = (minutes, step = snap) => Math.round(minutes / step) * step;
	const snapFloor = (minutes) => Math.floor(minutes / snap) * snap;
	const snapCeil = (minutes) => Math.ceil(minutes / snap) * snap;
	const clampColumn = (column) => clamp(column, 0, columnCount - 1);
	const setState = (next) => {
		state = next;
		onChange?.(next);
	};
	const reset = () => {
		press = null;
		drag = null;
		setState({ type: "idle" });
	};
	const movePreview = (origin, deltaColumns, rawDeltaMinutes, step) => {
		const duration = origin.endMinutes - origin.startMinutes;
		const startMinutes = clamp(origin.startMinutes + snapRound(rawDeltaMinutes, step), minMinutes, dayMinutes - duration);
		return {
			column: clampColumn(origin.column + deltaColumns),
			startMinutes,
			endMinutes: startMinutes + duration
		};
	};
	const resizePreview = (origin, handle, rawDeltaMinutes, step) => {
		const minDuration = Math.max(minDurationMinutes, step);
		if (handle === "end") {
			const endMinutes = clamp(snapRound(origin.endMinutes + rawDeltaMinutes, step), origin.startMinutes + minDuration, dayMinutes);
			return {
				column: origin.column,
				startMinutes: origin.startMinutes,
				endMinutes
			};
		}
		const startMinutes = clamp(snapRound(origin.startMinutes + rawDeltaMinutes, step), minMinutes, origin.endMinutes - minDuration);
		return {
			column: origin.column,
			startMinutes,
			endMinutes: origin.endMinutes
		};
	};
	const selectionRange = (anchor, focus) => {
		const forward = anchor.column < focus.column || anchor.column === focus.column && anchor.minutes <= focus.minutes;
		const from = forward ? anchor : focus;
		const to = forward ? focus : anchor;
		const startMinutes = snapFloor(from.minutes);
		let endMinutes = snapCeil(to.minutes);
		if (from.column === to.column && endMinutes <= startMinutes) endMinutes = startMinutes + snap;
		return {
			startColumn: clampColumn(from.column),
			startMinutes: clamp(startMinutes, minMinutes, dayMinutes - snap),
			endColumn: clampColumn(to.column),
			endMinutes: clamp(endMinutes, minMinutes + snap, dayMinutes)
		};
	};
	const updateDrag = (pointer) => {
		if (!press) return;
		const rawDeltaMinutes = pointer.point.minutes - press.pointer.point.minutes;
		const deltaColumns = pointer.point.column - press.pointer.point.column;
		if (drag) {
			if (drag.mode === "move") setState({
				type: "drag-move",
				occurrenceKey: drag.occurrenceKey,
				preview: movePreview(drag.origin, deltaColumns, rawDeltaMinutes, drag.snap)
			});
			else {
				const handle = drag.mode === "resize-start" ? "start" : "end";
				setState({
					type: "drag-resize",
					occurrenceKey: drag.occurrenceKey,
					handle,
					preview: resizePreview(drag.origin, handle, rawDeltaMinutes, drag.snap)
				});
			}
			return;
		}
		setState({
			type: "select-range",
			range: selectionRange(press.pointer.point, pointer.point)
		});
	};
	const commitState = () => {
		try {
			if (state.type === "drag-move" && drag) onCommit?.({
				action: "move",
				occurrenceKey: state.occurrenceKey,
				deltaColumns: state.preview.column - drag.origin.column,
				deltaMinutes: state.preview.startMinutes - drag.origin.startMinutes,
				preview: state.preview
			});
			else if (state.type === "drag-resize") onCommit?.({
				action: "resize",
				occurrenceKey: state.occurrenceKey,
				handle: state.handle,
				preview: state.preview
			});
			else if (state.type === "select-range") onCommit?.({
				action: "select",
				range: state.range
			});
		} finally {
			reset();
		}
	};
	return {
		getState: () => state,
		setColumnCount(count) {
			columnCount = count;
		},
		pointerDown(pointer, target = {}) {
			press = {
				pointer,
				target
			};
			drag = null;
			setState({ type: "pressed" });
		},
		pointerMove(pointer) {
			if (!press) return;
			if (state.type === "pressed") {
				const dx = pointer.pixel.x - press.pointer.pixel.x;
				const dy = pointer.pixel.y - press.pointer.pixel.y;
				if (Math.hypot(dx, dy) < pressThresholdPx) return;
				const { occurrenceKey, handle, origin } = press.target;
				if (occurrenceKey && origin) drag = {
					occurrenceKey,
					origin,
					mode: handle ? handle === "start" ? "resize-start" : "resize-end" : "move",
					snap: press.target.snap ?? snap
				};
			}
			updateDrag(pointer);
		},
		pointerUp() {
			if (state.type === "pressed" && press) {
				const { occurrenceKey } = press.target;
				reset();
				onClick?.({ occurrenceKey });
				return;
			}
			commitState();
		},
		grab(occurrenceKey, origin, mode = "move", dragSnap = snap) {
			drag = {
				occurrenceKey,
				origin: {
					...origin,
					column: clampColumn(origin.column)
				},
				mode,
				snap: dragSnap
			};
			press = null;
			if (mode === "move") setState({
				type: "drag-move",
				occurrenceKey,
				preview: movePreview(drag.origin, 0, 0, dragSnap)
			});
			else {
				const handle = mode === "resize-start" ? "start" : "end";
				setState({
					type: "drag-resize",
					occurrenceKey,
					handle,
					preview: resizePreview(drag.origin, handle, 0, dragSnap)
				});
			}
		},
		nudge(delta) {
			if (!drag || state.type !== "drag-move" && state.type !== "drag-resize") return;
			const { preview } = state;
			const minutes = nudgeMinutes(delta.minutes ?? 0, drag.snap);
			const columns = delta.columns ?? 0;
			if (state.type === "drag-move") {
				const duration = preview.endMinutes - preview.startMinutes;
				const startMinutes = clamp(preview.startMinutes + minutes, minMinutes, dayMinutes - duration);
				setState({
					type: "drag-move",
					occurrenceKey: state.occurrenceKey,
					preview: {
						column: clampColumn(preview.column + columns),
						startMinutes,
						endMinutes: startMinutes + duration
					}
				});
				return;
			}
			const next = state.handle === "end" ? {
				...preview,
				endMinutes: clamp(preview.endMinutes + minutes, preview.startMinutes + minDurationMinutes, dayMinutes)
			} : {
				...preview,
				startMinutes: clamp(preview.startMinutes + minutes, minMinutes, preview.endMinutes - minDurationMinutes)
			};
			setState({
				type: "drag-resize",
				occurrenceKey: state.occurrenceKey,
				handle: state.handle,
				preview: next
			});
		},
		commit() {
			commitState();
		},
		cancel() {
			reset();
		}
	};
}
function resolveNavigation(position, key, bounds) {
	const clampColumn = (column) => Math.min(Math.max(column, 0), bounds.columns - 1);
	const clampSlot = (slot) => Math.min(Math.max(slot, 0), bounds.slots - 1);
	switch (key) {
		case "up": return {
			...position,
			slot: clampSlot(position.slot - 1)
		};
		case "down": return {
			...position,
			slot: clampSlot(position.slot + 1)
		};
		case "left": return {
			...position,
			column: clampColumn(position.column - 1)
		};
		case "right": return {
			...position,
			column: clampColumn(position.column + 1)
		};
		case "home": return {
			...position,
			slot: 0
		};
		case "end": return {
			...position,
			slot: bounds.slots - 1
		};
		default: return position;
	}
}
const DEFAULT_LABELS = {
	agenda: "Agenda",
	agendaEmpty: "No events in this range",
	allDay: "All-day",
	cancel: "Cancel",
	colorLabel: "Color",
	day: "Day",
	deleteEvent: "Delete",
	editEvent: "Edit event",
	editScope: "Applies to",
	endLabel: "End",
	eventCancelled: "Cancelled",
	eventCreated: "Created {title}, {date} {start} to {end}",
	eventDeleted: "{title} deleted",
	eventGrabbed: "{title} grabbed. Use the arrow keys to move, Enter to confirm, Escape to cancel",
	eventMoved: "{title} moved to {date} {start}",
	eventResized: "{title} now lasts from {start} to {end}",
	eventUpdated: "{title} updated",
	loadFailed: "Failed to load events",
	month: "Month",
	more: "+{count} more",
	newEvent: "New event",
	next: "Next",
	outsideBusinessHours: "Outside business hours",
	overlapBlocked: "That time is already occupied",
	prev: "Previous",
	repeat: "Repeat",
	repeatDaily: "Daily",
	repeatMonthly: "Monthly",
	repeatNone: "Does not repeat",
	repeatWeekly: "Weekly",
	resource: "Resources",
	save: "Save",
	saveFailed: "The change could not be saved",
	scopeAll: "All events",
	scopeFuture: "This and following events",
	scopeOccurrence: "This event",
	startLabel: "Start",
	timeline: "Timeline",
	titleLabel: "Title",
	today: "Today",
	views: "Views",
	week: "Week"
};
function interpolate(template, values) {
	return template.replace(/\{(\w+)\}/g, (match, token) => values[token] ?? match);
}
var ALL_WEEKDAYS = [
	"MO",
	"TU",
	"WE",
	"TH",
	"FR",
	"SA",
	"SU"
];
var Weekday = function() {
	function Weekday(weekday, n) {
		if (n === 0) throw new Error("Can't create weekday with n == 0");
		this.weekday = weekday;
		this.n = n;
	}
	Weekday.fromStr = function(str) {
		return new Weekday(ALL_WEEKDAYS.indexOf(str));
	};
	Weekday.prototype.nth = function(n) {
		return this.n === n ? this : new Weekday(this.weekday, n);
	};
	Weekday.prototype.equals = function(other) {
		return this.weekday === other.weekday && this.n === other.n;
	};
	Weekday.prototype.toString = function() {
		var s = ALL_WEEKDAYS[this.weekday];
		if (this.n) s = (this.n > 0 ? "+" : "") + String(this.n) + s;
		return s;
	};
	Weekday.prototype.getJsWeekday = function() {
		return this.weekday === 6 ? 0 : this.weekday + 1;
	};
	return Weekday;
}();
var isPresent = function(value) {
	return value !== null && value !== void 0;
};
var isNumber = function(value) {
	return typeof value === "number";
};
var isWeekdayStr = function(value) {
	return typeof value === "string" && ALL_WEEKDAYS.includes(value);
};
var isArray = Array.isArray;
/**
* Simplified version of python's range()
*/
var range = function(start, end) {
	if (end === void 0) end = start;
	if (arguments.length === 1) {
		end = start;
		start = 0;
	}
	var rang = [];
	for (var i = start; i < end; i++) rang.push(i);
	return rang;
};
var repeat = function(value, times) {
	var i = 0;
	var array = [];
	if (isArray(value)) for (; i < times; i++) array[i] = [].concat(value);
	else for (; i < times; i++) array[i] = value;
	return array;
};
var toArray = function(item) {
	if (isArray(item)) return item;
	return [item];
};
function padStart(item, targetLength, padString) {
	if (padString === void 0) padString = " ";
	var str = String(item);
	targetLength = targetLength >> 0;
	if (str.length > targetLength) return String(str);
	targetLength = targetLength - str.length;
	if (targetLength > padString.length) padString += repeat(padString, targetLength / padString.length);
	return padString.slice(0, targetLength) + String(str);
}
/**
* Python like split
*/
var split = function(str, sep, num) {
	var splits = str.split(sep);
	return num ? splits.slice(0, num).concat([splits.slice(num).join(sep)]) : splits;
};
/**
* closure/goog/math/math.js:modulo
* Copyright 2006 The Closure Library Authors.
* The % operator in JavaScript returns the remainder of a / b, but differs from
* some other languages in that the result will have the same sign as the
* dividend. For example, -1 % 8 == -1, whereas in some other languages
* (such as Python) the result would be 7. This function emulates the more
* correct modulo behavior, which is useful for certain applications such as
* calculating an offset index in a circular list.
*
* @param {number} a The dividend.
* @param {number} b The divisor.
* @return {number} a % b where the result is between 0 and b (either 0 <= x < b
* or b < x <= 0, depending on the sign of b).
*/
var pymod = function(a, b) {
	var r = a % b;
	return r * b < 0 ? r + b : r;
};
/**
* @see: <http://docs.python.org/library/functions.html#divmod>
*/
var divmod = function(a, b) {
	return {
		div: Math.floor(a / b),
		mod: pymod(a, b)
	};
};
var empty = function(obj) {
	return !isPresent(obj) || obj.length === 0;
};
/**
* Python-like boolean
*
* @return {Boolean} value of an object/primitive, taking into account
* the fact that in Python an empty list's/tuple's
* boolean value is False, whereas in JS it's true
*/
var notEmpty = function(obj) {
	return !empty(obj);
};
/**
* Return true if a value is in an array
*/
var includes = function(arr, val) {
	return notEmpty(arr) && arr.indexOf(val) !== -1;
};
var datetime = function(y, m, d, h, i, s) {
	if (h === void 0) h = 0;
	if (i === void 0) i = 0;
	if (s === void 0) s = 0;
	return new Date(Date.UTC(y, m - 1, d, h, i, s));
};
/**
* General date-related utilities.
* Also handles several incompatibilities between JavaScript and Python
*
*/
var MONTH_DAYS = [
	31,
	28,
	31,
	30,
	31,
	30,
	31,
	31,
	30,
	31,
	30,
	31
];
/**
* Number of milliseconds of one day
*/
var ONE_DAY = 864e5;
/**
* Python uses 1-Jan-1 as the base for calculating ordinals but we don't
* want to confuse the JS engine with milliseconds > Number.MAX_NUMBER,
* therefore we use 1-Jan-1970 instead
*/
var ORDINAL_BASE = datetime(1970, 1, 1);
/**
* Python: MO-SU: 0 - 6
* JS: SU-SAT 0 - 6
*/
var PY_WEEKDAYS = [
	6,
	0,
	1,
	2,
	3,
	4,
	5
];
var isLeapYear = function(year) {
	return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
};
var isDate = function(value) {
	return value instanceof Date;
};
var isValidDate = function(value) {
	return isDate(value) && !isNaN(value.getTime());
};
/**
* @see: <http://www.mcfedries.com/JavaScript/DaysBetween.asp>
*/
var daysBetween = function(date1, date2) {
	var differencems = date1.getTime() - date2.getTime();
	return Math.round(differencems / ONE_DAY);
};
/**
* @see: <http://docs.python.org/library/datetime.html#datetime.date.toordinal>
*/
var toOrdinal = function(date) {
	return daysBetween(date, ORDINAL_BASE);
};
/**
* @see - <http://docs.python.org/library/datetime.html#datetime.date.fromordinal>
*/
var fromOrdinal = function(ordinal) {
	return new Date(ORDINAL_BASE.getTime() + ordinal * ONE_DAY);
};
var getMonthDays$1 = function(date) {
	var month = date.getUTCMonth();
	return month === 1 && isLeapYear(date.getUTCFullYear()) ? 29 : MONTH_DAYS[month];
};
/**
* @return {Number} python-like weekday
*/
var getWeekday = function(date) {
	return PY_WEEKDAYS[date.getUTCDay()];
};
/**
* @see: <http://docs.python.org/library/calendar.html#calendar.monthrange>
*/
var monthRange = function(year, month) {
	var date = datetime(year, month + 1, 1);
	return [getWeekday(date), getMonthDays$1(date)];
};
/**
* @see: <http://docs.python.org/library/datetime.html#datetime.datetime.combine>
*/
var combine = function(date, time) {
	time = time || date;
	return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), time.getHours(), time.getMinutes(), time.getSeconds(), time.getMilliseconds()));
};
var clone = function(date) {
	return new Date(date.getTime());
};
var cloneDates = function(dates) {
	var clones = [];
	for (var i = 0; i < dates.length; i++) clones.push(clone(dates[i]));
	return clones;
};
/**
* Sorts an array of Date or Time objects
*/
var sort = function(dates) {
	dates.sort(function(a, b) {
		return a.getTime() - b.getTime();
	});
};
var timeToUntilString = function(time, utc) {
	if (utc === void 0) utc = true;
	var date = new Date(time);
	return [
		padStart(date.getUTCFullYear().toString(), 4, "0"),
		padStart(date.getUTCMonth() + 1, 2, "0"),
		padStart(date.getUTCDate(), 2, "0"),
		"T",
		padStart(date.getUTCHours(), 2, "0"),
		padStart(date.getUTCMinutes(), 2, "0"),
		padStart(date.getUTCSeconds(), 2, "0"),
		utc ? "Z" : ""
	].join("");
};
var untilStringToDate = function(until) {
	var bits = /^(\d{4})(\d{2})(\d{2})(T(\d{2})(\d{2})(\d{2})Z?)?$/.exec(until);
	if (!bits) throw new Error("Invalid UNTIL value: ".concat(until));
	return new Date(Date.UTC(parseInt(bits[1], 10), parseInt(bits[2], 10) - 1, parseInt(bits[3], 10), parseInt(bits[5], 10) || 0, parseInt(bits[6], 10) || 0, parseInt(bits[7], 10) || 0));
};
var dateTZtoISO8601 = function(date, timeZone) {
	return date.toLocaleString("sv-SE", { timeZone }).replace(" ", "T") + "Z";
};
var dateInTimeZone = function(date, timeZone) {
	var localTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
	var dateInLocalTZ = new Date(dateTZtoISO8601(date, localTimeZone));
	var tzOffset = new Date(dateTZtoISO8601(date, timeZone !== null && timeZone !== void 0 ? timeZone : "UTC")).getTime() - dateInLocalTZ.getTime();
	return new Date(date.getTime() - tzOffset);
};
/**
* This class helps us to emulate python's generators, sorta.
*/
var IterResult = function() {
	function IterResult(method, args) {
		this.minDate = null;
		this.maxDate = null;
		this._result = [];
		this.total = 0;
		this.method = method;
		this.args = args;
		if (method === "between") {
			this.maxDate = args.inc ? args.before : /* @__PURE__ */ new Date(args.before.getTime() - 1);
			this.minDate = args.inc ? args.after : new Date(args.after.getTime() + 1);
		} else if (method === "before") this.maxDate = args.inc ? args.dt : /* @__PURE__ */ new Date(args.dt.getTime() - 1);
		else if (method === "after") this.minDate = args.inc ? args.dt : new Date(args.dt.getTime() + 1);
	}
	/**
	* Possibly adds a date into the result.
	*
	* @param {Date} date - the date isn't necessarly added to the result
	* list (if it is too late/too early)
	* @return {Boolean} true if it makes sense to continue the iteration
	* false if we're done.
	*/
	IterResult.prototype.accept = function(date) {
		++this.total;
		var tooEarly = this.minDate && date < this.minDate;
		var tooLate = this.maxDate && date > this.maxDate;
		if (this.method === "between") {
			if (tooEarly) return true;
			if (tooLate) return false;
		} else if (this.method === "before") {
			if (tooLate) return false;
		} else if (this.method === "after") {
			if (tooEarly) return true;
			this.add(date);
			return false;
		}
		return this.add(date);
	};
	/**
	*
	* @param {Date} date that is part of the result.
	* @return {Boolean} whether we are interested in more values.
	*/
	IterResult.prototype.add = function(date) {
		this._result.push(date);
		return true;
	};
	/**
	* 'before' and 'after' return only one date, whereas 'all'
	* and 'between' an array.
	*
	* @return {Date,Array?}
	*/
	IterResult.prototype.getValue = function() {
		var res = this._result;
		switch (this.method) {
			case "all":
			case "between": return res;
			default: return res.length ? res[res.length - 1] : null;
		}
	};
	IterResult.prototype.clone = function() {
		return new IterResult(this.method, this.args);
	};
	return IterResult;
}();
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var extendStatics = function(d, b) {
	extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
		d.__proto__ = b;
	} || function(d, b) {
		for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
	};
	return extendStatics(d, b);
};
function __extends(d, b) {
	if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
	extendStatics(d, b);
	function __() {
		this.constructor = d;
	}
	d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
	__assign = Object.assign || function __assign(t) {
		for (var s, i = 1, n = arguments.length; i < n; i++) {
			s = arguments[i];
			for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
		}
		return t;
	};
	return __assign.apply(this, arguments);
};
function __spreadArray(to, from, pack) {
	if (pack || arguments.length === 2) {
		for (var i = 0, l = from.length, ar; i < l; i++) if (ar || !(i in from)) {
			if (!ar) ar = Array.prototype.slice.call(from, 0, i);
			ar[i] = from[i];
		}
	}
	return to.concat(ar || Array.prototype.slice.call(from));
}
/**
* IterResult subclass that calls a callback function on each add,
* and stops iterating when the callback returns false.
*/
var CallbackIterResult = function(_super) {
	__extends(CallbackIterResult, _super);
	function CallbackIterResult(method, args, iterator) {
		var _this = _super.call(this, method, args) || this;
		_this.iterator = iterator;
		return _this;
	}
	CallbackIterResult.prototype.add = function(date) {
		if (this.iterator(date, this._result.length)) {
			this._result.push(date);
			return true;
		}
		return false;
	};
	return CallbackIterResult;
}(IterResult);
var ENGLISH = {
	dayNames: [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday"
	],
	monthNames: [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December"
	],
	tokens: {
		SKIP: /^[ \r\n\t]+|^\.$/,
		number: /^[1-9][0-9]*/,
		numberAsText: /^(one|two|three)/i,
		every: /^every/i,
		"day(s)": /^days?/i,
		"weekday(s)": /^weekdays?/i,
		"week(s)": /^weeks?/i,
		"hour(s)": /^hours?/i,
		"minute(s)": /^minutes?/i,
		"month(s)": /^months?/i,
		"year(s)": /^years?/i,
		on: /^(on|in)/i,
		at: /^(at)/i,
		the: /^the/i,
		first: /^first/i,
		second: /^second/i,
		third: /^third/i,
		nth: /^([1-9][0-9]*)(\.|th|nd|rd|st)/i,
		last: /^last/i,
		for: /^for/i,
		"time(s)": /^times?/i,
		until: /^(un)?til/i,
		monday: /^mo(n(day)?)?/i,
		tuesday: /^tu(e(s(day)?)?)?/i,
		wednesday: /^we(d(n(esday)?)?)?/i,
		thursday: /^th(u(r(sday)?)?)?/i,
		friday: /^fr(i(day)?)?/i,
		saturday: /^sa(t(urday)?)?/i,
		sunday: /^su(n(day)?)?/i,
		january: /^jan(uary)?/i,
		february: /^feb(ruary)?/i,
		march: /^mar(ch)?/i,
		april: /^apr(il)?/i,
		may: /^may/i,
		june: /^june?/i,
		july: /^july?/i,
		august: /^aug(ust)?/i,
		september: /^sep(t(ember)?)?/i,
		october: /^oct(ober)?/i,
		november: /^nov(ember)?/i,
		december: /^dec(ember)?/i,
		comma: /^(,\s*|(and|or)\s*)+/i
	}
};
/**
* Return true if a value is in an array
*/
var contains = function(arr, val) {
	return arr.indexOf(val) !== -1;
};
var defaultGetText = function(id) {
	return id.toString();
};
var defaultDateFormatter = function(year, month, day) {
	return "".concat(month, " ").concat(day, ", ").concat(year);
};
/**
*
* @param {RRule} rrule
* Optional:
* @param {Function} gettext function
* @param {Object} language definition
* @constructor
*/
var ToText = function() {
	function ToText(rrule, gettext, language, dateFormatter) {
		if (gettext === void 0) gettext = defaultGetText;
		if (language === void 0) language = ENGLISH;
		if (dateFormatter === void 0) dateFormatter = defaultDateFormatter;
		this.text = [];
		this.language = language || ENGLISH;
		this.gettext = gettext;
		this.dateFormatter = dateFormatter;
		this.rrule = rrule;
		this.options = rrule.options;
		this.origOptions = rrule.origOptions;
		if (this.origOptions.bymonthday) {
			var bymonthday = [].concat(this.options.bymonthday);
			var bynmonthday = [].concat(this.options.bynmonthday);
			bymonthday.sort(function(a, b) {
				return a - b;
			});
			bynmonthday.sort(function(a, b) {
				return b - a;
			});
			this.bymonthday = bymonthday.concat(bynmonthday);
			if (!this.bymonthday.length) this.bymonthday = null;
		}
		if (isPresent(this.origOptions.byweekday)) {
			var byweekday = !isArray(this.origOptions.byweekday) ? [this.origOptions.byweekday] : this.origOptions.byweekday;
			var days = String(byweekday);
			this.byweekday = {
				allWeeks: byweekday.filter(function(weekday) {
					return !weekday.n;
				}),
				someWeeks: byweekday.filter(function(weekday) {
					return Boolean(weekday.n);
				}),
				isWeekdays: days.indexOf("MO") !== -1 && days.indexOf("TU") !== -1 && days.indexOf("WE") !== -1 && days.indexOf("TH") !== -1 && days.indexOf("FR") !== -1 && days.indexOf("SA") === -1 && days.indexOf("SU") === -1,
				isEveryDay: days.indexOf("MO") !== -1 && days.indexOf("TU") !== -1 && days.indexOf("WE") !== -1 && days.indexOf("TH") !== -1 && days.indexOf("FR") !== -1 && days.indexOf("SA") !== -1 && days.indexOf("SU") !== -1
			};
			var sortWeekDays = function(a, b) {
				return a.weekday - b.weekday;
			};
			this.byweekday.allWeeks.sort(sortWeekDays);
			this.byweekday.someWeeks.sort(sortWeekDays);
			if (!this.byweekday.allWeeks.length) this.byweekday.allWeeks = null;
			if (!this.byweekday.someWeeks.length) this.byweekday.someWeeks = null;
		} else this.byweekday = null;
	}
	/**
	* Test whether the rrule can be fully converted to text.
	*
	* @param {RRule} rrule
	* @return {Boolean}
	*/
	ToText.isFullyConvertible = function(rrule) {
		var canConvert = true;
		if (!(rrule.options.freq in ToText.IMPLEMENTED)) return false;
		if (rrule.origOptions.until && rrule.origOptions.count) return false;
		for (var key in rrule.origOptions) {
			if (contains([
				"dtstart",
				"tzid",
				"wkst",
				"freq"
			], key)) return true;
			if (!contains(ToText.IMPLEMENTED[rrule.options.freq], key)) return false;
		}
		return canConvert;
	};
	ToText.prototype.isFullyConvertible = function() {
		return ToText.isFullyConvertible(this.rrule);
	};
	/**
	* Perform the conversion. Only some of the frequencies are supported.
	* If some of the rrule's options aren't supported, they'll
	* be omitted from the output an "(~ approximate)" will be appended.
	*
	* @return {*}
	*/
	ToText.prototype.toString = function() {
		var gettext = this.gettext;
		if (!(this.options.freq in ToText.IMPLEMENTED)) return gettext("RRule error: Unable to fully convert this rrule to text");
		this.text = [gettext("every")];
		this[RRule.FREQUENCIES[this.options.freq]]();
		if (this.options.until) {
			this.add(gettext("until"));
			var until = this.options.until;
			this.add(this.dateFormatter(until.getUTCFullYear(), this.language.monthNames[until.getUTCMonth()], until.getUTCDate()));
		} else if (this.options.count) this.add(gettext("for")).add(this.options.count.toString()).add(this.plural(this.options.count) ? gettext("times") : gettext("time"));
		if (!this.isFullyConvertible()) this.add(gettext("(~ approximate)"));
		return this.text.join("");
	};
	ToText.prototype.HOURLY = function() {
		var gettext = this.gettext;
		if (this.options.interval !== 1) this.add(this.options.interval.toString());
		this.add(this.plural(this.options.interval) ? gettext("hours") : gettext("hour"));
	};
	ToText.prototype.MINUTELY = function() {
		var gettext = this.gettext;
		if (this.options.interval !== 1) this.add(this.options.interval.toString());
		this.add(this.plural(this.options.interval) ? gettext("minutes") : gettext("minute"));
	};
	ToText.prototype.DAILY = function() {
		var gettext = this.gettext;
		if (this.options.interval !== 1) this.add(this.options.interval.toString());
		if (this.byweekday && this.byweekday.isWeekdays) this.add(this.plural(this.options.interval) ? gettext("weekdays") : gettext("weekday"));
		else this.add(this.plural(this.options.interval) ? gettext("days") : gettext("day"));
		if (this.origOptions.bymonth) {
			this.add(gettext("in"));
			this._bymonth();
		}
		if (this.bymonthday) this._bymonthday();
		else if (this.byweekday) this._byweekday();
		else if (this.origOptions.byhour) this._byhour();
	};
	ToText.prototype.WEEKLY = function() {
		var gettext = this.gettext;
		if (this.options.interval !== 1) this.add(this.options.interval.toString()).add(this.plural(this.options.interval) ? gettext("weeks") : gettext("week"));
		if (this.byweekday && this.byweekday.isWeekdays) {
			if (this.options.interval === 1) this.add(this.plural(this.options.interval) ? gettext("weekdays") : gettext("weekday"));
			else this.add(gettext("on")).add(gettext("weekdays"));
		} else if (this.byweekday && this.byweekday.isEveryDay) this.add(this.plural(this.options.interval) ? gettext("days") : gettext("day"));
		else {
			if (this.options.interval === 1) this.add(gettext("week"));
			if (this.origOptions.bymonth) {
				this.add(gettext("in"));
				this._bymonth();
			}
			if (this.bymonthday) this._bymonthday();
			else if (this.byweekday) this._byweekday();
			if (this.origOptions.byhour) this._byhour();
		}
	};
	ToText.prototype.MONTHLY = function() {
		var gettext = this.gettext;
		if (this.origOptions.bymonth) {
			if (this.options.interval !== 1) {
				this.add(this.options.interval.toString()).add(gettext("months"));
				if (this.plural(this.options.interval)) this.add(gettext("in"));
			}
			this._bymonth();
		} else {
			if (this.options.interval !== 1) this.add(this.options.interval.toString());
			this.add(this.plural(this.options.interval) ? gettext("months") : gettext("month"));
		}
		if (this.bymonthday) this._bymonthday();
		else if (this.byweekday && this.byweekday.isWeekdays) this.add(gettext("on")).add(gettext("weekdays"));
		else if (this.byweekday) this._byweekday();
	};
	ToText.prototype.YEARLY = function() {
		var gettext = this.gettext;
		if (this.origOptions.bymonth) {
			if (this.options.interval !== 1) {
				this.add(this.options.interval.toString());
				this.add(gettext("years"));
			}
			this._bymonth();
		} else {
			if (this.options.interval !== 1) this.add(this.options.interval.toString());
			this.add(this.plural(this.options.interval) ? gettext("years") : gettext("year"));
		}
		if (this.bymonthday) this._bymonthday();
		else if (this.byweekday) this._byweekday();
		if (this.options.byyearday) this.add(gettext("on the")).add(this.list(this.options.byyearday, this.nth, gettext("and"))).add(gettext("day"));
		if (this.options.byweekno) this.add(gettext("in")).add(this.plural(this.options.byweekno.length) ? gettext("weeks") : gettext("week")).add(this.list(this.options.byweekno, void 0, gettext("and")));
	};
	ToText.prototype._bymonthday = function() {
		var gettext = this.gettext;
		if (this.byweekday && this.byweekday.allWeeks) this.add(gettext("on")).add(this.list(this.byweekday.allWeeks, this.weekdaytext, gettext("or"))).add(gettext("the")).add(this.list(this.bymonthday, this.nth, gettext("or")));
		else this.add(gettext("on the")).add(this.list(this.bymonthday, this.nth, gettext("and")));
	};
	ToText.prototype._byweekday = function() {
		var gettext = this.gettext;
		if (this.byweekday.allWeeks && !this.byweekday.isWeekdays) this.add(gettext("on")).add(this.list(this.byweekday.allWeeks, this.weekdaytext));
		if (this.byweekday.someWeeks) {
			if (this.byweekday.allWeeks) this.add(gettext("and"));
			this.add(gettext("on the")).add(this.list(this.byweekday.someWeeks, this.weekdaytext, gettext("and")));
		}
	};
	ToText.prototype._byhour = function() {
		var gettext = this.gettext;
		this.add(gettext("at")).add(this.list(this.origOptions.byhour, void 0, gettext("and")));
	};
	ToText.prototype._bymonth = function() {
		this.add(this.list(this.options.bymonth, this.monthtext, this.gettext("and")));
	};
	ToText.prototype.nth = function(n) {
		n = parseInt(n.toString(), 10);
		var nth;
		var gettext = this.gettext;
		if (n === -1) return gettext("last");
		var npos = Math.abs(n);
		switch (npos) {
			case 1:
			case 21:
			case 31:
				nth = npos + gettext("st");
				break;
			case 2:
			case 22:
				nth = npos + gettext("nd");
				break;
			case 3:
			case 23:
				nth = npos + gettext("rd");
				break;
			default: nth = npos + gettext("th");
		}
		return n < 0 ? nth + " " + gettext("last") : nth;
	};
	ToText.prototype.monthtext = function(m) {
		return this.language.monthNames[m - 1];
	};
	ToText.prototype.weekdaytext = function(wday) {
		var weekday = isNumber(wday) ? (wday + 1) % 7 : wday.getJsWeekday();
		return (wday.n ? this.nth(wday.n) + " " : "") + this.language.dayNames[weekday];
	};
	ToText.prototype.plural = function(n) {
		return n % 100 !== 1;
	};
	ToText.prototype.add = function(s) {
		this.text.push(" ");
		this.text.push(s);
		return this;
	};
	ToText.prototype.list = function(arr, callback, finalDelim, delim) {
		var _this = this;
		if (delim === void 0) delim = ",";
		if (!isArray(arr)) arr = [arr];
		var delimJoin = function(array, delimiter, finalDelimiter) {
			var list = "";
			for (var i = 0; i < array.length; i++) {
				if (i !== 0) {
					if (i === array.length - 1) list += " " + finalDelimiter + " ";
					else list += delimiter + " ";
				}
				list += array[i];
			}
			return list;
		};
		callback = callback || function(o) {
			return o.toString();
		};
		var realCallback = function(arg) {
			return callback && callback.call(_this, arg);
		};
		if (finalDelim) return delimJoin(arr.map(realCallback), delim, finalDelim);
		else return arr.map(realCallback).join(delim + " ");
	};
	return ToText;
}();
var Parser = function() {
	function Parser(rules) {
		this.done = true;
		this.rules = rules;
	}
	Parser.prototype.start = function(text) {
		this.text = text;
		this.done = false;
		return this.nextSymbol();
	};
	Parser.prototype.isDone = function() {
		return this.done && this.symbol === null;
	};
	Parser.prototype.nextSymbol = function() {
		var best;
		var bestSymbol;
		this.symbol = null;
		this.value = null;
		do {
			if (this.done) return false;
			var rule = void 0;
			best = null;
			for (var name_1 in this.rules) {
				rule = this.rules[name_1];
				var match = rule.exec(this.text);
				if (match) {
					if (best === null || match[0].length > best[0].length) {
						best = match;
						bestSymbol = name_1;
					}
				}
			}
			if (best != null) {
				this.text = this.text.substr(best[0].length);
				if (this.text === "") this.done = true;
			}
			if (best == null) {
				this.done = true;
				this.symbol = null;
				this.value = null;
				return;
			}
		} while (bestSymbol === "SKIP");
		this.symbol = bestSymbol;
		this.value = best;
		return true;
	};
	Parser.prototype.accept = function(name) {
		if (this.symbol === name) {
			if (this.value) {
				var v = this.value;
				this.nextSymbol();
				return v;
			}
			this.nextSymbol();
			return true;
		}
		return false;
	};
	Parser.prototype.acceptNumber = function() {
		return this.accept("number");
	};
	Parser.prototype.expect = function(name) {
		if (this.accept(name)) return true;
		throw new Error("expected " + name + " but found " + this.symbol);
	};
	return Parser;
}();
function parseText(text, language) {
	if (language === void 0) language = ENGLISH;
	var options = {};
	var ttr = new Parser(language.tokens);
	if (!ttr.start(text)) return null;
	S();
	return options;
	function S() {
		ttr.expect("every");
		var n = ttr.acceptNumber();
		if (n) options.interval = parseInt(n[0], 10);
		if (ttr.isDone()) throw new Error("Unexpected end");
		switch (ttr.symbol) {
			case "day(s)":
				options.freq = RRule.DAILY;
				if (ttr.nextSymbol()) {
					AT();
					F();
				}
				break;
			case "weekday(s)":
				options.freq = RRule.WEEKLY;
				options.byweekday = [
					RRule.MO,
					RRule.TU,
					RRule.WE,
					RRule.TH,
					RRule.FR
				];
				ttr.nextSymbol();
				AT();
				F();
				break;
			case "week(s)":
				options.freq = RRule.WEEKLY;
				if (ttr.nextSymbol()) {
					ON();
					AT();
					F();
				}
				break;
			case "hour(s)":
				options.freq = RRule.HOURLY;
				if (ttr.nextSymbol()) {
					ON();
					F();
				}
				break;
			case "minute(s)":
				options.freq = RRule.MINUTELY;
				if (ttr.nextSymbol()) {
					ON();
					F();
				}
				break;
			case "month(s)":
				options.freq = RRule.MONTHLY;
				if (ttr.nextSymbol()) {
					ON();
					F();
				}
				break;
			case "year(s)":
				options.freq = RRule.YEARLY;
				if (ttr.nextSymbol()) {
					ON();
					F();
				}
				break;
			case "monday":
			case "tuesday":
			case "wednesday":
			case "thursday":
			case "friday":
			case "saturday":
			case "sunday":
				options.freq = RRule.WEEKLY;
				options.byweekday = [RRule[ttr.symbol.substr(0, 2).toUpperCase()]];
				if (!ttr.nextSymbol()) return;
				while (ttr.accept("comma")) {
					if (ttr.isDone()) throw new Error("Unexpected end");
					var wkd = decodeWKD();
					if (!wkd) throw new Error("Unexpected symbol " + ttr.symbol + ", expected weekday");
					options.byweekday.push(RRule[wkd]);
					ttr.nextSymbol();
				}
				AT();
				MDAYs();
				F();
				break;
			case "january":
			case "february":
			case "march":
			case "april":
			case "may":
			case "june":
			case "july":
			case "august":
			case "september":
			case "october":
			case "november":
			case "december":
				options.freq = RRule.YEARLY;
				options.bymonth = [decodeM()];
				if (!ttr.nextSymbol()) return;
				while (ttr.accept("comma")) {
					if (ttr.isDone()) throw new Error("Unexpected end");
					var m = decodeM();
					if (!m) throw new Error("Unexpected symbol " + ttr.symbol + ", expected month");
					options.bymonth.push(m);
					ttr.nextSymbol();
				}
				ON();
				F();
				break;
			default: throw new Error("Unknown symbol");
		}
	}
	function ON() {
		var on = ttr.accept("on");
		var the = ttr.accept("the");
		if (!(on || the)) return;
		do {
			var nth = decodeNTH();
			var wkd = decodeWKD();
			var m = decodeM();
			if (nth) {
				if (wkd) {
					ttr.nextSymbol();
					if (!options.byweekday) options.byweekday = [];
					options.byweekday.push(RRule[wkd].nth(nth));
				} else {
					if (!options.bymonthday) options.bymonthday = [];
					options.bymonthday.push(nth);
					ttr.accept("day(s)");
				}
			} else if (wkd) {
				ttr.nextSymbol();
				if (!options.byweekday) options.byweekday = [];
				options.byweekday.push(RRule[wkd]);
			} else if (ttr.symbol === "weekday(s)") {
				ttr.nextSymbol();
				if (!options.byweekday) options.byweekday = [
					RRule.MO,
					RRule.TU,
					RRule.WE,
					RRule.TH,
					RRule.FR
				];
			} else if (ttr.symbol === "week(s)") {
				ttr.nextSymbol();
				var n = ttr.acceptNumber();
				if (!n) throw new Error("Unexpected symbol " + ttr.symbol + ", expected week number");
				options.byweekno = [parseInt(n[0], 10)];
				while (ttr.accept("comma")) {
					n = ttr.acceptNumber();
					if (!n) throw new Error("Unexpected symbol " + ttr.symbol + "; expected monthday");
					options.byweekno.push(parseInt(n[0], 10));
				}
			} else if (m) {
				ttr.nextSymbol();
				if (!options.bymonth) options.bymonth = [];
				options.bymonth.push(m);
			} else return;
		} while (ttr.accept("comma") || ttr.accept("the") || ttr.accept("on"));
	}
	function AT() {
		if (!ttr.accept("at")) return;
		do {
			var n = ttr.acceptNumber();
			if (!n) throw new Error("Unexpected symbol " + ttr.symbol + ", expected hour");
			options.byhour = [parseInt(n[0], 10)];
			while (ttr.accept("comma")) {
				n = ttr.acceptNumber();
				if (!n) throw new Error("Unexpected symbol " + ttr.symbol + "; expected hour");
				options.byhour.push(parseInt(n[0], 10));
			}
		} while (ttr.accept("comma") || ttr.accept("at"));
	}
	function decodeM() {
		switch (ttr.symbol) {
			case "january": return 1;
			case "february": return 2;
			case "march": return 3;
			case "april": return 4;
			case "may": return 5;
			case "june": return 6;
			case "july": return 7;
			case "august": return 8;
			case "september": return 9;
			case "october": return 10;
			case "november": return 11;
			case "december": return 12;
			default: return false;
		}
	}
	function decodeWKD() {
		switch (ttr.symbol) {
			case "monday":
			case "tuesday":
			case "wednesday":
			case "thursday":
			case "friday":
			case "saturday":
			case "sunday": return ttr.symbol.substr(0, 2).toUpperCase();
			default: return false;
		}
	}
	function decodeNTH() {
		switch (ttr.symbol) {
			case "last":
				ttr.nextSymbol();
				return -1;
			case "first":
				ttr.nextSymbol();
				return 1;
			case "second":
				ttr.nextSymbol();
				return ttr.accept("last") ? -2 : 2;
			case "third":
				ttr.nextSymbol();
				return ttr.accept("last") ? -3 : 3;
			case "nth":
				var v = parseInt(ttr.value[1], 10);
				if (v < -366 || v > 366) throw new Error("Nth out of range: " + v);
				ttr.nextSymbol();
				return ttr.accept("last") ? -v : v;
			default: return false;
		}
	}
	function MDAYs() {
		ttr.accept("on");
		ttr.accept("the");
		var nth = decodeNTH();
		if (!nth) return;
		options.bymonthday = [nth];
		ttr.nextSymbol();
		while (ttr.accept("comma")) {
			nth = decodeNTH();
			if (!nth) throw new Error("Unexpected symbol " + ttr.symbol + "; expected monthday");
			options.bymonthday.push(nth);
			ttr.nextSymbol();
		}
	}
	function F() {
		if (ttr.symbol === "until") {
			var date = Date.parse(ttr.text);
			if (!date) throw new Error("Cannot parse until date:" + ttr.text);
			options.until = new Date(date);
		} else if (ttr.accept("for")) {
			options.count = parseInt(ttr.value[0], 10);
			ttr.expect("number");
		}
	}
}
var Frequency;
(function(Frequency) {
	Frequency[Frequency["YEARLY"] = 0] = "YEARLY";
	Frequency[Frequency["MONTHLY"] = 1] = "MONTHLY";
	Frequency[Frequency["WEEKLY"] = 2] = "WEEKLY";
	Frequency[Frequency["DAILY"] = 3] = "DAILY";
	Frequency[Frequency["HOURLY"] = 4] = "HOURLY";
	Frequency[Frequency["MINUTELY"] = 5] = "MINUTELY";
	Frequency[Frequency["SECONDLY"] = 6] = "SECONDLY";
})(Frequency || (Frequency = {}));
function freqIsDailyOrGreater(freq) {
	return freq < Frequency.HOURLY;
}
/**
*
* Implementation of RRule.fromText() and RRule::toText().
*
*
* On the client side, this file needs to be included
* when those functions are used.
*
*/
/**
* Will be able to convert some of the below described rules from
* text format to a rule object.
*
*
* RULES
*
* Every ([n])
* day(s)
* | [weekday], ..., (and) [weekday]
* | weekday(s)
* | week(s)
* | month(s)
* | [month], ..., (and) [month]
* | year(s)
*
*
* Plus 0, 1, or multiple of these:
*
* on [weekday], ..., (or) [weekday] the [monthday], [monthday], ... (or) [monthday]
*
* on [weekday], ..., (and) [weekday]
*
* on the [monthday], [monthday], ... (and) [monthday] (day of the month)
*
* on the [nth-weekday], ..., (and) [nth-weekday] (of the month/year)
*
*
* Plus 0 or 1 of these:
*
* for [n] time(s)
*
* until [date]
*
* Plus (.)
*
*
* Definitely no supported for parsing:
*
* (for year):
* in week(s) [n], ..., (and) [n]
*
* on the [yearday], ..., (and) [n] day of the year
* on day [yearday], ..., (and) [n]
*
*
* NON-TERMINALS
*
* [n]: 1, 2 ..., one, two, three ..
* [month]: January, February, March, April, May, ... December
* [weekday]: Monday, ... Sunday
* [nth-weekday]: first [weekday], 2nd [weekday], ... last [weekday], ...
* [monthday]: first, 1., 2., 1st, 2nd, second, ... 31st, last day, 2nd last day, ..
* [date]:
* - [month] (0-31(,) ([year])),
* - (the) 0-31.(1-12.([year])),
* - (the) 0-31/(1-12/([year])),
* - [weekday]
*
* [year]: 0000, 0001, ... 01, 02, ..
*
* Definitely not supported for parsing:
*
* [yearday]: first, 1., 2., 1st, 2nd, second, ... 366th, last day, 2nd last day, ..
*
* @param {String} text
* @return {Object, Boolean} the rule, or null.
*/
var fromText = function(text, language) {
	if (language === void 0) language = ENGLISH;
	return new RRule(parseText(text, language) || void 0);
};
var common = [
	"count",
	"until",
	"interval",
	"byweekday",
	"bymonthday",
	"bymonth"
];
ToText.IMPLEMENTED = [];
ToText.IMPLEMENTED[Frequency.HOURLY] = common;
ToText.IMPLEMENTED[Frequency.MINUTELY] = common;
ToText.IMPLEMENTED[Frequency.DAILY] = ["byhour"].concat(common);
ToText.IMPLEMENTED[Frequency.WEEKLY] = common;
ToText.IMPLEMENTED[Frequency.MONTHLY] = common;
ToText.IMPLEMENTED[Frequency.YEARLY] = ["byweekno", "byyearday"].concat(common);
var toText = function(rrule, gettext, language, dateFormatter) {
	return new ToText(rrule, gettext, language, dateFormatter).toString();
};
var isFullyConvertible = ToText.isFullyConvertible;
var Time = function() {
	function Time(hour, minute, second, millisecond) {
		this.hour = hour;
		this.minute = minute;
		this.second = second;
		this.millisecond = millisecond || 0;
	}
	Time.prototype.getHours = function() {
		return this.hour;
	};
	Time.prototype.getMinutes = function() {
		return this.minute;
	};
	Time.prototype.getSeconds = function() {
		return this.second;
	};
	Time.prototype.getMilliseconds = function() {
		return this.millisecond;
	};
	Time.prototype.getTime = function() {
		return (this.hour * 60 * 60 + this.minute * 60 + this.second) * 1e3 + this.millisecond;
	};
	return Time;
}();
var DateTime = function(_super) {
	__extends(DateTime, _super);
	function DateTime(year, month, day, hour, minute, second, millisecond) {
		var _this = _super.call(this, hour, minute, second, millisecond) || this;
		_this.year = year;
		_this.month = month;
		_this.day = day;
		return _this;
	}
	DateTime.fromDate = function(date) {
		return new this(date.getUTCFullYear(), date.getUTCMonth() + 1, date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), date.valueOf() % 1e3);
	};
	DateTime.prototype.getWeekday = function() {
		return getWeekday(new Date(this.getTime()));
	};
	DateTime.prototype.getTime = function() {
		return new Date(Date.UTC(this.year, this.month - 1, this.day, this.hour, this.minute, this.second, this.millisecond)).getTime();
	};
	DateTime.prototype.getDay = function() {
		return this.day;
	};
	DateTime.prototype.getMonth = function() {
		return this.month;
	};
	DateTime.prototype.getYear = function() {
		return this.year;
	};
	DateTime.prototype.addYears = function(years) {
		this.year += years;
	};
	DateTime.prototype.addMonths = function(months) {
		this.month += months;
		if (this.month > 12) {
			var yearDiv = Math.floor(this.month / 12);
			var monthMod = pymod(this.month, 12);
			this.month = monthMod;
			this.year += yearDiv;
			if (this.month === 0) {
				this.month = 12;
				--this.year;
			}
		}
	};
	DateTime.prototype.addWeekly = function(days, wkst) {
		if (wkst > this.getWeekday()) this.day += -(this.getWeekday() + 1 + (6 - wkst)) + days * 7;
		else this.day += -(this.getWeekday() - wkst) + days * 7;
		this.fixDay();
	};
	DateTime.prototype.addDaily = function(days) {
		this.day += days;
		this.fixDay();
	};
	DateTime.prototype.addHours = function(hours, filtered, byhour) {
		if (filtered) this.hour += Math.floor((23 - this.hour) / hours) * hours;
		for (;;) {
			this.hour += hours;
			var _a = divmod(this.hour, 24), dayDiv = _a.div, hourMod = _a.mod;
			if (dayDiv) {
				this.hour = hourMod;
				this.addDaily(dayDiv);
			}
			if (empty(byhour) || includes(byhour, this.hour)) break;
		}
	};
	DateTime.prototype.addMinutes = function(minutes, filtered, byhour, byminute) {
		if (filtered) this.minute += Math.floor((1439 - (this.hour * 60 + this.minute)) / minutes) * minutes;
		for (;;) {
			this.minute += minutes;
			var _a = divmod(this.minute, 60), hourDiv = _a.div, minuteMod = _a.mod;
			if (hourDiv) {
				this.minute = minuteMod;
				this.addHours(hourDiv, false, byhour);
			}
			if ((empty(byhour) || includes(byhour, this.hour)) && (empty(byminute) || includes(byminute, this.minute))) break;
		}
	};
	DateTime.prototype.addSeconds = function(seconds, filtered, byhour, byminute, bysecond) {
		if (filtered) this.second += Math.floor((86399 - (this.hour * 3600 + this.minute * 60 + this.second)) / seconds) * seconds;
		for (;;) {
			this.second += seconds;
			var _a = divmod(this.second, 60), minuteDiv = _a.div, secondMod = _a.mod;
			if (minuteDiv) {
				this.second = secondMod;
				this.addMinutes(minuteDiv, false, byhour, byminute);
			}
			if ((empty(byhour) || includes(byhour, this.hour)) && (empty(byminute) || includes(byminute, this.minute)) && (empty(bysecond) || includes(bysecond, this.second))) break;
		}
	};
	DateTime.prototype.fixDay = function() {
		if (this.day <= 28) return;
		var daysinmonth = monthRange(this.year, this.month - 1)[1];
		if (this.day <= daysinmonth) return;
		while (this.day > daysinmonth) {
			this.day -= daysinmonth;
			++this.month;
			if (this.month === 13) {
				this.month = 1;
				++this.year;
				if (this.year > 9999) return;
			}
			daysinmonth = monthRange(this.year, this.month - 1)[1];
		}
	};
	DateTime.prototype.add = function(options, filtered) {
		var freq = options.freq, interval = options.interval, wkst = options.wkst, byhour = options.byhour, byminute = options.byminute, bysecond = options.bysecond;
		switch (freq) {
			case Frequency.YEARLY: return this.addYears(interval);
			case Frequency.MONTHLY: return this.addMonths(interval);
			case Frequency.WEEKLY: return this.addWeekly(interval, wkst);
			case Frequency.DAILY: return this.addDaily(interval);
			case Frequency.HOURLY: return this.addHours(interval, filtered, byhour);
			case Frequency.MINUTELY: return this.addMinutes(interval, filtered, byhour, byminute);
			case Frequency.SECONDLY: return this.addSeconds(interval, filtered, byhour, byminute, bysecond);
		}
	};
	return DateTime;
}(Time);
function initializeOptions$1(options) {
	var invalid = [];
	var keys = Object.keys(options);
	for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
		var key = keys_1[_i];
		if (!includes(defaultKeys, key)) invalid.push(key);
		if (isDate(options[key]) && !isValidDate(options[key])) invalid.push(key);
	}
	if (invalid.length) throw new Error("Invalid options: " + invalid.join(", "));
	return __assign({}, options);
}
function parseOptions(options) {
	var opts = __assign(__assign({}, DEFAULT_OPTIONS$1), initializeOptions$1(options));
	if (isPresent(opts.byeaster)) opts.freq = RRule.YEARLY;
	if (!(isPresent(opts.freq) && RRule.FREQUENCIES[opts.freq])) throw new Error("Invalid frequency: ".concat(opts.freq, " ").concat(options.freq));
	if (!opts.dtstart) opts.dtstart = new Date((/* @__PURE__ */ new Date()).setMilliseconds(0));
	if (!isPresent(opts.wkst)) opts.wkst = RRule.MO.weekday;
	else if (isNumber(opts.wkst)) {} else opts.wkst = opts.wkst.weekday;
	if (isPresent(opts.bysetpos)) {
		if (isNumber(opts.bysetpos)) opts.bysetpos = [opts.bysetpos];
		for (var i = 0; i < opts.bysetpos.length; i++) {
			var v = opts.bysetpos[i];
			if (v === 0 || !(v >= -366 && v <= 366)) throw new Error("bysetpos must be between 1 and 366, or between -366 and -1");
		}
	}
	if (!(Boolean(opts.byweekno) || notEmpty(opts.byweekno) || notEmpty(opts.byyearday) || Boolean(opts.bymonthday) || notEmpty(opts.bymonthday) || isPresent(opts.byweekday) || isPresent(opts.byeaster))) switch (opts.freq) {
		case RRule.YEARLY:
			if (!opts.bymonth) opts.bymonth = opts.dtstart.getUTCMonth() + 1;
			opts.bymonthday = opts.dtstart.getUTCDate();
			break;
		case RRule.MONTHLY:
			opts.bymonthday = opts.dtstart.getUTCDate();
			break;
		case RRule.WEEKLY: opts.byweekday = [getWeekday(opts.dtstart)];
	}
	if (isPresent(opts.bymonth) && !isArray(opts.bymonth)) opts.bymonth = [opts.bymonth];
	if (isPresent(opts.byyearday) && !isArray(opts.byyearday) && isNumber(opts.byyearday)) opts.byyearday = [opts.byyearday];
	if (!isPresent(opts.bymonthday)) {
		opts.bymonthday = [];
		opts.bynmonthday = [];
	} else if (isArray(opts.bymonthday)) {
		var bymonthday = [];
		var bynmonthday = [];
		for (var i = 0; i < opts.bymonthday.length; i++) {
			var v = opts.bymonthday[i];
			if (v > 0) bymonthday.push(v);
			else if (v < 0) bynmonthday.push(v);
		}
		opts.bymonthday = bymonthday;
		opts.bynmonthday = bynmonthday;
	} else if (opts.bymonthday < 0) {
		opts.bynmonthday = [opts.bymonthday];
		opts.bymonthday = [];
	} else {
		opts.bynmonthday = [];
		opts.bymonthday = [opts.bymonthday];
	}
	if (isPresent(opts.byweekno) && !isArray(opts.byweekno)) opts.byweekno = [opts.byweekno];
	if (!isPresent(opts.byweekday)) opts.bynweekday = null;
	else if (isNumber(opts.byweekday)) {
		opts.byweekday = [opts.byweekday];
		opts.bynweekday = null;
	} else if (isWeekdayStr(opts.byweekday)) {
		opts.byweekday = [Weekday.fromStr(opts.byweekday).weekday];
		opts.bynweekday = null;
	} else if (opts.byweekday instanceof Weekday) {
		if (!opts.byweekday.n || opts.freq > RRule.MONTHLY) {
			opts.byweekday = [opts.byweekday.weekday];
			opts.bynweekday = null;
		} else {
			opts.bynweekday = [[opts.byweekday.weekday, opts.byweekday.n]];
			opts.byweekday = null;
		}
	} else {
		var byweekday = [];
		var bynweekday = [];
		for (var i = 0; i < opts.byweekday.length; i++) {
			var wday = opts.byweekday[i];
			if (isNumber(wday)) {
				byweekday.push(wday);
				continue;
			} else if (isWeekdayStr(wday)) {
				byweekday.push(Weekday.fromStr(wday).weekday);
				continue;
			}
			if (!wday.n || opts.freq > RRule.MONTHLY) byweekday.push(wday.weekday);
			else bynweekday.push([wday.weekday, wday.n]);
		}
		opts.byweekday = notEmpty(byweekday) ? byweekday : null;
		opts.bynweekday = notEmpty(bynweekday) ? bynweekday : null;
	}
	if (!isPresent(opts.byhour)) opts.byhour = opts.freq < RRule.HOURLY ? [opts.dtstart.getUTCHours()] : null;
	else if (isNumber(opts.byhour)) opts.byhour = [opts.byhour];
	if (!isPresent(opts.byminute)) opts.byminute = opts.freq < RRule.MINUTELY ? [opts.dtstart.getUTCMinutes()] : null;
	else if (isNumber(opts.byminute)) opts.byminute = [opts.byminute];
	if (!isPresent(opts.bysecond)) opts.bysecond = opts.freq < RRule.SECONDLY ? [opts.dtstart.getUTCSeconds()] : null;
	else if (isNumber(opts.bysecond)) opts.bysecond = [opts.bysecond];
	return { parsedOptions: opts };
}
function buildTimeset(opts) {
	var millisecondModulo = opts.dtstart.getTime() % 1e3;
	if (!freqIsDailyOrGreater(opts.freq)) return [];
	var timeset = [];
	opts.byhour.forEach(function(hour) {
		opts.byminute.forEach(function(minute) {
			opts.bysecond.forEach(function(second) {
				timeset.push(new Time(hour, minute, second, millisecondModulo));
			});
		});
	});
	return timeset;
}
function parseString(rfcString) {
	var options = rfcString.split("\n").map(parseLine).filter(function(x) {
		return x !== null;
	});
	return __assign(__assign({}, options[0]), options[1]);
}
function parseDtstart(line) {
	var options = {};
	var dtstartWithZone = /DTSTART(?:;TZID=([^:=]+?))?(?::|=)([^;\s]+)/i.exec(line);
	if (!dtstartWithZone) return options;
	var tzid = dtstartWithZone[1], dtstart = dtstartWithZone[2];
	if (tzid) options.tzid = tzid;
	options.dtstart = untilStringToDate(dtstart);
	return options;
}
function parseLine(rfcString) {
	rfcString = rfcString.replace(/^\s+|\s+$/, "");
	if (!rfcString.length) return null;
	var header = /^([A-Z]+?)[:;]/.exec(rfcString.toUpperCase());
	if (!header) return parseRrule(rfcString);
	var key = header[1];
	switch (key.toUpperCase()) {
		case "RRULE":
		case "EXRULE": return parseRrule(rfcString);
		case "DTSTART": return parseDtstart(rfcString);
		default: throw new Error("Unsupported RFC prop ".concat(key, " in ").concat(rfcString));
	}
}
function parseRrule(line) {
	var options = parseDtstart(line.replace(/^RRULE:/i, ""));
	line.replace(/^(?:RRULE|EXRULE):/i, "").split(";").forEach(function(attr) {
		var _a = attr.split("="), key = _a[0], value = _a[1];
		switch (key.toUpperCase()) {
			case "FREQ":
				options.freq = Frequency[value.toUpperCase()];
				break;
			case "WKST":
				options.wkst = Days[value.toUpperCase()];
				break;
			case "COUNT":
			case "INTERVAL":
			case "BYSETPOS":
			case "BYMONTH":
			case "BYMONTHDAY":
			case "BYYEARDAY":
			case "BYWEEKNO":
			case "BYHOUR":
			case "BYMINUTE":
			case "BYSECOND":
				var num = parseNumber(value);
				var optionKey = key.toLowerCase();
				options[optionKey] = num;
				break;
			case "BYWEEKDAY":
			case "BYDAY":
				options.byweekday = parseWeekday(value);
				break;
			case "DTSTART":
			case "TZID":
				var dtstart = parseDtstart(line);
				options.tzid = dtstart.tzid;
				options.dtstart = dtstart.dtstart;
				break;
			case "UNTIL":
				options.until = untilStringToDate(value);
				break;
			case "BYEASTER":
				options.byeaster = Number(value);
				break;
			default: throw new Error("Unknown RRULE property '" + key + "'");
		}
	});
	return options;
}
function parseNumber(value) {
	if (value.indexOf(",") !== -1) return value.split(",").map(parseIndividualNumber);
	return parseIndividualNumber(value);
}
function parseIndividualNumber(value) {
	if (/^[+-]?\d+$/.test(value)) return Number(value);
	return value;
}
function parseWeekday(value) {
	return value.split(",").map(function(day) {
		if (day.length === 2) return Days[day];
		var parts = day.match(/^([+-]?\d{1,2})([A-Z]{2})$/);
		if (!parts || parts.length < 3) throw new SyntaxError("Invalid weekday string: ".concat(day));
		var n = Number(parts[1]);
		var wday = Days[parts[2]].weekday;
		return new Weekday(wday, n);
	});
}
var DateWithZone = function() {
	function DateWithZone(date, tzid) {
		if (isNaN(date.getTime())) throw new RangeError("Invalid date passed to DateWithZone");
		this.date = date;
		this.tzid = tzid;
	}
	Object.defineProperty(DateWithZone.prototype, "isUTC", {
		get: function() {
			return !this.tzid || this.tzid.toUpperCase() === "UTC";
		},
		enumerable: false,
		configurable: true
	});
	DateWithZone.prototype.toString = function() {
		var datestr = timeToUntilString(this.date.getTime(), this.isUTC);
		if (!this.isUTC) return ";TZID=".concat(this.tzid, ":").concat(datestr);
		return ":".concat(datestr);
	};
	DateWithZone.prototype.getTime = function() {
		return this.date.getTime();
	};
	DateWithZone.prototype.rezonedDate = function() {
		if (this.isUTC) return this.date;
		return dateInTimeZone(this.date, this.tzid);
	};
	return DateWithZone;
}();
function optionsToString(options) {
	var rrule = [];
	var dtstart = "";
	var keys = Object.keys(options);
	var defaultKeys = Object.keys(DEFAULT_OPTIONS$1);
	for (var i = 0; i < keys.length; i++) {
		if (keys[i] === "tzid") continue;
		if (!includes(defaultKeys, keys[i])) continue;
		var key = keys[i].toUpperCase();
		var value = options[keys[i]];
		var outValue = "";
		if (!isPresent(value) || isArray(value) && !value.length) continue;
		switch (key) {
			case "FREQ":
				outValue = RRule.FREQUENCIES[options.freq];
				break;
			case "WKST":
				if (isNumber(value)) outValue = new Weekday(value).toString();
				else outValue = value.toString();
				break;
			case "BYWEEKDAY":
				key = "BYDAY";
				outValue = toArray(value).map(function(wday) {
					if (wday instanceof Weekday) return wday;
					if (isArray(wday)) return new Weekday(wday[0], wday[1]);
					return new Weekday(wday);
				}).toString();
				break;
			case "DTSTART":
				dtstart = buildDtstart(value, options.tzid);
				break;
			case "UNTIL":
				outValue = timeToUntilString(value, !options.tzid);
				break;
			default: if (isArray(value)) {
				var strValues = [];
				for (var j = 0; j < value.length; j++) strValues[j] = String(value[j]);
				outValue = strValues.toString();
			} else outValue = String(value);
		}
		if (outValue) rrule.push([key, outValue]);
	}
	var rules = rrule.map(function(_a) {
		var key = _a[0], value = _a[1];
		return "".concat(key, "=").concat(value.toString());
	}).join(";");
	var ruleString = "";
	if (rules !== "") ruleString = "RRULE:".concat(rules);
	return [dtstart, ruleString].filter(function(x) {
		return !!x;
	}).join("\n");
}
function buildDtstart(dtstart, tzid) {
	if (!dtstart) return "";
	return "DTSTART" + new DateWithZone(new Date(dtstart), tzid).toString();
}
function argsMatch(left, right) {
	if (Array.isArray(left)) {
		if (!Array.isArray(right)) return false;
		if (left.length !== right.length) return false;
		return left.every(function(date, i) {
			return date.getTime() === right[i].getTime();
		});
	}
	if (left instanceof Date) return right instanceof Date && left.getTime() === right.getTime();
	return left === right;
}
var Cache = function() {
	function Cache() {
		this.all = false;
		this.before = [];
		this.after = [];
		this.between = [];
	}
	/**
	* @param {String} what - all/before/after/between
	* @param {Array,Date} value - an array of dates, one date, or null
	* @param {Object?} args - _iter arguments
	*/
	Cache.prototype._cacheAdd = function(what, value, args) {
		if (value) value = value instanceof Date ? clone(value) : cloneDates(value);
		if (what === "all") this.all = value;
		else {
			args._value = value;
			this[what].push(args);
		}
	};
	/**
	* @return false - not in the cache
	* @return null  - cached, but zero occurrences (before/after)
	* @return Date  - cached (before/after)
	* @return []    - cached, but zero occurrences (all/between)
	* @return [Date1, DateN] - cached (all/between)
	*/
	Cache.prototype._cacheGet = function(what, args) {
		var cached = false;
		var argsKeys = args ? Object.keys(args) : [];
		var findCacheDiff = function(item) {
			for (var i = 0; i < argsKeys.length; i++) {
				var key = argsKeys[i];
				if (!argsMatch(args[key], item[key])) return true;
			}
			return false;
		};
		var cachedObject = this[what];
		if (what === "all") cached = this.all;
		else if (isArray(cachedObject)) for (var i = 0; i < cachedObject.length; i++) {
			var item = cachedObject[i];
			if (argsKeys.length && findCacheDiff(item)) continue;
			cached = item._value;
			break;
		}
		if (!cached && this.all) {
			var iterResult = new IterResult(what, args);
			for (var i = 0; i < this.all.length; i++) if (!iterResult.accept(this.all[i])) break;
			cached = iterResult.getValue();
			this._cacheAdd(what, cached, args);
		}
		return isArray(cached) ? cloneDates(cached) : cached instanceof Date ? clone(cached) : cached;
	};
	return Cache;
}();
var M365MASK = __spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray([], repeat(1, 31), true), repeat(2, 28), true), repeat(3, 31), true), repeat(4, 30), true), repeat(5, 31), true), repeat(6, 30), true), repeat(7, 31), true), repeat(8, 31), true), repeat(9, 30), true), repeat(10, 31), true), repeat(11, 30), true), repeat(12, 31), true), repeat(1, 7), true);
var M366MASK = __spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray([], repeat(1, 31), true), repeat(2, 29), true), repeat(3, 31), true), repeat(4, 30), true), repeat(5, 31), true), repeat(6, 30), true), repeat(7, 31), true), repeat(8, 31), true), repeat(9, 30), true), repeat(10, 31), true), repeat(11, 30), true), repeat(12, 31), true), repeat(1, 7), true);
var M28 = range(1, 29);
var M29 = range(1, 30);
var M30 = range(1, 31);
var M31 = range(1, 32);
var MDAY366MASK = __spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray([], M31, true), M29, true), M31, true), M30, true), M31, true), M30, true), M31, true), M31, true), M30, true), M31, true), M30, true), M31, true), M31.slice(0, 7), true);
var MDAY365MASK = __spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray([], M31, true), M28, true), M31, true), M30, true), M31, true), M30, true), M31, true), M31, true), M30, true), M31, true), M30, true), M31, true), M31.slice(0, 7), true);
var NM28 = range(-28, 0);
var NM29 = range(-29, 0);
var NM30 = range(-30, 0);
var NM31 = range(-31, 0);
var NMDAY366MASK = __spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray([], NM31, true), NM29, true), NM31, true), NM30, true), NM31, true), NM30, true), NM31, true), NM31, true), NM30, true), NM31, true), NM30, true), NM31, true), NM31.slice(0, 7), true);
var NMDAY365MASK = __spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray([], NM31, true), NM28, true), NM31, true), NM30, true), NM31, true), NM30, true), NM31, true), NM31, true), NM30, true), NM31, true), NM30, true), NM31, true), NM31.slice(0, 7), true);
var M366RANGE = [
	0,
	31,
	60,
	91,
	121,
	152,
	182,
	213,
	244,
	274,
	305,
	335,
	366
];
var M365RANGE = [
	0,
	31,
	59,
	90,
	120,
	151,
	181,
	212,
	243,
	273,
	304,
	334,
	365
];
var WDAYMASK = (function() {
	var wdaymask = [];
	for (var i = 0; i < 55; i++) wdaymask = wdaymask.concat(range(7));
	return wdaymask;
})();
function rebuildYear(year, options) {
	var firstyday = datetime(year, 1, 1);
	var yearlen = isLeapYear(year) ? 366 : 365;
	var nextyearlen = isLeapYear(year + 1) ? 366 : 365;
	var yearordinal = toOrdinal(firstyday);
	var yearweekday = getWeekday(firstyday);
	var result = __assign(__assign({
		yearlen,
		nextyearlen,
		yearordinal,
		yearweekday
	}, baseYearMasks(year)), { wnomask: null });
	if (empty(options.byweekno)) return result;
	result.wnomask = repeat(0, yearlen + 7);
	var firstwkst;
	var wyearlen;
	var no1wkst = firstwkst = pymod(7 - yearweekday + options.wkst, 7);
	if (no1wkst >= 4) {
		no1wkst = 0;
		wyearlen = result.yearlen + pymod(yearweekday - options.wkst, 7);
	} else wyearlen = yearlen - no1wkst;
	var div = Math.floor(wyearlen / 7);
	var mod = pymod(wyearlen, 7);
	var numweeks = Math.floor(div + mod / 4);
	for (var j = 0; j < options.byweekno.length; j++) {
		var n = options.byweekno[j];
		if (n < 0) n += numweeks + 1;
		if (!(n > 0 && n <= numweeks)) continue;
		var i = void 0;
		if (n > 1) {
			i = no1wkst + (n - 1) * 7;
			if (no1wkst !== firstwkst) i -= 7 - firstwkst;
		} else i = no1wkst;
		for (var k = 0; k < 7; k++) {
			result.wnomask[i] = 1;
			i++;
			if (result.wdaymask[i] === options.wkst) break;
		}
	}
	if (includes(options.byweekno, 1)) {
		var i = no1wkst + numweeks * 7;
		if (no1wkst !== firstwkst) i -= 7 - firstwkst;
		if (i < yearlen) for (var j = 0; j < 7; j++) {
			result.wnomask[i] = 1;
			i += 1;
			if (result.wdaymask[i] === options.wkst) break;
		}
	}
	if (no1wkst) {
		var lnumweeks = void 0;
		if (!includes(options.byweekno, -1)) {
			var lyearweekday = getWeekday(datetime(year - 1, 1, 1));
			var lno1wkst = pymod(7 - lyearweekday.valueOf() + options.wkst, 7);
			var lyearlen = isLeapYear(year - 1) ? 366 : 365;
			var weekst = void 0;
			if (lno1wkst >= 4) {
				lno1wkst = 0;
				weekst = lyearlen + pymod(lyearweekday - options.wkst, 7);
			} else weekst = yearlen - no1wkst;
			lnumweeks = Math.floor(52 + pymod(weekst, 7) / 4);
		} else lnumweeks = -1;
		if (includes(options.byweekno, lnumweeks)) for (var i = 0; i < no1wkst; i++) result.wnomask[i] = 1;
	}
	return result;
}
function baseYearMasks(year) {
	var yearlen = isLeapYear(year) ? 366 : 365;
	var wday = getWeekday(datetime(year, 1, 1));
	if (yearlen === 365) return {
		mmask: M365MASK,
		mdaymask: MDAY365MASK,
		nmdaymask: NMDAY365MASK,
		wdaymask: WDAYMASK.slice(wday),
		mrange: M365RANGE
	};
	return {
		mmask: M366MASK,
		mdaymask: MDAY366MASK,
		nmdaymask: NMDAY366MASK,
		wdaymask: WDAYMASK.slice(wday),
		mrange: M366RANGE
	};
}
function rebuildMonth(year, month, yearlen, mrange, wdaymask, options) {
	var result = {
		lastyear: year,
		lastmonth: month,
		nwdaymask: []
	};
	var ranges = [];
	if (options.freq === RRule.YEARLY) {
		if (empty(options.bymonth)) ranges = [[0, yearlen]];
		else for (var j = 0; j < options.bymonth.length; j++) {
			month = options.bymonth[j];
			ranges.push(mrange.slice(month - 1, month + 1));
		}
	} else if (options.freq === RRule.MONTHLY) ranges = [mrange.slice(month - 1, month + 1)];
	if (empty(ranges)) return result;
	result.nwdaymask = repeat(0, yearlen);
	for (var j = 0; j < ranges.length; j++) {
		var rang = ranges[j];
		var first = rang[0];
		var last = rang[1] - 1;
		for (var k = 0; k < options.bynweekday.length; k++) {
			var i = void 0;
			var _a = options.bynweekday[k], wday = _a[0], n = _a[1];
			if (n < 0) {
				i = last + (n + 1) * 7;
				i -= pymod(wdaymask[i] - wday, 7);
			} else {
				i = first + (n - 1) * 7;
				i += pymod(7 - wdaymask[i] + wday, 7);
			}
			if (first <= i && i <= last) result.nwdaymask[i] = 1;
		}
	}
	return result;
}
function easter(y, offset) {
	if (offset === void 0) offset = 0;
	var a = y % 19;
	var b = Math.floor(y / 100);
	var c = y % 100;
	var d = Math.floor(b / 4);
	var e = b % 4;
	var f = Math.floor((b + 8) / 25);
	var g = Math.floor((b - f + 1) / 3);
	var h = Math.floor(19 * a + b - d - g + 15) % 30;
	var i = Math.floor(c / 4);
	var k = c % 4;
	var l = Math.floor(32 + 2 * e + 2 * i - h - k) % 7;
	var m = Math.floor((a + 11 * h + 22 * l) / 451);
	var month = Math.floor((h + l - 7 * m + 114) / 31);
	var day = (h + l - 7 * m + 114) % 31 + 1;
	var date = Date.UTC(y, month - 1, day + offset);
	return [Math.ceil((date - Date.UTC(y, 0, 1)) / 864e5)];
}
var Iterinfo = function() {
	function Iterinfo(options) {
		this.options = options;
	}
	Iterinfo.prototype.rebuild = function(year, month) {
		var options = this.options;
		if (year !== this.lastyear) this.yearinfo = rebuildYear(year, options);
		if (notEmpty(options.bynweekday) && (month !== this.lastmonth || year !== this.lastyear)) {
			var _a = this.yearinfo, yearlen = _a.yearlen, mrange = _a.mrange, wdaymask = _a.wdaymask;
			this.monthinfo = rebuildMonth(year, month, yearlen, mrange, wdaymask, options);
		}
		if (isPresent(options.byeaster)) this.eastermask = easter(year, options.byeaster);
	};
	Object.defineProperty(Iterinfo.prototype, "lastyear", {
		get: function() {
			return this.monthinfo ? this.monthinfo.lastyear : null;
		},
		enumerable: false,
		configurable: true
	});
	Object.defineProperty(Iterinfo.prototype, "lastmonth", {
		get: function() {
			return this.monthinfo ? this.monthinfo.lastmonth : null;
		},
		enumerable: false,
		configurable: true
	});
	Object.defineProperty(Iterinfo.prototype, "yearlen", {
		get: function() {
			return this.yearinfo.yearlen;
		},
		enumerable: false,
		configurable: true
	});
	Object.defineProperty(Iterinfo.prototype, "yearordinal", {
		get: function() {
			return this.yearinfo.yearordinal;
		},
		enumerable: false,
		configurable: true
	});
	Object.defineProperty(Iterinfo.prototype, "mrange", {
		get: function() {
			return this.yearinfo.mrange;
		},
		enumerable: false,
		configurable: true
	});
	Object.defineProperty(Iterinfo.prototype, "wdaymask", {
		get: function() {
			return this.yearinfo.wdaymask;
		},
		enumerable: false,
		configurable: true
	});
	Object.defineProperty(Iterinfo.prototype, "mmask", {
		get: function() {
			return this.yearinfo.mmask;
		},
		enumerable: false,
		configurable: true
	});
	Object.defineProperty(Iterinfo.prototype, "wnomask", {
		get: function() {
			return this.yearinfo.wnomask;
		},
		enumerable: false,
		configurable: true
	});
	Object.defineProperty(Iterinfo.prototype, "nwdaymask", {
		get: function() {
			return this.monthinfo ? this.monthinfo.nwdaymask : [];
		},
		enumerable: false,
		configurable: true
	});
	Object.defineProperty(Iterinfo.prototype, "nextyearlen", {
		get: function() {
			return this.yearinfo.nextyearlen;
		},
		enumerable: false,
		configurable: true
	});
	Object.defineProperty(Iterinfo.prototype, "mdaymask", {
		get: function() {
			return this.yearinfo.mdaymask;
		},
		enumerable: false,
		configurable: true
	});
	Object.defineProperty(Iterinfo.prototype, "nmdaymask", {
		get: function() {
			return this.yearinfo.nmdaymask;
		},
		enumerable: false,
		configurable: true
	});
	Iterinfo.prototype.ydayset = function() {
		return [
			range(this.yearlen),
			0,
			this.yearlen
		];
	};
	Iterinfo.prototype.mdayset = function(_, month) {
		var start = this.mrange[month - 1];
		var end = this.mrange[month];
		var set = repeat(null, this.yearlen);
		for (var i = start; i < end; i++) set[i] = i;
		return [
			set,
			start,
			end
		];
	};
	Iterinfo.prototype.wdayset = function(year, month, day) {
		var set = repeat(null, this.yearlen + 7);
		var i = toOrdinal(datetime(year, month, day)) - this.yearordinal;
		var start = i;
		for (var j = 0; j < 7; j++) {
			set[i] = i;
			++i;
			if (this.wdaymask[i] === this.options.wkst) break;
		}
		return [
			set,
			start,
			i
		];
	};
	Iterinfo.prototype.ddayset = function(year, month, day) {
		var set = repeat(null, this.yearlen);
		var i = toOrdinal(datetime(year, month, day)) - this.yearordinal;
		set[i] = i;
		return [
			set,
			i,
			i + 1
		];
	};
	Iterinfo.prototype.htimeset = function(hour, _, second, millisecond) {
		var _this = this;
		var set = [];
		this.options.byminute.forEach(function(minute) {
			set = set.concat(_this.mtimeset(hour, minute, second, millisecond));
		});
		sort(set);
		return set;
	};
	Iterinfo.prototype.mtimeset = function(hour, minute, _, millisecond) {
		var set = this.options.bysecond.map(function(second) {
			return new Time(hour, minute, second, millisecond);
		});
		sort(set);
		return set;
	};
	Iterinfo.prototype.stimeset = function(hour, minute, second, millisecond) {
		return [new Time(hour, minute, second, millisecond)];
	};
	Iterinfo.prototype.getdayset = function(freq) {
		switch (freq) {
			case Frequency.YEARLY: return this.ydayset.bind(this);
			case Frequency.MONTHLY: return this.mdayset.bind(this);
			case Frequency.WEEKLY: return this.wdayset.bind(this);
			case Frequency.DAILY: return this.ddayset.bind(this);
			default: return this.ddayset.bind(this);
		}
	};
	Iterinfo.prototype.gettimeset = function(freq) {
		switch (freq) {
			case Frequency.HOURLY: return this.htimeset.bind(this);
			case Frequency.MINUTELY: return this.mtimeset.bind(this);
			case Frequency.SECONDLY: return this.stimeset.bind(this);
		}
	};
	return Iterinfo;
}();
function buildPoslist(bysetpos, timeset, start, end, ii, dayset) {
	var poslist = [];
	for (var j = 0; j < bysetpos.length; j++) {
		var daypos = void 0;
		var timepos = void 0;
		var pos = bysetpos[j];
		if (pos < 0) {
			daypos = Math.floor(pos / timeset.length);
			timepos = pymod(pos, timeset.length);
		} else {
			daypos = Math.floor((pos - 1) / timeset.length);
			timepos = pymod(pos - 1, timeset.length);
		}
		var tmp = [];
		for (var k = start; k < end; k++) {
			var val = dayset[k];
			if (!isPresent(val)) continue;
			tmp.push(val);
		}
		var i = void 0;
		if (daypos < 0) i = tmp.slice(daypos)[0];
		else i = tmp[daypos];
		var time = timeset[timepos];
		var res = combine(fromOrdinal(ii.yearordinal + i), time);
		if (!includes(poslist, res)) poslist.push(res);
	}
	sort(poslist);
	return poslist;
}
function iter(iterResult, options) {
	var dtstart = options.dtstart, freq = options.freq, interval = options.interval, until = options.until, bysetpos = options.bysetpos;
	var count = options.count;
	if (count === 0 || interval === 0) return emitResult(iterResult);
	var counterDate = DateTime.fromDate(dtstart);
	var ii = new Iterinfo(options);
	ii.rebuild(counterDate.year, counterDate.month);
	var timeset = makeTimeset(ii, counterDate, options);
	for (;;) {
		var _a = ii.getdayset(freq)(counterDate.year, counterDate.month, counterDate.day), dayset = _a[0], start = _a[1], end = _a[2];
		var filtered = removeFilteredDays(dayset, start, end, ii, options);
		if (notEmpty(bysetpos)) {
			var poslist = buildPoslist(bysetpos, timeset, start, end, ii, dayset);
			for (var j = 0; j < poslist.length; j++) {
				var res = poslist[j];
				if (until && res > until) return emitResult(iterResult);
				if (res >= dtstart) {
					var rezonedDate = rezoneIfNeeded(res, options);
					if (!iterResult.accept(rezonedDate)) return emitResult(iterResult);
					if (count) {
						--count;
						if (!count) return emitResult(iterResult);
					}
				}
			}
		} else for (var j = start; j < end; j++) {
			var currentDay = dayset[j];
			if (!isPresent(currentDay)) continue;
			var date = fromOrdinal(ii.yearordinal + currentDay);
			for (var k = 0; k < timeset.length; k++) {
				var time = timeset[k];
				var res = combine(date, time);
				if (until && res > until) return emitResult(iterResult);
				if (res >= dtstart) {
					var rezonedDate = rezoneIfNeeded(res, options);
					if (!iterResult.accept(rezonedDate)) return emitResult(iterResult);
					if (count) {
						--count;
						if (!count) return emitResult(iterResult);
					}
				}
			}
		}
		if (options.interval === 0) return emitResult(iterResult);
		counterDate.add(options, filtered);
		if (counterDate.year > 9999) return emitResult(iterResult);
		if (!freqIsDailyOrGreater(freq)) timeset = ii.gettimeset(freq)(counterDate.hour, counterDate.minute, counterDate.second, 0);
		ii.rebuild(counterDate.year, counterDate.month);
	}
}
function isFiltered(ii, currentDay, options) {
	var bymonth = options.bymonth, byweekno = options.byweekno, byweekday = options.byweekday, byeaster = options.byeaster, bymonthday = options.bymonthday, bynmonthday = options.bynmonthday, byyearday = options.byyearday;
	return notEmpty(bymonth) && !includes(bymonth, ii.mmask[currentDay]) || notEmpty(byweekno) && !ii.wnomask[currentDay] || notEmpty(byweekday) && !includes(byweekday, ii.wdaymask[currentDay]) || notEmpty(ii.nwdaymask) && !ii.nwdaymask[currentDay] || byeaster !== null && !includes(ii.eastermask, currentDay) || (notEmpty(bymonthday) || notEmpty(bynmonthday)) && !includes(bymonthday, ii.mdaymask[currentDay]) && !includes(bynmonthday, ii.nmdaymask[currentDay]) || notEmpty(byyearday) && (currentDay < ii.yearlen && !includes(byyearday, currentDay + 1) && !includes(byyearday, -ii.yearlen + currentDay) || currentDay >= ii.yearlen && !includes(byyearday, currentDay + 1 - ii.yearlen) && !includes(byyearday, -ii.nextyearlen + currentDay - ii.yearlen));
}
function rezoneIfNeeded(date, options) {
	return new DateWithZone(date, options.tzid).rezonedDate();
}
function emitResult(iterResult) {
	return iterResult.getValue();
}
function removeFilteredDays(dayset, start, end, ii, options) {
	var filtered = false;
	for (var dayCounter = start; dayCounter < end; dayCounter++) {
		var currentDay = dayset[dayCounter];
		filtered = isFiltered(ii, currentDay, options);
		if (filtered) dayset[currentDay] = null;
	}
	return filtered;
}
function makeTimeset(ii, counterDate, options) {
	var freq = options.freq, byhour = options.byhour, byminute = options.byminute, bysecond = options.bysecond;
	if (freqIsDailyOrGreater(freq)) return buildTimeset(options);
	if (freq >= RRule.HOURLY && notEmpty(byhour) && !includes(byhour, counterDate.hour) || freq >= RRule.MINUTELY && notEmpty(byminute) && !includes(byminute, counterDate.minute) || freq >= RRule.SECONDLY && notEmpty(bysecond) && !includes(bysecond, counterDate.second)) return [];
	return ii.gettimeset(freq)(counterDate.hour, counterDate.minute, counterDate.second, counterDate.millisecond);
}
var Days = {
	MO: new Weekday(0),
	TU: new Weekday(1),
	WE: new Weekday(2),
	TH: new Weekday(3),
	FR: new Weekday(4),
	SA: new Weekday(5),
	SU: new Weekday(6)
};
var DEFAULT_OPTIONS$1 = {
	freq: Frequency.YEARLY,
	dtstart: null,
	interval: 1,
	wkst: Days.MO,
	count: null,
	until: null,
	tzid: null,
	bysetpos: null,
	bymonth: null,
	bymonthday: null,
	bynmonthday: null,
	byyearday: null,
	byweekno: null,
	byweekday: null,
	bynweekday: null,
	byhour: null,
	byminute: null,
	bysecond: null,
	byeaster: null
};
var defaultKeys = Object.keys(DEFAULT_OPTIONS$1);
/**
*
* @param {Options?} options - see <http://labix.org/python-dateutil/#head-cf004ee9a75592797e076752b2a889c10f445418>
* - The only required option is `freq`, one of RRule.YEARLY, RRule.MONTHLY, ...
* @constructor
*/
var RRule = function() {
	function RRule(options, noCache) {
		if (options === void 0) options = {};
		if (noCache === void 0) noCache = false;
		this._cache = noCache ? null : new Cache();
		this.origOptions = initializeOptions$1(options);
		var parsedOptions = parseOptions(options).parsedOptions;
		this.options = parsedOptions;
	}
	RRule.parseText = function(text, language) {
		return parseText(text, language);
	};
	RRule.fromText = function(text, language) {
		return fromText(text, language);
	};
	RRule.fromString = function(str) {
		return new RRule(RRule.parseString(str) || void 0);
	};
	RRule.prototype._iter = function(iterResult) {
		return iter(iterResult, this.options);
	};
	RRule.prototype._cacheGet = function(what, args) {
		if (!this._cache) return false;
		return this._cache._cacheGet(what, args);
	};
	RRule.prototype._cacheAdd = function(what, value, args) {
		if (!this._cache) return;
		return this._cache._cacheAdd(what, value, args);
	};
	/**
	* @param {Function} iterator - optional function that will be called
	* on each date that is added. It can return false
	* to stop the iteration.
	* @return Array containing all recurrences.
	*/
	RRule.prototype.all = function(iterator) {
		if (iterator) return this._iter(new CallbackIterResult("all", {}, iterator));
		var result = this._cacheGet("all");
		if (result === false) {
			result = this._iter(new IterResult("all", {}));
			this._cacheAdd("all", result);
		}
		return result;
	};
	/**
	* Returns all the occurrences of the rrule between after and before.
	* The inc keyword defines what happens if after and/or before are
	* themselves occurrences. With inc == True, they will be included in the
	* list, if they are found in the recurrence set.
	*
	* @return Array
	*/
	RRule.prototype.between = function(after, before, inc, iterator) {
		if (inc === void 0) inc = false;
		if (!isValidDate(after) || !isValidDate(before)) throw new Error("Invalid date passed in to RRule.between");
		var args = {
			before,
			after,
			inc
		};
		if (iterator) return this._iter(new CallbackIterResult("between", args, iterator));
		var result = this._cacheGet("between", args);
		if (result === false) {
			result = this._iter(new IterResult("between", args));
			this._cacheAdd("between", result, args);
		}
		return result;
	};
	/**
	* Returns the last recurrence before the given datetime instance.
	* The inc keyword defines what happens if dt is an occurrence.
	* With inc == True, if dt itself is an occurrence, it will be returned.
	*
	* @return Date or null
	*/
	RRule.prototype.before = function(dt, inc) {
		if (inc === void 0) inc = false;
		if (!isValidDate(dt)) throw new Error("Invalid date passed in to RRule.before");
		var args = {
			dt,
			inc
		};
		var result = this._cacheGet("before", args);
		if (result === false) {
			result = this._iter(new IterResult("before", args));
			this._cacheAdd("before", result, args);
		}
		return result;
	};
	/**
	* Returns the first recurrence after the given datetime instance.
	* The inc keyword defines what happens if dt is an occurrence.
	* With inc == True, if dt itself is an occurrence, it will be returned.
	*
	* @return Date or null
	*/
	RRule.prototype.after = function(dt, inc) {
		if (inc === void 0) inc = false;
		if (!isValidDate(dt)) throw new Error("Invalid date passed in to RRule.after");
		var args = {
			dt,
			inc
		};
		var result = this._cacheGet("after", args);
		if (result === false) {
			result = this._iter(new IterResult("after", args));
			this._cacheAdd("after", result, args);
		}
		return result;
	};
	/**
	* Returns the number of recurrences in this set. It will have go trough
	* the whole recurrence, if this hasn't been done before.
	*/
	RRule.prototype.count = function() {
		return this.all().length;
	};
	/**
	* Converts the rrule into its string representation
	*
	* @see <http://www.ietf.org/rfc/rfc2445.txt>
	* @return String
	*/
	RRule.prototype.toString = function() {
		return optionsToString(this.origOptions);
	};
	/**
	* Will convert all rules described in nlp:ToText
	* to text.
	*/
	RRule.prototype.toText = function(gettext, language, dateFormatter) {
		return toText(this, gettext, language, dateFormatter);
	};
	RRule.prototype.isFullyConvertibleToText = function() {
		return isFullyConvertible(this);
	};
	/**
	* @return a RRule instance with the same freq and options
	* as this one (cache is not cloned)
	*/
	RRule.prototype.clone = function() {
		return new RRule(this.origOptions);
	};
	RRule.FREQUENCIES = [
		"YEARLY",
		"MONTHLY",
		"WEEKLY",
		"DAILY",
		"HOURLY",
		"MINUTELY",
		"SECONDLY"
	];
	RRule.YEARLY = Frequency.YEARLY;
	RRule.MONTHLY = Frequency.MONTHLY;
	RRule.WEEKLY = Frequency.WEEKLY;
	RRule.DAILY = Frequency.DAILY;
	RRule.HOURLY = Frequency.HOURLY;
	RRule.MINUTELY = Frequency.MINUTELY;
	RRule.SECONDLY = Frequency.SECONDLY;
	RRule.MO = Days.MO;
	RRule.TU = Days.TU;
	RRule.WE = Days.WE;
	RRule.TH = Days.TH;
	RRule.FR = Days.FR;
	RRule.SA = Days.SA;
	RRule.SU = Days.SU;
	RRule.parseString = parseString;
	RRule.optionsToString = optionsToString;
	return RRule;
}();
function iterSet(iterResult, _rrule, _exrule, _rdate, _exdate, tzid) {
	var _exdateHash = {};
	var _accept = iterResult.accept;
	function evalExdate(after, before) {
		_exrule.forEach(function(rrule) {
			rrule.between(after, before, true).forEach(function(date) {
				_exdateHash[Number(date)] = true;
			});
		});
	}
	_exdate.forEach(function(date) {
		var zonedDate = new DateWithZone(date, tzid).rezonedDate();
		_exdateHash[Number(zonedDate)] = true;
	});
	iterResult.accept = function(date) {
		var dt = Number(date);
		if (isNaN(dt)) return _accept.call(this, date);
		if (!_exdateHash[dt]) {
			evalExdate(/* @__PURE__ */ new Date(dt - 1), new Date(dt + 1));
			if (!_exdateHash[dt]) {
				_exdateHash[dt] = true;
				return _accept.call(this, date);
			}
		}
		return true;
	};
	if (iterResult.method === "between") {
		evalExdate(iterResult.args.after, iterResult.args.before);
		iterResult.accept = function(date) {
			var dt = Number(date);
			if (!_exdateHash[dt]) {
				_exdateHash[dt] = true;
				return _accept.call(this, date);
			}
			return true;
		};
	}
	for (var i = 0; i < _rdate.length; i++) {
		var zonedDate = new DateWithZone(_rdate[i], tzid).rezonedDate();
		if (!iterResult.accept(new Date(zonedDate.getTime()))) break;
	}
	_rrule.forEach(function(rrule) {
		iter(iterResult, rrule.options);
	});
	var res = iterResult._result;
	sort(res);
	switch (iterResult.method) {
		case "all":
		case "between": return res;
		case "before": return res.length && res[res.length - 1] || null;
		default: return res.length && res[0] || null;
	}
}
/**
* RRuleStr
* To parse a set of rrule strings
*/
var DEFAULT_OPTIONS = {
	dtstart: null,
	cache: false,
	unfold: false,
	forceset: false,
	compatible: false,
	tzid: null
};
function parseInput(s, options) {
	var rrulevals = [];
	var rdatevals = [];
	var exrulevals = [];
	var exdatevals = [];
	var parsedDtstart = parseDtstart(s);
	var dtstart = parsedDtstart.dtstart;
	var tzid = parsedDtstart.tzid;
	splitIntoLines(s, options.unfold).forEach(function(line) {
		var _a;
		if (!line) return;
		var _b = breakDownLine(line), name = _b.name, parms = _b.parms, value = _b.value;
		switch (name.toUpperCase()) {
			case "RRULE":
				if (parms.length) throw new Error("unsupported RRULE parm: ".concat(parms.join(",")));
				rrulevals.push(parseString(line));
				break;
			case "RDATE":
				var rdateTzid = ((_a = /RDATE(?:;TZID=([^:=]+))?/i.exec(line)) !== null && _a !== void 0 ? _a : [])[1];
				if (rdateTzid && !tzid) tzid = rdateTzid;
				rdatevals = rdatevals.concat(parseRDate(value, parms));
				break;
			case "EXRULE":
				if (parms.length) throw new Error("unsupported EXRULE parm: ".concat(parms.join(",")));
				exrulevals.push(parseString(value));
				break;
			case "EXDATE":
				exdatevals = exdatevals.concat(parseRDate(value, parms));
				break;
			case "DTSTART": break;
			default: throw new Error("unsupported property: " + name);
		}
	});
	return {
		dtstart,
		tzid,
		rrulevals,
		rdatevals,
		exrulevals,
		exdatevals
	};
}
function buildRule(s, options) {
	var _a = parseInput(s, options), rrulevals = _a.rrulevals, rdatevals = _a.rdatevals, exrulevals = _a.exrulevals, exdatevals = _a.exdatevals, dtstart = _a.dtstart, tzid = _a.tzid;
	var noCache = options.cache === false;
	if (options.compatible) {
		options.forceset = true;
		options.unfold = true;
	}
	if (options.forceset || rrulevals.length > 1 || rdatevals.length || exrulevals.length || exdatevals.length) {
		var rset_1 = new RRuleSet(noCache);
		rset_1.dtstart(dtstart);
		rset_1.tzid(tzid || void 0);
		rrulevals.forEach(function(val) {
			rset_1.rrule(new RRule(groomRruleOptions(val, dtstart, tzid), noCache));
		});
		rdatevals.forEach(function(date) {
			rset_1.rdate(date);
		});
		exrulevals.forEach(function(val) {
			rset_1.exrule(new RRule(groomRruleOptions(val, dtstart, tzid), noCache));
		});
		exdatevals.forEach(function(date) {
			rset_1.exdate(date);
		});
		if (options.compatible && options.dtstart) rset_1.rdate(dtstart);
		return rset_1;
	}
	var val = rrulevals[0] || {};
	return new RRule(groomRruleOptions(val, val.dtstart || options.dtstart || dtstart, val.tzid || options.tzid || tzid), noCache);
}
function rrulestr(s, options) {
	if (options === void 0) options = {};
	return buildRule(s, initializeOptions(options));
}
function groomRruleOptions(val, dtstart, tzid) {
	return __assign(__assign({}, val), {
		dtstart,
		tzid
	});
}
function initializeOptions(options) {
	var invalid = [];
	var keys = Object.keys(options);
	var defaultKeys = Object.keys(DEFAULT_OPTIONS);
	keys.forEach(function(key) {
		if (!includes(defaultKeys, key)) invalid.push(key);
	});
	if (invalid.length) throw new Error("Invalid options: " + invalid.join(", "));
	return __assign(__assign({}, DEFAULT_OPTIONS), options);
}
function extractName(line) {
	if (line.indexOf(":") === -1) return {
		name: "RRULE",
		value: line
	};
	var _a = split(line, ":", 1);
	return {
		name: _a[0],
		value: _a[1]
	};
}
function breakDownLine(line) {
	var _a = extractName(line), name = _a.name, value = _a.value;
	var parms = name.split(";");
	if (!parms) throw new Error("empty property name");
	return {
		name: parms[0].toUpperCase(),
		parms: parms.slice(1),
		value
	};
}
function splitIntoLines(s, unfold) {
	if (unfold === void 0) unfold = false;
	s = s && s.trim();
	if (!s) throw new Error("Invalid empty string");
	if (!unfold) return s.split(/\s/);
	var lines = s.split("\n");
	var i = 0;
	while (i < lines.length) {
		var line = lines[i] = lines[i].replace(/\s+$/g, "");
		if (!line) lines.splice(i, 1);
		else if (i > 0 && line[0] === " ") {
			lines[i - 1] += line.slice(1);
			lines.splice(i, 1);
		} else i += 1;
	}
	return lines;
}
function validateDateParm(parms) {
	parms.forEach(function(parm) {
		if (!/(VALUE=DATE(-TIME)?)|(TZID=)/.test(parm)) throw new Error("unsupported RDATE/EXDATE parm: " + parm);
	});
}
function parseRDate(rdateval, parms) {
	validateDateParm(parms);
	return rdateval.split(",").map(function(datestr) {
		return untilStringToDate(datestr);
	});
}
function createGetterSetter(fieldName) {
	var _this = this;
	return function(field) {
		if (field !== void 0) _this["_".concat(fieldName)] = field;
		if (_this["_".concat(fieldName)] !== void 0) return _this["_".concat(fieldName)];
		for (var i = 0; i < _this._rrule.length; i++) {
			var field_1 = _this._rrule[i].origOptions[fieldName];
			if (field_1) return field_1;
		}
	};
}
var RRuleSet = function(_super) {
	__extends(RRuleSet, _super);
	/**
	*
	* @param {Boolean?} noCache
	* The same stratagy as RRule on cache, default to false
	* @constructor
	*/
	function RRuleSet(noCache) {
		if (noCache === void 0) noCache = false;
		var _this = _super.call(this, {}, noCache) || this;
		_this.dtstart = createGetterSetter.apply(_this, ["dtstart"]);
		_this.tzid = createGetterSetter.apply(_this, ["tzid"]);
		_this._rrule = [];
		_this._rdate = [];
		_this._exrule = [];
		_this._exdate = [];
		return _this;
	}
	RRuleSet.prototype._iter = function(iterResult) {
		return iterSet(iterResult, this._rrule, this._exrule, this._rdate, this._exdate, this.tzid());
	};
	/**
	* Adds an RRule to the set
	*
	* @param {RRule}
	*/
	RRuleSet.prototype.rrule = function(rrule) {
		_addRule(rrule, this._rrule);
	};
	/**
	* Adds an EXRULE to the set
	*
	* @param {RRule}
	*/
	RRuleSet.prototype.exrule = function(rrule) {
		_addRule(rrule, this._exrule);
	};
	/**
	* Adds an RDate to the set
	*
	* @param {Date}
	*/
	RRuleSet.prototype.rdate = function(date) {
		_addDate(date, this._rdate);
	};
	/**
	* Adds an EXDATE to the set
	*
	* @param {Date}
	*/
	RRuleSet.prototype.exdate = function(date) {
		_addDate(date, this._exdate);
	};
	/**
	* Get list of included rrules in this recurrence set.
	*
	* @return List of rrules
	*/
	RRuleSet.prototype.rrules = function() {
		return this._rrule.map(function(e) {
			return rrulestr(e.toString());
		});
	};
	/**
	* Get list of excluded rrules in this recurrence set.
	*
	* @return List of exrules
	*/
	RRuleSet.prototype.exrules = function() {
		return this._exrule.map(function(e) {
			return rrulestr(e.toString());
		});
	};
	/**
	* Get list of included datetimes in this recurrence set.
	*
	* @return List of rdates
	*/
	RRuleSet.prototype.rdates = function() {
		return this._rdate.map(function(e) {
			return new Date(e.getTime());
		});
	};
	/**
	* Get list of included datetimes in this recurrence set.
	*
	* @return List of exdates
	*/
	RRuleSet.prototype.exdates = function() {
		return this._exdate.map(function(e) {
			return new Date(e.getTime());
		});
	};
	RRuleSet.prototype.valueOf = function() {
		var result = [];
		if (!this._rrule.length && this._dtstart) result = result.concat(optionsToString({ dtstart: this._dtstart }));
		this._rrule.forEach(function(rrule) {
			result = result.concat(rrule.toString().split("\n"));
		});
		this._exrule.forEach(function(exrule) {
			result = result.concat(exrule.toString().split("\n").map(function(line) {
				return line.replace(/^RRULE:/, "EXRULE:");
			}).filter(function(line) {
				return !/^DTSTART/.test(line);
			}));
		});
		if (this._rdate.length) result.push(rdatesToString("RDATE", this._rdate, this.tzid()));
		if (this._exdate.length) result.push(rdatesToString("EXDATE", this._exdate, this.tzid()));
		return result;
	};
	/**
	* to generate recurrence field such as:
	* DTSTART:19970902T010000Z
	* RRULE:FREQ=YEARLY;COUNT=2;BYDAY=TU
	* RRULE:FREQ=YEARLY;COUNT=1;BYDAY=TH
	*/
	RRuleSet.prototype.toString = function() {
		return this.valueOf().join("\n");
	};
	/**
	* Create a new RRuleSet Object completely base on current instance
	*/
	RRuleSet.prototype.clone = function() {
		var rrs = new RRuleSet(!!this._cache);
		this._rrule.forEach(function(rule) {
			return rrs.rrule(rule.clone());
		});
		this._exrule.forEach(function(rule) {
			return rrs.exrule(rule.clone());
		});
		this._rdate.forEach(function(date) {
			return rrs.rdate(new Date(date.getTime()));
		});
		this._exdate.forEach(function(date) {
			return rrs.exdate(new Date(date.getTime()));
		});
		return rrs;
	};
	return RRuleSet;
}(RRule);
function _addRule(rrule, collection) {
	if (!(rrule instanceof RRule)) throw new TypeError(String(rrule) + " is not RRule instance");
	if (!includes(collection.map(String), String(rrule))) collection.push(rrule);
}
function _addDate(date, collection) {
	if (!(date instanceof Date)) throw new TypeError(String(date) + " is not Date instance");
	if (!includes(collection.map(Number), Number(date))) {
		collection.push(date);
		sort(collection);
	}
}
function rdatesToString(param, rdates, tzid) {
	var isUTC = !tzid || tzid.toUpperCase() === "UTC";
	var header = isUTC ? "".concat(param, ":") : "".concat(param, ";TZID=").concat(tzid, ":");
	var dateString = rdates.map(function(rdate) {
		return timeToUntilString(rdate.valueOf(), isUTC);
	}).join(",");
	return "".concat(header).concat(dateString);
}
/**
* --------------------------------------------------------------------------
* CoreUI PRO scheduler-core recurrence/expand.ts
* License (https://coreui.io/pro/license/)
* --------------------------------------------------------------------------
* The ONLY seam where rrule meets Temporal. rrule expands in floating time
* (UTC-flagged dates carrying wall-clock digits); each occurrence's wall
* clock is then resolved to the instance time zone with
* `disambiguation: 'compatible'`, and occurrence ends are start + the
* template's exact duration (RFC 5545). rrule's own `tzid` is never used.
*/
const CACHE_LIMIT = 500;
const cache = /* @__PURE__ */ new Map();
function expandEvent(event, window, timeZone) {
	const cacheKey = `${JSON.stringify(event)}|${timeZone}|${window.start.epochMilliseconds}|${window.end.epochMilliseconds}`;
	const cached = cache.get(cacheKey);
	if (cached) return cached;
	const start = toZoned(event.start, timeZone);
	const end = toZoned(event.end, timeZone);
	const occurrences = event.rrule ? expandRecurring(event, start, end, window, timeZone) : overlaps(start, end, window) ? [makeOccurrence(event, start, end, false)] : [];
	if (cache.size >= CACHE_LIMIT) cache.delete(cache.keys().next().value);
	cache.set(cacheKey, occurrences);
	return occurrences;
}
function expandEvents(events, window, timeZone) {
	return events.flatMap((event) => expandEvent(event, window, timeZone)).toSorted((a, b) => Temporal.ZonedDateTime.compare(a.start, b.start) || (a.key < b.key ? -1 : 1));
}
function expandRecurring(event, start, end, window, timeZone) {
	const duration = exactDuration(start, end);
	const rule = parseRule(event.rrule, toFloating(start));
	const lookbehind = window.start.toInstant().subtract(duration).toZonedDateTimeISO(timeZone);
	const floatingOccurrences = rule.between(toFloating(lookbehind), toFloating(window.end), true);
	const excluded = new Set((event.exdates ?? []).map((exdate) => toZoned(exdate, timeZone).toPlainDateTime().toString()));
	const occurrences = [];
	for (const floating of floatingOccurrences) {
		const occurrenceStart = fromFloating(floating, timeZone);
		if (excluded.has(occurrenceStart.toPlainDateTime().toString())) continue;
		const occurrenceEnd = occurrenceStart.add(duration);
		if (overlaps(occurrenceStart, occurrenceEnd, window)) occurrences.push(makeOccurrence(event, occurrenceStart, occurrenceEnd, true));
	}
	return occurrences;
}
function makeOccurrence(event, start, end, recurring) {
	return {
		event,
		key: `${event.id}@${start.toString({ timeZoneName: "never" })}`,
		start,
		end,
		allDay: Boolean(event.allDay),
		recurring
	};
}
function parseRule(rrule, dtstart) {
	const options = RRule.parseString(rrule.replace(/^RRULE:/i, "").trim());
	options.dtstart = dtstart;
	return new RRule(options);
}
/** Wall-clock digits re-labelled as UTC — the floating-time convention rrule expects. */
function toFloating(value) {
	return new Date(Date.UTC(value.year, value.month - 1, value.day, value.hour, value.minute, value.second));
}
function fromFloating(value, timeZone) {
	return new Temporal.PlainDateTime(value.getUTCFullYear(), value.getUTCMonth() + 1, value.getUTCDate(), value.getUTCHours(), value.getUTCMinutes(), value.getUTCSeconds()).toZonedDateTime(timeZone, { disambiguation: "compatible" });
}
/**
* --------------------------------------------------------------------------
* CoreUI PRO scheduler-core state/store.ts
* License (https://coreui.io/pro/license/)
* --------------------------------------------------------------------------
*/
function createSchedulerStore(options = {}) {
	const timeZone = options.timeZone ?? systemTimeZone();
	const store = new Store({
		date: options.date ? toPlainDate(options.date, timeZone).toString() : todayISO(timeZone),
		events: options.events ? [...options.events] : [],
		resources: options.resources ? [...options.resources] : [],
		selection: [],
		timeZone,
		view: options.view ?? "week"
	});
	const patch = (partial) => {
		store.setState((state) => ({
			...state,
			...partial
		}));
	};
	return {
		store,
		setDate(date) {
			patch({ date: toPlainDate(date, store.state.timeZone).toString() });
		},
		setView(view) {
			patch({ view });
		},
		navigate(direction, stepDays) {
			if (direction === "today") {
				patch({ date: todayISO(store.state.timeZone) });
				return;
			}
			const { view } = store.state;
			const sign = direction === "next" ? 1 : -1;
			const anchor = toPlainDate(store.state.date, store.state.timeZone);
			if (view === "month") {
				patch({ date: anchor.add({ months: sign }).toString() });
				return;
			}
			const days = stepDays ?? (view === "week" ? 7 : view === "agenda" ? 14 : 1);
			patch({ date: anchor.add({ days: days * sign }).toString() });
		},
		setEvents(events) {
			patch({ events: [...events] });
		},
		setResources(resources) {
			patch({ resources: [...resources] });
		},
		setSelection(selection) {
			patch({ selection: [...selection] });
		},
		/** Applies an event change and returns a revert function for `eventChange` payloads. */
		applyPatch(change) {
			const previous = store.state.events;
			const scope = change.scope ?? "occurrence";
			if (change.action === "create") patch({ events: [...previous, change.event] });
			else if (change.action === "delete") patch({ events: deleteEvents(previous, change, scope, store.state.timeZone) });
			else if (change.event.rrule && change.occurrenceKey) {
				if (scope === "future") patch({ events: splitSeries(previous, change, store.state.timeZone) });
				else if (scope === "all") patch({ events: shiftSeries(previous, change, store.state.timeZone) });
				else patch({ events: detachOccurrence(previous, change) });
			} else patch({ events: previous.map((event) => event.id === change.event.id ? change.event : event) });
			return () => patch({ events: previous });
		}
	};
}
function excludeOccurrence(events, change) {
	const occurrenceStart = change.occurrenceKey.slice(change.event.id.length + 1);
	return events.map((event) => event.id === change.event.id ? {
		...event,
		exdates: [...event.exdates ?? [], occurrenceStart]
	} : event);
}
/**
* "This occurrence only" edit: the series gains an EXDATE for the dragged
* occurrence and the change materializes as a standalone one-off event.
*/
function detachOccurrence(events, change) {
	const occurrenceStart = change.occurrenceKey.slice(change.event.id.length + 1);
	const detached = {
		...change.event,
		id: `${change.event.id}@${occurrenceStart}`,
		rrule: void 0,
		exdates: void 0
	};
	return [...events.map((event) => event.id === change.event.id ? {
		...event,
		exdates: [...event.exdates ?? [], occurrenceStart]
	} : event), detached];
}
function deleteEvents(events, change, scope, timeZone) {
	if (!change.event.rrule || !change.occurrenceKey || scope === "all") return events.filter((event) => event.id !== change.event.id);
	if (scope === "future") return truncateSeries(events, change, timeZone);
	return excludeOccurrence(events, change);
}
const pad = (value, length = 2) => String(value).padStart(length, "0");
const occurrenceStartOf = (change) => change.occurrenceKey.slice(change.event.id.length + 1);
const stripRuleParts = (rrule, parts) => rrule.replace(/^RRULE:/i, "").split(";").filter((entry) => !parts.includes(entry.split("=")[0].toUpperCase())).join(";");
/** Floating RRULE UNTIL just before the given wall-clock instant. */
const untilBefore = (occurrenceStart, timeZone) => {
	const boundary = toZoned(occurrenceStart, timeZone).toPlainDateTime().subtract({ seconds: 1 });
	return `${pad(boundary.year, 4)}${pad(boundary.month)}${pad(boundary.day)}T${pad(boundary.hour)}${pad(boundary.minute)}${pad(boundary.second)}`;
};
/** Ends the original series just before the edited occurrence. */
function truncateSeries(events, change, timeZone) {
	const occurrenceStart = occurrenceStartOf(change);
	return events.map((event) => event.id === change.event.id ? {
		...event,
		rrule: `${stripRuleParts(event.rrule, ["UNTIL", "COUNT"])};UNTIL=${untilBefore(occurrenceStart, timeZone)}`
	} : event);
}
/**
* "This and future": the original series ends just before the edited
* occurrence and the remainder becomes a new series starting at the edited
* time. COUNT is dropped on split and the new series starts with no
* exdates — documented limitations until the full RRULE editor.
*/
function splitSeries(events, change, timeZone) {
	const occurrenceStart = occurrenceStartOf(change);
	const remainder = {
		...change.event,
		id: `${change.event.id}@${occurrenceStart}`,
		rrule: stripRuleParts(change.event.rrule, ["COUNT"]),
		exdates: void 0
	};
	return [...truncateSeries(events, change, timeZone), remainder];
}
/** Applies the edit's wall-clock delta to the whole series. */
function shiftSeries(events, change, timeZone) {
	const occurrenceStart = toZoned(occurrenceStartOf(change), timeZone).toPlainDateTime();
	const newStart = toZoned(change.event.start, timeZone).toPlainDateTime();
	const delta = occurrenceStart.until(newStart, { largestUnit: "hour" });
	const newDuration = toZoned(change.event.start, timeZone).toPlainDateTime().until(toZoned(change.event.end, timeZone).toPlainDateTime(), { largestUnit: "hour" });
	return events.map((event) => {
		if (event.id !== change.event.id) return event;
		const seriesStart = toZoned(event.start, timeZone).toPlainDateTime().add(delta);
		return {
			...change.event,
			id: event.id,
			start: seriesStart.toString(),
			end: seriesStart.add(newDuration).toString()
		};
	});
}
function getVisibleDays(state, firstDayOfWeek = 1) {
	const anchor = toPlainDate(state.date, state.timeZone);
	if (state.view !== "week") return [anchor];
	const first = startOfWeek(anchor, firstDayOfWeek);
	return Array.from({ length: 7 }, (_, index) => first.add({ days: index }));
}
function computeViewModel(state, options = {}) {
	const { firstDayOfWeek = 1, dayStartMinutes = 0, dayEndMinutes = MINUTES_IN_DAY, ...layoutOptions } = options;
	const { timeZone } = state;
	const days = getVisibleDays(state, firstDayOfWeek);
	const window = {
		start: days[0].toZonedDateTime({ timeZone }),
		end: days[days.length - 1].add({ days: 1 }).toZonedDateTime({ timeZone })
	};
	const columns = state.view === "resource" ? state.resources.map((resource) => ({
		key: `${days[0].toString()}|${resource.id}`,
		date: days[0],
		dateISO: days[0].toString(),
		resourceId: resource.id,
		label: resource.label ?? resource.id
	})) : days.map((day) => ({
		key: day.toString(),
		date: day,
		dateISO: day.toString()
	}));
	const occurrences = expandEvents(state.events, window, timeZone);
	const timed = occurrences.filter((occurrence) => !occurrence.allDay);
	const allDay = occurrences.filter((occurrence) => occurrence.allDay);
	const columnItems = columns.map(() => []);
	const itemMeta = /* @__PURE__ */ new Map();
	for (const occurrence of timed) {
		const inColumns = state.view === "resource" ? columns.flatMap((column, index) => column.resourceId === occurrence.event.resourceId ? [index] : []) : null;
		if (state.view === "resource" && inColumns?.length === 0) continue;
		const segments = segmentIntoDays(occurrence, days, timeZone);
		for (const [segmentIndex, segment] of segments.entries()) {
			const startMinutes = Math.max(segment.startMinutes, dayStartMinutes);
			const endMinutes = Math.min(segment.endMinutes, dayEndMinutes);
			if (startMinutes >= endMinutes) continue;
			const columnIndex = state.view === "resource" ? inColumns[0] : segment.dayIndex;
			const key = `${occurrence.key}#${segment.dayIndex}`;
			columnItems[columnIndex].push({
				key,
				startMinutes,
				endMinutes
			});
			itemMeta.set(key, {
				occurrence,
				continuesBefore: segmentIndex > 0,
				continuesAfter: segmentIndex < segments.length - 1
			});
		}
	}
	return {
		days,
		columns,
		window,
		occurrences,
		columnLayouts: columns.map((column, index) => ({
			column,
			boxes: layoutColumn(columnItems[index], layoutOptions).map((box) => {
				const meta = itemMeta.get(box.key);
				return {
					...box,
					...meta
				};
			}),
			allDay: allDay.filter((occurrence) => {
				if (state.view === "resource" && occurrence.event.resourceId !== column.resourceId) return false;
				const dayWindow = {
					start: column.date.toZonedDateTime({ timeZone }),
					end: column.date.add({ days: 1 }).toZonedDateTime({ timeZone })
				};
				return overlaps(occurrence.start, occurrence.end, dayWindow);
			})
		}))
	};
}
function getMonthDays(state, firstDayOfWeek = 1) {
	const anchor = toPlainDate(state.date, state.timeZone);
	const first = startOfWeek(anchor.with({ day: 1 }), firstDayOfWeek);
	const gridEnd = startOfWeek(anchor.with({ day: anchor.daysInMonth }), firstDayOfWeek).add({ days: 7 });
	const length = first.until(gridEnd).total({ unit: "days" });
	return Array.from({ length }, (_, index) => first.add({ days: index }));
}
function getAgendaDays(state, agendaDays = 14) {
	const anchor = toPlainDate(state.date, state.timeZone);
	return Array.from({ length: agendaDays }, (_, index) => anchor.add({ days: index }));
}
/** Per-day occurrence lists for the month and agenda views (all-day first, then by start). */
function computeDayListModel(state, days) {
	const { timeZone } = state;
	const window = {
		start: days[0].toZonedDateTime({ timeZone }),
		end: days[days.length - 1].add({ days: 1 }).toZonedDateTime({ timeZone })
	};
	const occurrences = expandEvents(state.events, window, timeZone);
	return days.map((date) => {
		const dayWindow = {
			start: date.toZonedDateTime({ timeZone }),
			end: date.add({ days: 1 }).toZonedDateTime({ timeZone })
		};
		return {
			date,
			dateISO: date.toString(),
			occurrences: occurrences.filter((occurrence) => overlaps(occurrence.start, occurrence.end, dayWindow)).toSorted((a, b) => Number(b.allDay) - Number(a.allDay))
		};
	});
}
/**
* Horizontal resource-timeline model: one row per resource, bars measured in
* wall-clock minute offsets from the window start (continuous across days —
* midnight-crossing bars are NOT split), overlaps stacked into sub-lanes by
* the same interval-partitioning layout the day columns use.
*/
function computeTimelineModel(state, days, layoutOptions = {}) {
	const { timeZone } = state;
	const totalMinutes = days.length * MINUTES_IN_DAY;
	const window = {
		start: days[0].toZonedDateTime({ timeZone }),
		end: days[days.length - 1].add({ days: 1 }).toZonedDateTime({ timeZone })
	};
	const occurrences = expandEvents(state.events, window, timeZone);
	const offsetOf = (value) => {
		return days[0].until(value.toPlainDate()).total({ unit: "days" }) * MINUTES_IN_DAY + minutesInDay(value);
	};
	return {
		days,
		window,
		occurrences,
		rows: state.resources.map((resource) => {
			const itemMeta = /* @__PURE__ */ new Map();
			const items = [];
			for (const occurrence of occurrences) {
				if (occurrence.event.resourceId !== resource.id) continue;
				const rawStart = occurrence.allDay ? days[0].until(occurrence.start.toPlainDate()).total({ unit: "days" }) * MINUTES_IN_DAY : offsetOf(occurrence.start);
				const rawEnd = occurrence.allDay ? days[0].until(occurrence.end.toPlainDate()).total({ unit: "days" }) * MINUTES_IN_DAY : offsetOf(occurrence.end);
				const startMinutes = Math.max(rawStart, 0);
				const endMinutes = Math.min(rawEnd, totalMinutes);
				if (startMinutes >= endMinutes) continue;
				const key = `${occurrence.key}#t`;
				items.push({
					key,
					startMinutes,
					endMinutes
				});
				itemMeta.set(key, {
					occurrence,
					continuesBefore: rawStart < 0,
					continuesAfter: rawEnd > totalMinutes
				});
			}
			const boxes = layoutColumn(items, layoutOptions).map((box) => ({
				...box,
				...itemMeta.get(box.key)
			}));
			return {
				resource,
				boxes,
				laneCount: Math.max(1, ...boxes.map((box) => box.track + 1))
			};
		}),
		totalMinutes
	};
}
/** Lane a timeline drag ghost occupies: the grabbed bar's, clamped to the target row. */
function timelinePreviewTrack(model, occurrenceKey, rowIndex) {
	const source = model.rows.flatMap((row) => row.boxes).find((box) => box.occurrence.key === occurrenceKey);
	return Math.min(source?.track ?? 0, Math.max(model.rows[rowIndex]?.laneCount ?? 1, 1) - 1);
}
/**
* Month-grid model with week-spanning bars: occurrences covering more than
* one day render as bars per week row (lane-stacked, clipped at week edges
* with continuation flags); single-day occurrences stay in their day's chip
* list.
*/
function computeMonthModel(state, days) {
	const { timeZone } = state;
	const window = {
		start: days[0].toZonedDateTime({ timeZone }),
		end: days[days.length - 1].add({ days: 1 }).toZonedDateTime({ timeZone })
	};
	const occurrences = expandEvents(state.events, window, timeZone);
	const lastIndex = days.length - 1;
	const span = (occurrence) => {
		const firstDate = occurrence.start.toPlainDate();
		const lastDate = occurrence.allDay ? occurrence.end.toPlainDate().subtract({ days: 1 }) : occurrence.end.subtract({ minutes: 1 }).toPlainDate();
		return {
			first: days[0].until(firstDate).total({ unit: "days" }),
			last: days[0].until(lastDate).total({ unit: "days" })
		};
	};
	const multiDay = occurrences.filter((occurrence) => {
		const { first, last } = span(occurrence);
		return last > first;
	});
	const singles = occurrences.filter((occurrence) => !multiDay.includes(occurrence));
	const dayLists = days.map((date) => {
		const dayWindow = {
			start: date.toZonedDateTime({ timeZone }),
			end: date.add({ days: 1 }).toZonedDateTime({ timeZone })
		};
		return {
			date,
			dateISO: date.toString(),
			occurrences: singles.filter((occurrence) => overlaps(occurrence.start, occurrence.end, dayWindow)).toSorted((a, b) => Number(b.allDay) - Number(a.allDay))
		};
	});
	const weeks = [];
	for (let weekStart = 0; weekStart <= lastIndex; weekStart += 7) {
		const weekEnd = Math.min(weekStart + 6, lastIndex);
		const items = [];
		const meta = /* @__PURE__ */ new Map();
		for (const occurrence of multiDay) {
			const { first, last } = span(occurrence);
			if (last < weekStart || first > weekEnd) continue;
			const startCol = Math.max(first - weekStart, 0);
			const endCol = Math.min(last - weekStart, weekEnd - weekStart);
			const key = `${occurrence.key}#w${weekStart}`;
			items.push({
				key,
				startMinutes: startCol,
				endMinutes: endCol + 1
			});
			meta.set(key, {
				key,
				occurrence,
				startCol,
				endCol,
				lane: 0,
				continuesBefore: first < weekStart,
				continuesAfter: last > weekEnd
			});
		}
		const boxes = layoutColumn(items);
		const bars = boxes.map((box) => ({
			...meta.get(box.key),
			lane: box.track
		}));
		weeks.push({
			days: dayLists.slice(weekStart, weekEnd + 1),
			bars,
			laneCount: Math.max(0, ...boxes.map((box) => box.track + 1))
		});
	}
	return {
		days,
		weeks,
		occurrences
	};
}
//#endregion
//#region src/dom/data.ts
/**
* --------------------------------------------------------------------------
* CoreUI dom/data.ts
* Licensed under MIT (https://github.com/coreui/coreui/blob/main/LICENSE)
*
* This is a modified version of the Bootstrap's dom/data.js
* Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
* --------------------------------------------------------------------------
*/
/**
* Constants
*/
const elementMap = /* @__PURE__ */ new Map();
var data_default = {
	set(element, key, instance) {
		if (!elementMap.has(element)) elementMap.set(element, /* @__PURE__ */ new Map());
		const instanceMap = elementMap.get(element);
		if (!instanceMap.has(key) && instanceMap.size !== 0) {
			console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(instanceMap.keys())[0]}.`);
			return;
		}
		instanceMap.set(key, instance);
	},
	get(element, key) {
		if (elementMap.has(element)) return elementMap.get(element).get(key) || null;
		return null;
	},
	remove(element, key) {
		if (!elementMap.has(element)) return;
		const instanceMap = elementMap.get(element);
		instanceMap.delete(key);
		if (instanceMap.size === 0) elementMap.delete(element);
	}
};
//#endregion
//#region src/util/index.ts
const MILLISECONDS_MULTIPLIER = 1e3;
const TRANSITION_END = "transitionend";
/**
* Properly escape IDs selectors to handle weird IDs
* @param {string} selector
* @returns {string}
*/
const parseSelector = (selector) => {
	if (selector && window.CSS && window.CSS.escape) selector = selector.replace(/#([^\s"#']+)/g, (match, id) => `#${CSS.escape(id)}`);
	return selector;
};
const toType = (object) => {
	if (object === null || object === void 0) return `${object}`;
	return Object.prototype.toString.call(object).match(/\s([a-z]+)/i)[1].toLowerCase();
};
const getTransitionDurationFromElement = (element) => {
	if (!element) return 0;
	let { transitionDuration, transitionDelay } = window.getComputedStyle(element);
	if (!Number.parseFloat(transitionDuration) && !Number.parseFloat(transitionDelay)) return 0;
	transitionDuration = transitionDuration.split(",")[0];
	transitionDelay = transitionDelay.split(",")[0];
	return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
};
const triggerTransitionEnd = (element) => {
	element.dispatchEvent(new Event(TRANSITION_END));
};
const isElement = (object) => {
	if (!object || typeof object !== "object") return false;
	if (typeof object.jquery !== "undefined") object = object[0];
	return typeof object.nodeType !== "undefined";
};
const getElement = (object) => {
	if (isElement(object)) return object.jquery ? object[0] : object;
	if (typeof object === "string" && object.length > 0) return document.querySelector(parseSelector(object));
	return null;
};
const getjQuery = () => {
	if (window.jQuery && !document.body.hasAttribute("data-coreui-no-jquery")) return window.jQuery;
	return null;
};
const execute = (possibleCallback, args = [], defaultValue = possibleCallback) => {
	return typeof possibleCallback === "function" ? possibleCallback.call(...args) : defaultValue;
};
const executeAfterTransition = (callback, transitionElement, waitForTransition = true) => {
	if (!waitForTransition) {
		execute(callback);
		return;
	}
	const emulatedDuration = getTransitionDurationFromElement(transitionElement) + 5;
	let called = false;
	const handler = ({ target }) => {
		if (target !== transitionElement) return;
		called = true;
		transitionElement.removeEventListener(TRANSITION_END, handler);
		execute(callback);
	};
	transitionElement.addEventListener(TRANSITION_END, handler);
	setTimeout(() => {
		if (!called) triggerTransitionEnd(transitionElement);
	}, emulatedDuration);
};
//#endregion
//#region src/dom/event-handler.ts
/**
* --------------------------------------------------------------------------
* CoreUI dom/event-handler.ts
* Licensed under MIT (https://github.com/coreui/coreui/blob/main/LICENSE)
*
* This is a modified version of the Bootstrap's dom/event-handler.ts
* Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
* --------------------------------------------------------------------------
*/
/**
* Constants
*/
const namespaceRegex = /[^.]*(?=\..*)\.|.*/;
const stripNameRegex = /\..*/;
const stripUidRegex = /::\d+$/;
const eventRegistry = {};
let uidEvent = 1;
const customEvents = {
	mouseenter: "mouseover",
	mouseleave: "mouseout"
};
const nativeEvents = /* @__PURE__ */ new Set([
	"click",
	"dblclick",
	"mouseup",
	"mousedown",
	"contextmenu",
	"mousewheel",
	"DOMMouseScroll",
	"mouseover",
	"mouseout",
	"mousemove",
	"selectstart",
	"selectend",
	"keydown",
	"keypress",
	"keyup",
	"beforeinput",
	"copy",
	"cut",
	"paste",
	"orientationchange",
	"touchstart",
	"touchmove",
	"touchend",
	"touchcancel",
	"pointerdown",
	"pointermove",
	"pointerup",
	"pointerleave",
	"pointercancel",
	"drag",
	"dragstart",
	"dragend",
	"dragenter",
	"dragleave",
	"dragover",
	"drop",
	"gesturestart",
	"gesturechange",
	"gestureend",
	"focus",
	"blur",
	"change",
	"input",
	"reset",
	"select",
	"submit",
	"focusin",
	"focusout",
	"load",
	"unload",
	"beforeunload",
	"resize",
	"move",
	"DOMContentLoaded",
	"readystatechange",
	"error",
	"abort",
	"scroll"
]);
/**
* Private methods
*/
function makeEventUid(element, uid) {
	return uid && `${uid}::${uidEvent++}` || element.uidEvent || uidEvent++;
}
function getElementEvents(element) {
	const uid = makeEventUid(element);
	element.uidEvent = uid;
	eventRegistry[uid] = eventRegistry[uid] || {};
	return eventRegistry[uid];
}
function isMouseEventWithinTarget(event) {
	const { delegateTarget, relatedTarget } = event;
	return Boolean(relatedTarget && delegateTarget.contains(relatedTarget));
}
function bootstrapHandler(element, fn, handlerTypeEvent) {
	const isCustomMouseEvent = handlerTypeEvent in customEvents;
	return function handler(event) {
		const coreuiEvent = hydrateObj(event, { delegateTarget: element });
		if (isCustomMouseEvent && isMouseEventWithinTarget(coreuiEvent)) return;
		if (handler.oneOff) EventHandler.off(element, handlerTypeEvent, fn);
		return fn.apply(element, [coreuiEvent]);
	};
}
function bootstrapDelegationHandler(element, selector, fn, handlerTypeEvent) {
	const isCustomMouseEvent = handlerTypeEvent in customEvents;
	return function handler(event) {
		const domElements = element.querySelectorAll(selector);
		for (let { target } = event; target && target !== this; target = target.parentNode) for (const domElement of domElements) {
			if (domElement !== target) continue;
			const coreuiEvent = hydrateObj(event, { delegateTarget: target });
			if (isCustomMouseEvent && isMouseEventWithinTarget(coreuiEvent)) return;
			if (handler.oneOff) EventHandler.off(element, handlerTypeEvent, selector, fn);
			return fn.apply(target, [coreuiEvent]);
		}
	};
}
function findHandler(events, callable, handlerTypeEvent, delegationSelector = null) {
	return Object.values(events).find((event) => event.callable === callable && event.handlerTypeEvent === handlerTypeEvent && event.delegationSelector === delegationSelector);
}
function normalizeParameters(originalTypeEvent, handler, delegationFunction) {
	const isDelegated = typeof handler === "string";
	const callable = isDelegated ? delegationFunction : handler || delegationFunction;
	const baseTypeEvent = originalTypeEvent.replace(stripNameRegex, "");
	let typeEvent = customEvents[baseTypeEvent] || baseTypeEvent;
	if (!nativeEvents.has(typeEvent)) typeEvent = originalTypeEvent;
	const handlerTypeEvent = baseTypeEvent in customEvents ? baseTypeEvent : typeEvent;
	return {
		isDelegated,
		callable,
		typeEvent,
		handlerTypeEvent
	};
}
function addHandler(element, originalTypeEvent, handler, delegationFunction, oneOff) {
	if (typeof originalTypeEvent !== "string" || !element) return;
	const { isDelegated, callable, typeEvent, handlerTypeEvent } = normalizeParameters(originalTypeEvent, handler, delegationFunction);
	const events = getElementEvents(element);
	const handlers = events[typeEvent] || (events[typeEvent] = {});
	const previousFunction = findHandler(handlers, callable, handlerTypeEvent, isDelegated ? handler : null);
	if (previousFunction) {
		previousFunction.oneOff = previousFunction.oneOff && oneOff;
		return;
	}
	const uid = makeEventUid(callable, originalTypeEvent.replace(namespaceRegex, ""));
	const fn = isDelegated ? bootstrapDelegationHandler(element, handler, callable, handlerTypeEvent) : bootstrapHandler(element, callable, handlerTypeEvent);
	fn.delegationSelector = isDelegated ? handler : null;
	fn.callable = callable;
	fn.handlerTypeEvent = handlerTypeEvent;
	fn.oneOff = oneOff;
	fn.uidEvent = uid;
	handlers[uid] = fn;
	element.addEventListener(typeEvent, fn, isDelegated);
}
function removeHandler(element, events, typeEvent, handler) {
	element.removeEventListener(typeEvent, handler, Boolean(handler.delegationSelector));
	delete events[typeEvent][handler.uidEvent];
}
function removeNamespacedHandlers(element, events, typeEvent, namespace) {
	const storeElementEvent = events[typeEvent] || {};
	for (const [handlerKey, event] of Object.entries(storeElementEvent)) if (handlerKey.includes(namespace)) removeHandler(element, events, typeEvent, event);
}
function getTypeEvent(event) {
	event = event.replace(stripNameRegex, "");
	return customEvents[event] || event;
}
const EventHandler = {
	on(element, event, handler, delegationFunction) {
		addHandler(element, event, handler, delegationFunction, false);
	},
	one(element, event, handler, delegationFunction) {
		addHandler(element, event, handler, delegationFunction, true);
	},
	off(element, originalTypeEvent, handler, delegationFunction) {
		if (typeof originalTypeEvent !== "string" || !element) return;
		const { isDelegated, callable, typeEvent, handlerTypeEvent } = normalizeParameters(originalTypeEvent, handler, delegationFunction);
		const inNamespace = typeEvent !== originalTypeEvent && handlerTypeEvent !== originalTypeEvent;
		const events = getElementEvents(element);
		const storeElementEvent = events[typeEvent] || {};
		const isNamespace = originalTypeEvent.startsWith(".");
		if (typeof callable !== "undefined") {
			if (!Object.keys(storeElementEvent).length) return;
			const fn = findHandler(storeElementEvent, callable, handlerTypeEvent, isDelegated ? handler : null);
			if (fn) removeHandler(element, events, typeEvent, fn);
			return;
		}
		if (isNamespace) for (const elementEvent of Object.keys(events)) removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
		for (const [keyHandlers, event] of Object.entries(storeElementEvent)) {
			const handlerKey = keyHandlers.replace(stripUidRegex, "");
			if (event.handlerTypeEvent === handlerTypeEvent && (!inNamespace || originalTypeEvent.includes(handlerKey))) removeHandler(element, events, typeEvent, event);
		}
	},
	trigger(element, event, args) {
		if (typeof event !== "string" || !element) return null;
		const $ = getjQuery();
		const inNamespace = event !== getTypeEvent(event);
		let jQueryEvent = null;
		let bubbles = true;
		let nativeDispatch = true;
		let defaultPrevented = false;
		if (inNamespace && $) {
			jQueryEvent = $.Event(event, args);
			$(element).trigger(jQueryEvent);
			bubbles = !jQueryEvent.isPropagationStopped();
			nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
			defaultPrevented = jQueryEvent.isDefaultPrevented();
		}
		const evt = hydrateObj(new Event(event, {
			bubbles,
			cancelable: true
		}), args);
		if (defaultPrevented) evt.preventDefault();
		if (nativeDispatch) element.dispatchEvent(evt);
		if (evt.defaultPrevented && jQueryEvent) jQueryEvent.preventDefault();
		return evt;
	}
};
function hydrateObj(obj, meta = {}) {
	for (const [key, value] of Object.entries(meta)) try {
		obj[key] = value;
	} catch {
		Object.defineProperty(obj, key, {
			configurable: true,
			get() {
				return value;
			}
		});
	}
	return obj;
}
//#endregion
//#region src/dom/manipulator.ts
/**
* --------------------------------------------------------------------------
* CoreUI dom/manipulator.ts
* Licensed under MIT (https://github.com/coreui/coreui/blob/main/LICENSE)
*
* This is a modified version of the Bootstrap's dom/manipulator.ts
* Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
* --------------------------------------------------------------------------
*/
function normalizeData(value) {
	if (value === "true") return true;
	if (value === "false") return false;
	if (value === Number(value).toString()) return Number(value);
	if (value === "" || value === "null") return null;
	if (typeof value !== "string") return value;
	try {
		return JSON.parse(decodeURIComponent(value));
	} catch {
		return value;
	}
}
function normalizeDataKey(key) {
	return key.replace(/[A-Z]/g, (chr) => `-${chr.toLowerCase()}`);
}
const Manipulator = {
	setDataAttribute(element, key, value) {
		element.setAttribute(`data-coreui-${normalizeDataKey(key)}`, value);
	},
	removeDataAttribute(element, key) {
		element.removeAttribute(`data-coreui-${normalizeDataKey(key)}`);
	},
	getDataAttributes(element) {
		if (!element) return {};
		const attributes = {};
		const coreuiKeys = Object.keys(element.dataset).filter((key) => key.startsWith("coreui") && !key.startsWith("coreuiConfig"));
		for (const key of coreuiKeys) {
			let pureKey = key.replace(/^coreui/, "");
			pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1);
			attributes[pureKey] = normalizeData(element.dataset[key]);
		}
		return attributes;
	},
	getDataAttribute(element, key) {
		return normalizeData(element.getAttribute(`data-coreui-${normalizeDataKey(key)}`));
	}
};
//#endregion
//#region src/util/config.ts
/**
* --------------------------------------------------------------------------
* CoreUI util/config.ts
* Licensed under MIT (https://github.com/coreui/coreui/blob/main/LICENSE)
*
* This is a modified version of the Bootstrap's util/config.ts
* Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
* --------------------------------------------------------------------------
*/
/**
* Class definition
*/
var Config = class {
	static get Default() {
		return {};
	}
	static get DefaultType() {
		return {};
	}
	static get NAME() {
		throw new Error("You have to implement the static method \"NAME\", for each component!");
	}
	_getConfig(config) {
		config = this._mergeConfigObj(config);
		config = this._configAfterMerge(config);
		this._typeCheckConfig(config);
		return config;
	}
	_configAfterMerge(config) {
		return config;
	}
	_mergeConfigObj(config, element) {
		const jsonConfig = isElement(element) ? Manipulator.getDataAttribute(element, "config") : {};
		return {
			...this.constructor.Default,
			...typeof jsonConfig === "object" ? jsonConfig : {},
			...isElement(element) ? Manipulator.getDataAttributes(element) : {},
			...typeof config === "object" ? config : {}
		};
	}
	_typeCheckConfig(config, configTypes = this.constructor.DefaultType) {
		for (const [property, expectedTypes] of Object.entries(configTypes)) {
			const value = config[property];
			const valueType = isElement(value) ? "element" : toType(value);
			if (!new RegExp(expectedTypes).test(valueType)) throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);
		}
	}
};
//#endregion
//#region src/base-component.ts
/**
* --------------------------------------------------------------------------
* CoreUI base-component.ts
* Licensed under MIT (https://github.com/coreui/coreui/blob/main/LICENSE)
*
* This component is a modified version of the Bootstrap's base-component.ts
* Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
* --------------------------------------------------------------------------
*/
/**
* Constants
*/
const VERSION = "0.1.0";
/**
* Class definition
*/
var BaseComponent = class extends Config {
	constructor(element, config) {
		super();
		element = getElement(element);
		if (!element) return;
		this._element = element;
		this._config = this._getConfig(config);
		data_default.set(this._element, this.constructor.DATA_KEY, this);
	}
	dispose() {
		data_default.remove(this._element, this.constructor.DATA_KEY);
		EventHandler.off(this._element, this.constructor.EVENT_KEY);
		for (const propertyName of Object.getOwnPropertyNames(this)) this[propertyName] = null;
	}
	_queueCallback(callback, element, isAnimated = true) {
		executeAfterTransition(callback, element, isAnimated);
	}
	_getConfig(config) {
		config = this._mergeConfigObj(config, this._element);
		config = this._configAfterMerge(config);
		this._typeCheckConfig(config);
		return config;
	}
	static getInstance(element) {
		return data_default.get(getElement(element), this.DATA_KEY);
	}
	static getOrCreateInstance(element, config = {}) {
		return this.getInstance(element) || new this(element, typeof config === "object" ? config : null);
	}
	static get VERSION() {
		return VERSION;
	}
	static get DATA_KEY() {
		return `coreui.${this.NAME}`;
	}
	static get EVENT_KEY() {
		return `.${this.DATA_KEY}`;
	}
	static eventName(name) {
		return `${name}${this.EVENT_KEY}`;
	}
};
//#endregion
//#region ../../node_modules/@tanstack/virtual-core/dist/esm/lazy-measurements.js
function createLazyMeasurementsView(count, flat, getItemKey) {
	const cache = new Array(count);
	return new Proxy(cache, { get(target, prop, receiver) {
		if (typeof prop === "string") {
			const c = prop.charCodeAt(0);
			if (c >= 48 && c <= 57) {
				const i = +prop;
				if (Number.isInteger(i) && i >= 0 && i < count) {
					let v = target[i];
					if (!v) {
						const s = flat[i * 2];
						v = target[i] = {
							index: i,
							key: getItemKey(i),
							start: s,
							size: flat[i * 2 + 1],
							end: s + flat[i * 2 + 1],
							lane: 0
						};
					}
					return v;
				}
			}
			if (prop === "length") return count;
		}
		return Reflect.get(target, prop, receiver);
	} });
}
//#endregion
//#region ../../node_modules/@tanstack/virtual-core/dist/esm/utils.js
function memo(getDeps, fn, opts) {
	let deps = opts.initialDeps ?? [];
	let result;
	let isInitial = true;
	function memoizedFunction() {
		const newDeps = getDeps();
		if (!(newDeps.length !== deps.length || newDeps.some((dep, index) => deps[index] !== dep))) return result;
		deps = newDeps;
		result = fn(...newDeps);
		if ((opts == null ? void 0 : opts.onChange) && !(isInitial && opts.skipInitialOnChange)) opts.onChange(result);
		isInitial = false;
		return result;
	}
	memoizedFunction.updateDeps = (newDeps) => {
		deps = newDeps;
	};
	return memoizedFunction;
}
function notUndefined(value, msg) {
	if (value === void 0) throw new Error(`Unexpected undefined${msg ? `: ${msg}` : ""}`);
	else return value;
}
const approxEqual = (a, b) => Math.abs(a - b) < 1.01;
const debounce = (targetWindow, fn, ms) => {
	let timeoutId;
	return function(...args) {
		targetWindow.clearTimeout(timeoutId);
		timeoutId = targetWindow.setTimeout(() => fn.apply(this, args), ms);
	};
};
//#endregion
//#region ../../node_modules/@tanstack/virtual-core/dist/esm/index.js
let _isIOSResult;
const isIOSWebKit = () => {
	if (_isIOSResult !== void 0) return _isIOSResult;
	if (typeof navigator === "undefined") return _isIOSResult = false;
	if (/iP(hone|od|ad)/.test(navigator.userAgent)) return _isIOSResult = true;
	const mtp = navigator.maxTouchPoints;
	return _isIOSResult = navigator.platform === "MacIntel" && mtp !== void 0 && mtp > 0;
};
const getRect = (element) => {
	const { offsetWidth, offsetHeight } = element;
	return {
		width: offsetWidth,
		height: offsetHeight
	};
};
const defaultKeyExtractor = (index) => index;
const defaultRangeExtractor = (range) => {
	const start = Math.max(range.startIndex - range.overscan, 0);
	const len = Math.min(range.endIndex + range.overscan, range.count - 1) - start + 1;
	const arr = new Array(len);
	for (let i = 0; i < len; i++) arr[i] = start + i;
	return arr;
};
const observeElementRect = (instance, cb) => {
	const element = instance.scrollElement;
	if (!element) return;
	const targetWindow = instance.targetWindow;
	if (!targetWindow) return;
	const handler = (rect) => {
		const { width, height } = rect;
		cb({
			width: Math.round(width),
			height: Math.round(height)
		});
	};
	handler(getRect(element));
	if (!targetWindow.ResizeObserver) return () => {};
	const observer = new targetWindow.ResizeObserver((entries) => {
		const run = () => {
			const entry = entries[0];
			if (entry == null ? void 0 : entry.borderBoxSize) {
				const box = entry.borderBoxSize[0];
				if (box) {
					handler({
						width: box.inlineSize,
						height: box.blockSize
					});
					return;
				}
			}
			handler(getRect(element));
		};
		instance.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(run) : run();
	});
	observer.observe(element, { box: "border-box" });
	return () => {
		observer.unobserve(element);
	};
};
const addEventListenerOptions = { passive: true };
const supportsScrollend = typeof window == "undefined" ? true : "onscrollend" in window;
const observeOffset = (instance, cb, readOffset) => {
	const element = instance.scrollElement;
	if (!element) return;
	const targetWindow = instance.targetWindow;
	if (!targetWindow) return;
	const registerScrollendEvent = instance.options.useScrollendEvent && supportsScrollend;
	let offset = 0;
	const fallback = registerScrollendEvent ? null : debounce(targetWindow, () => cb(offset, false), instance.options.isScrollingResetDelay);
	const createHandler = (isScrolling) => () => {
		offset = readOffset(element);
		fallback?.();
		cb(offset, isScrolling);
	};
	const handler = createHandler(true);
	const endHandler = createHandler(false);
	element.addEventListener("scroll", handler, addEventListenerOptions);
	if (registerScrollendEvent) element.addEventListener("scrollend", endHandler, addEventListenerOptions);
	return () => {
		element.removeEventListener("scroll", handler);
		if (registerScrollendEvent) element.removeEventListener("scrollend", endHandler);
	};
};
const observeElementOffset = (instance, cb) => observeOffset(instance, cb, (el) => {
	const { horizontal, isRtl } = instance.options;
	return horizontal ? el.scrollLeft * (isRtl && -1 || 1) : el.scrollTop;
});
const measureElement = (element, entry, instance) => {
	if (instance.options.useCachedMeasurements) {
		const index = instance.indexFromElement(element);
		const key = instance.options.getItemKey(index);
		return instance.itemSizeCache.get(key) ?? instance.options.estimateSize(index);
	}
	if (entry == null ? void 0 : entry.borderBoxSize) {
		const box = entry.borderBoxSize[0];
		if (box) return Math.round(box[instance.options.horizontal ? "inlineSize" : "blockSize"]);
	}
	if (!entry) {
		const index = instance.indexFromElement(element);
		const key = instance.options.getItemKey(index);
		const cachedSize = instance.itemSizeCache.get(key);
		if (cachedSize !== void 0) return cachedSize;
	}
	return element[instance.options.horizontal ? "offsetWidth" : "offsetHeight"];
};
const scrollWithAdjustments = (offset, { adjustments = 0, behavior }, instance) => {
	var _a, _b;
	(_b = (_a = instance.scrollElement) == null ? void 0 : _a.scrollTo) == null || _b.call(_a, {
		[instance.options.horizontal ? "left" : "top"]: offset + adjustments,
		behavior
	});
};
const elementScroll = scrollWithAdjustments;
var Virtualizer = class {
	constructor(opts) {
		this.unsubs = [];
		this.scrollElement = null;
		this.targetWindow = null;
		this.isScrolling = false;
		this.scrollState = null;
		this.measurementsCache = [];
		this._flatMeasurements = null;
		this.itemSizeCache = /* @__PURE__ */ new Map();
		this.itemSizeCacheVersion = 0;
		this.laneAssignments = /* @__PURE__ */ new Map();
		this.pendingMin = null;
		this.prevLanes = void 0;
		this.lanesChangedFlag = false;
		this.lanesSettling = false;
		this.pendingScrollAnchor = null;
		this.scrollRect = null;
		this.scrollOffset = null;
		this.scrollDirection = null;
		this.scrollAdjustments = 0;
		this._iosDeferredAdjustment = 0;
		this._iosTouching = false;
		this._iosJustTouchEnded = false;
		this._iosTouchEndTimerId = null;
		this._intendedScrollOffset = null;
		this.elementsCache = /* @__PURE__ */ new Map();
		this.now = () => {
			var _a, _b, _c;
			return ((_c = (_b = (_a = this.targetWindow) == null ? void 0 : _a.performance) == null ? void 0 : _b.now) == null ? void 0 : _c.call(_b)) ?? Date.now();
		};
		this.observer = /* @__PURE__ */ (() => {
			let _ro = null;
			const get = () => {
				if (_ro) return _ro;
				if (!this.targetWindow || !this.targetWindow.ResizeObserver) return null;
				return _ro = new this.targetWindow.ResizeObserver((entries) => {
					entries.forEach((entry) => {
						const run = () => {
							const node = entry.target;
							const index = this.indexFromElement(node);
							if (!node.isConnected) {
								this.observer.unobserve(node);
								for (const [cacheKey, cachedNode] of this.elementsCache) if (cachedNode === node) {
									this.elementsCache.delete(cacheKey);
									break;
								}
								return;
							}
							if (this.shouldMeasureDuringScroll(index)) this.resizeItem(index, this.options.measureElement(node, entry, this));
						};
						this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(run) : run();
					});
				});
			};
			return {
				disconnect: () => {
					var _a;
					(_a = get()) == null || _a.disconnect();
					_ro = null;
				},
				observe: (target) => {
					var _a;
					return (_a = get()) == null ? void 0 : _a.observe(target, { box: "border-box" });
				},
				unobserve: (target) => {
					var _a;
					return (_a = get()) == null ? void 0 : _a.unobserve(target);
				}
			};
		})();
		this.range = null;
		this.setOptions = (opts2) => {
			var _a, _b;
			const merged = {
				debug: false,
				initialOffset: 0,
				overscan: 1,
				paddingStart: 0,
				paddingEnd: 0,
				scrollPaddingStart: 0,
				scrollPaddingEnd: 0,
				horizontal: false,
				getItemKey: defaultKeyExtractor,
				rangeExtractor: defaultRangeExtractor,
				onChange: () => {},
				measureElement,
				initialRect: {
					width: 0,
					height: 0
				},
				scrollMargin: 0,
				gap: 0,
				indexAttribute: "data-index",
				initialMeasurementsCache: [],
				lanes: 1,
				anchorTo: "start",
				followOnAppend: false,
				scrollEndThreshold: 1,
				isScrollingResetDelay: 150,
				enabled: true,
				isRtl: false,
				useScrollendEvent: false,
				useAnimationFrameWithResizeObserver: false,
				laneAssignmentMode: "estimate",
				useCachedMeasurements: false
			};
			for (const key in opts2) {
				const v = opts2[key];
				if (v !== void 0) merged[key] = v;
			}
			const prevOptions = this.options;
			let anchor = null;
			let followOnAppend = null;
			let edgeKeysChanged = false;
			if (prevOptions !== void 0 && prevOptions.enabled && merged.enabled && merged.anchorTo === "end" && this.scrollElement !== null) {
				const prevCount = prevOptions.count;
				const nextCount = merged.count;
				const measurements = this.getMeasurements();
				const prevFirstKey = prevCount > 0 ? ((_a = measurements[0]) == null ? void 0 : _a.key) ?? prevOptions.getItemKey(0) : null;
				const prevLastKey = prevCount > 0 ? ((_b = measurements[prevCount - 1]) == null ? void 0 : _b.key) ?? prevOptions.getItemKey(prevCount - 1) : null;
				if (nextCount !== prevCount || prevCount > 0 && nextCount > 0 && (merged.getItemKey(0) !== prevFirstKey || merged.getItemKey(nextCount - 1) !== prevLastKey)) {
					edgeKeysChanged = true;
					const item = prevCount > 0 ? this.getVirtualItemForOffset(this.getScrollOffset()) ?? measurements[0] : null;
					if (item) anchor = [item.key, this.getScrollOffset() - item.start];
					const behavior = merged.followOnAppend === true ? "auto" : merged.followOnAppend || null;
					if (behavior && nextCount > prevCount && this.isAtEnd(prevOptions.scrollEndThreshold) && (prevCount === 0 || merged.getItemKey(nextCount - 1) !== prevLastKey)) followOnAppend = behavior;
				}
			}
			this.options = merged;
			if (edgeKeysChanged) {
				this.pendingMin = 0;
				this.itemSizeCacheVersion++;
			}
			let anchorResolved = false;
			let anchorDelta = 0;
			if (anchor && this.scrollOffset !== null) {
				const [anchorKey, anchorOffset] = anchor;
				const newMeasurements = this.getMeasurements();
				const { count, getItemKey } = this.options;
				let idx = 0;
				while (idx < count && getItemKey(idx) !== anchorKey) idx++;
				if (idx < count) {
					const anchorItem = newMeasurements[idx];
					if (anchorItem) {
						const newOffset = Math.max(0, anchorItem.start + anchorOffset);
						if (newOffset !== this.scrollOffset) {
							anchorDelta = newOffset - this.scrollOffset;
							this.scrollOffset = newOffset;
							anchorResolved = true;
						}
					}
				}
			}
			if (anchorResolved || followOnAppend) this.pendingScrollAnchor = [
				anchorResolved ? anchor[0] : null,
				anchorResolved ? anchor[1] : 0,
				followOnAppend,
				anchorDelta
			];
		};
		this.notify = (sync) => {
			var _a, _b;
			(_b = (_a = this.options).onChange) == null || _b.call(_a, this, sync);
		};
		this.maybeNotify = memo(() => {
			this.calculateRange();
			return [
				this.isScrolling,
				this.range ? this.range.startIndex : null,
				this.range ? this.range.endIndex : null
			];
		}, (isScrolling) => {
			this.notify(isScrolling);
		}, {
			key: false,
			debug: () => this.options.debug,
			initialDeps: [
				this.isScrolling,
				this.range ? this.range.startIndex : null,
				this.range ? this.range.endIndex : null
			]
		});
		this.cleanup = () => {
			this.unsubs.filter(Boolean).forEach((d) => d());
			this.unsubs = [];
			this.observer.disconnect();
			if (this.rafId != null && this.targetWindow) {
				this.targetWindow.cancelAnimationFrame(this.rafId);
				this.rafId = null;
			}
			this.scrollState = null;
			this._iosDeferredAdjustment = 0;
			this._iosTouching = false;
			this._iosJustTouchEnded = false;
			this.scrollElement = null;
			this.targetWindow = null;
		};
		this._didMount = () => {
			return () => {
				this.cleanup();
			};
		};
		this._willUpdate = () => {
			var _a;
			const scrollElement = this.options.enabled ? this.options.getScrollElement() : null;
			if (this.scrollElement !== scrollElement) {
				this.cleanup();
				if (!scrollElement) {
					this.maybeNotify();
					return;
				}
				this.scrollElement = scrollElement;
				if (this.scrollElement && "ownerDocument" in this.scrollElement) this.targetWindow = this.scrollElement.ownerDocument.defaultView;
				else this.targetWindow = ((_a = this.scrollElement) == null ? void 0 : _a.window) ?? null;
				this.elementsCache.forEach((cached) => {
					this.observer.observe(cached);
				});
				this.unsubs.push(this.options.observeElementRect(this, (rect) => {
					this.scrollRect = rect;
					this.maybeNotify();
				}));
				this.unsubs.push(this.options.observeElementOffset(this, (offset, isScrolling) => {
					if (isScrolling && this._intendedScrollOffset === null && offset === this.scrollOffset) return;
					if (this._intendedScrollOffset !== null && Math.abs(offset - this._intendedScrollOffset) < 1.5) offset = this._intendedScrollOffset;
					this._intendedScrollOffset = null;
					this.scrollAdjustments = 0;
					const prevOffset = this.getScrollOffset();
					this.scrollDirection = isScrolling ? prevOffset === offset ? this.scrollDirection : prevOffset < offset ? "forward" : "backward" : null;
					this.scrollOffset = offset;
					this.isScrolling = isScrolling;
					this._flushIosDeferredIfReady();
					if (this.scrollState) this.scheduleScrollReconcile();
					this.maybeNotify();
				}));
				if ("addEventListener" in this.scrollElement) {
					const scrollEl = this.scrollElement;
					const onTouchStart = () => {
						this._iosTouching = true;
						this._iosJustTouchEnded = false;
						if (this._iosTouchEndTimerId !== null && this.targetWindow != null) {
							this.targetWindow.clearTimeout(this._iosTouchEndTimerId);
							this._iosTouchEndTimerId = null;
						}
					};
					const onTouchEnd = () => {
						this._iosTouching = false;
						if (!isIOSWebKit() || this.targetWindow == null) return;
						this._iosJustTouchEnded = true;
						this._iosTouchEndTimerId = this.targetWindow.setTimeout(() => {
							this._iosJustTouchEnded = false;
							this._iosTouchEndTimerId = null;
							this._flushIosDeferredIfReady();
						}, 150);
					};
					scrollEl.addEventListener("touchstart", onTouchStart, addEventListenerOptions);
					scrollEl.addEventListener("touchend", onTouchEnd, addEventListenerOptions);
					this.unsubs.push(() => {
						scrollEl.removeEventListener("touchstart", onTouchStart);
						scrollEl.removeEventListener("touchend", onTouchEnd);
						if (this._iosTouchEndTimerId !== null && this.targetWindow != null) {
							this.targetWindow.clearTimeout(this._iosTouchEndTimerId);
							this._iosTouchEndTimerId = null;
						}
					});
				}
				this._scrollToOffset(this.getScrollOffset(), {
					adjustments: void 0,
					behavior: void 0
				});
			}
			const anchor = this.pendingScrollAnchor;
			this.pendingScrollAnchor = null;
			if (anchor && this.scrollElement && this.options.enabled) {
				const [key, _offset, followOnAppend, anchorDelta] = anchor;
				if (key !== null && !followOnAppend) {
					if (isIOSWebKit() && (this.isScrolling || this._iosTouching || this._iosJustTouchEnded)) {
						if (anchorDelta !== 0) this._iosDeferredAdjustment += anchorDelta;
					} else this._scrollToOffset(this.getScrollOffset(), {
						adjustments: void 0,
						behavior: void 0
					});
				}
				if (followOnAppend) this.scrollToEnd({ behavior: followOnAppend });
			}
		};
		this._flushIosDeferredIfReady = () => {
			if (this._iosDeferredAdjustment === 0) return;
			if (this.isScrolling) return;
			if (this._iosTouching) return;
			if (this._iosJustTouchEnded) return;
			const cur = this.getScrollOffset();
			const max = this.getMaxScrollOffset();
			if (cur < 0 || cur > max) return;
			if (this._iosDeferredAdjustment < 0 && cur >= max - 1) {
				this._iosDeferredAdjustment = 0;
				return;
			}
			const delta = this._iosDeferredAdjustment;
			this._iosDeferredAdjustment = 0;
			this._scrollToOffset(cur, {
				adjustments: this.scrollAdjustments += delta,
				behavior: void 0
			});
		};
		this.rafId = null;
		this.getSize = () => {
			if (!this.options.enabled) {
				this.scrollRect = null;
				return 0;
			}
			this.scrollRect = this.scrollRect ?? this.options.initialRect;
			return this.scrollRect[this.options.horizontal ? "width" : "height"];
		};
		this.getScrollOffset = () => {
			if (!this.options.enabled) {
				this.scrollOffset = null;
				return 0;
			}
			this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset === "function" ? this.options.initialOffset() : this.options.initialOffset);
			return this.scrollOffset;
		};
		this.getMeasurementOptions = memo(() => [
			this.options.count,
			this.options.paddingStart,
			this.options.scrollMargin,
			this.options.getItemKey,
			this.options.enabled,
			this.options.lanes,
			this.options.laneAssignmentMode,
			this.options.gap
		], (count, paddingStart, scrollMargin, getItemKey, enabled, lanes, laneAssignmentMode, gap) => {
			if (this.prevLanes !== void 0 && this.prevLanes !== lanes) this.lanesChangedFlag = true;
			this.prevLanes = lanes;
			this.pendingMin = null;
			return {
				count,
				paddingStart,
				scrollMargin,
				getItemKey,
				enabled,
				lanes,
				laneAssignmentMode,
				gap
			};
		}, { key: false });
		this.getMeasurements = memo(() => [this.getMeasurementOptions(), this.itemSizeCacheVersion], ({ count, paddingStart, scrollMargin, getItemKey, enabled, lanes, laneAssignmentMode, gap }, _itemSizeCacheVersion) => {
			const itemSizeCache = this.itemSizeCache;
			if (!enabled) {
				this.measurementsCache = [];
				this.itemSizeCache.clear();
				this.laneAssignments.clear();
				return [];
			}
			if (this.laneAssignments.size > count) {
				for (const index of this.laneAssignments.keys()) if (index >= count) this.laneAssignments.delete(index);
			}
			if (this.lanesChangedFlag) {
				this.lanesChangedFlag = false;
				this.lanesSettling = true;
				this.measurementsCache = [];
				this.itemSizeCache.clear();
				this.laneAssignments.clear();
				this.pendingMin = null;
			}
			if (this.measurementsCache.length === 0 && !this.lanesSettling) {
				this.measurementsCache = this.options.initialMeasurementsCache;
				this.measurementsCache.forEach((item) => {
					this.itemSizeCache.set(item.key, item.size);
				});
			}
			const min = this.lanesSettling ? 0 : this.pendingMin ?? 0;
			this.pendingMin = null;
			if (this.lanesSettling && this.measurementsCache.length === count) this.lanesSettling = false;
			if (lanes === 1) {
				const need = count * 2;
				let flat = this._flatMeasurements;
				if (!flat || flat.length < need) {
					const next = new Float64Array(need);
					if (flat && min > 0) next.set(flat.subarray(0, min * 2));
					flat = next;
					this._flatMeasurements = flat;
				}
				let runningStart;
				if (min === 0) runningStart = paddingStart + scrollMargin;
				else {
					const prevIdx = min - 1;
					runningStart = flat[prevIdx * 2] + flat[prevIdx * 2 + 1] + gap;
				}
				for (let i = min; i < count; i++) {
					const key = getItemKey(i);
					const measuredSize = itemSizeCache.get(key);
					const size = typeof measuredSize === "number" ? measuredSize : this.options.estimateSize(i);
					flat[i * 2] = runningStart;
					flat[i * 2 + 1] = size;
					runningStart += size + gap;
				}
				const view = createLazyMeasurementsView(count, flat, getItemKey);
				this.measurementsCache = view;
				return view;
			}
			const measurements = this.measurementsCache.slice(0, min);
			const laneLastIndex = new Array(lanes).fill(void 0);
			const laneEnds = new Float64Array(lanes);
			let filledLanes = 0;
			for (let m = 0; m < min; m++) {
				const item = measurements[m];
				if (item) {
					if (laneLastIndex[item.lane] === void 0) filledLanes++;
					laneLastIndex[item.lane] = m;
					laneEnds[item.lane] = item.end;
				}
			}
			for (let i = min; i < count; i++) {
				const key = getItemKey(i);
				const cachedLane = this.laneAssignments.get(i);
				let lane;
				let start;
				const shouldCacheLane = laneAssignmentMode === "estimate" || itemSizeCache.has(key);
				if (cachedLane !== void 0 && this.options.lanes > 1) {
					lane = cachedLane;
					const prevIndex = laneLastIndex[lane];
					const prevInLane = prevIndex !== void 0 ? measurements[prevIndex] : void 0;
					start = prevInLane ? prevInLane.end + gap : paddingStart + scrollMargin;
				} else if (filledLanes === lanes) {
					let bestLane = 0;
					let bestEnd = laneEnds[0];
					let bestIdx = laneLastIndex[0];
					for (let l = 1; l < lanes; l++) {
						const e = laneEnds[l];
						if (e < bestEnd || e === bestEnd && laneLastIndex[l] < bestIdx) {
							bestLane = l;
							bestEnd = e;
							bestIdx = laneLastIndex[l];
						}
					}
					lane = bestLane;
					start = bestEnd + gap;
					if (shouldCacheLane) this.laneAssignments.set(i, lane);
				} else {
					lane = i % this.options.lanes;
					start = paddingStart + scrollMargin;
					if (shouldCacheLane) this.laneAssignments.set(i, lane);
				}
				const measuredSize = itemSizeCache.get(key);
				const size = typeof measuredSize === "number" ? measuredSize : this.options.estimateSize(i);
				const end = start + size;
				measurements[i] = {
					index: i,
					start,
					size,
					end,
					key,
					lane
				};
				if (laneLastIndex[lane] === void 0) filledLanes++;
				laneLastIndex[lane] = i;
				laneEnds[lane] = end;
			}
			this.measurementsCache = measurements;
			return measurements;
		}, {
			key: false,
			debug: () => this.options.debug
		});
		this.calculateRange = memo(() => [
			this.getMeasurements(),
			this.getSize(),
			this.getScrollOffset(),
			this.options.lanes
		], (measurements, outerSize, scrollOffset, lanes) => {
			if (measurements.length === 0 || outerSize === 0) {
				this.range = null;
				return null;
			}
			this.range = calculateRangeImpl(measurements, outerSize, scrollOffset, lanes, lanes === 1 && this._flatMeasurements != null ? this._flatMeasurements : null);
			return this.range;
		}, {
			key: false,
			debug: () => this.options.debug
		});
		this.getVirtualIndexes = memo(() => {
			let startIndex = null;
			let endIndex = null;
			const range = this.calculateRange();
			if (range) {
				startIndex = range.startIndex;
				endIndex = range.endIndex;
			}
			this.maybeNotify.updateDeps([
				this.isScrolling,
				startIndex,
				endIndex
			]);
			return [
				this.options.rangeExtractor,
				this.options.overscan,
				this.options.count,
				startIndex,
				endIndex
			];
		}, (rangeExtractor, overscan, count, startIndex, endIndex) => {
			return startIndex === null || endIndex === null ? [] : rangeExtractor({
				startIndex,
				endIndex,
				overscan,
				count
			});
		}, {
			key: false,
			debug: () => this.options.debug
		});
		this.indexFromElement = (node) => {
			const attributeName = this.options.indexAttribute;
			const indexStr = node.getAttribute(attributeName);
			if (!indexStr) {
				console.warn(`Missing attribute name '${attributeName}={index}' on measured element.`);
				return -1;
			}
			return parseInt(indexStr, 10);
		};
		this.shouldMeasureDuringScroll = (index) => {
			var _a;
			if (!this.scrollState || this.scrollState.behavior !== "smooth") return true;
			const scrollIndex = this.scrollState.index ?? ((_a = this.getVirtualItemForOffset(this.scrollState.lastTargetOffset)) == null ? void 0 : _a.index);
			if (scrollIndex !== void 0 && this.range) {
				const bufferSize = Math.max(this.options.overscan, Math.ceil((this.range.endIndex - this.range.startIndex) / 2));
				const minIndex = Math.max(0, scrollIndex - bufferSize);
				const maxIndex = Math.min(this.options.count - 1, scrollIndex + bufferSize);
				return index >= minIndex && index <= maxIndex;
			}
			return true;
		};
		this.measureElement = (node) => {
			if (!node) {
				this.elementsCache.forEach((cached, key2) => {
					if (!cached.isConnected) {
						this.observer.unobserve(cached);
						this.elementsCache.delete(key2);
					}
				});
				return;
			}
			const index = this.indexFromElement(node);
			const key = this.options.getItemKey(index);
			const prevNode = this.elementsCache.get(key);
			if (prevNode !== node) {
				if (prevNode) this.observer.unobserve(prevNode);
				this.observer.observe(node);
				this.elementsCache.set(key, node);
			}
			if ((!this.isScrolling || this.scrollState) && this.shouldMeasureDuringScroll(index)) this.resizeItem(index, this.options.measureElement(node, void 0, this));
		};
		this.resizeItem = (index, size) => {
			var _a, _b;
			if (index < 0 || index >= this.options.count) return;
			let cachedSize;
			let itemStart;
			let key;
			const flat = this._flatMeasurements;
			if (this.options.lanes === 1 && flat !== null) {
				key = this.options.getItemKey(index);
				itemStart = flat[index * 2];
				cachedSize = flat[index * 2 + 1];
			} else {
				const item = this.measurementsCache[index];
				if (!item) return;
				key = item.key;
				itemStart = item.start;
				cachedSize = item.size;
			}
			const itemSize = this.itemSizeCache.get(key) ?? cachedSize;
			const delta = size - itemSize;
			if (delta !== 0) {
				const wasAtEnd = this.options.anchorTo === "end" && ((_a = this.scrollState) == null ? void 0 : _a.behavior) !== "smooth" && this.getVirtualDistanceFromEnd() <= this.options.scrollEndThreshold;
				const prevTotalSize = wasAtEnd ? this.getTotalSize() : 0;
				const scrollOffsetWithAdj = this.getScrollOffset() + this.scrollAdjustments;
				const defaultShouldAdjust = !this.itemSizeCache.has(key) ? itemStart < scrollOffsetWithAdj : itemStart + itemSize <= scrollOffsetWithAdj && this.scrollDirection !== "backward";
				const shouldAdjustScroll = ((_b = this.scrollState) == null ? void 0 : _b.behavior) !== "smooth" && (this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(this.measurementsCache[index] ?? {
					index,
					key,
					start: itemStart,
					size: cachedSize,
					end: itemStart + cachedSize,
					lane: 0
				}, delta, this) : defaultShouldAdjust);
				if (this.pendingMin === null || index < this.pendingMin) this.pendingMin = index;
				this.itemSizeCache.set(key, size);
				this.itemSizeCacheVersion++;
				let adjustedSync = false;
				if (wasAtEnd) adjustedSync = this.applyScrollAdjustment(this.getTotalSize() - prevTotalSize);
				else if (shouldAdjustScroll) adjustedSync = this.applyScrollAdjustment(delta);
				this.notify(adjustedSync);
			}
		};
		this.getVirtualItems = memo(() => [this.getVirtualIndexes(), this.getMeasurements()], (indexes, measurements) => {
			const virtualItems = [];
			for (let k = 0, len = indexes.length; k < len; k++) {
				const measurement = measurements[indexes[k]];
				virtualItems.push(measurement);
			}
			return virtualItems;
		}, {
			key: false,
			debug: () => this.options.debug
		});
		this.getVirtualItemForOffset = (offset) => {
			const measurements = this.getMeasurements();
			if (measurements.length === 0) return;
			const flat = this._flatMeasurements;
			const useFlat = this.options.lanes === 1 && flat != null;
			return notUndefined(measurements[findNearestBinarySearch(0, measurements.length - 1, useFlat ? (i) => flat[i * 2] : (i) => notUndefined(measurements[i]).start, offset)]);
		};
		this.getMaxScrollOffset = () => {
			if (!this.scrollElement) return 0;
			if ("scrollHeight" in this.scrollElement) return this.options.horizontal ? this.scrollElement.scrollWidth - this.scrollElement.clientWidth : this.scrollElement.scrollHeight - this.scrollElement.clientHeight;
			else {
				const doc = this.scrollElement.document.documentElement;
				return this.options.horizontal ? doc.scrollWidth - this.scrollElement.innerWidth : doc.scrollHeight - this.scrollElement.innerHeight;
			}
		};
		this.getVirtualDistanceFromEnd = () => {
			return Math.max(this.getTotalSize() - this.getSize() - this.getScrollOffset(), 0);
		};
		this.getDistanceFromEnd = () => {
			return Math.max(this.getMaxScrollOffset() - this.getScrollOffset(), 0);
		};
		this.isAtEnd = (threshold = this.options.scrollEndThreshold) => {
			return this.getDistanceFromEnd() <= threshold;
		};
		this.getOffsetForAlignment = (toOffset, align, itemSize = 0) => {
			if (!this.scrollElement) return 0;
			const size = this.getSize();
			const scrollOffset = this.getScrollOffset();
			if (align === "auto") align = toOffset >= scrollOffset + size ? "end" : "start";
			if (align === "center") toOffset += (itemSize - size) / 2;
			else if (align === "end") toOffset -= size;
			const maxOffset = this.getMaxScrollOffset();
			return Math.max(Math.min(maxOffset, toOffset), 0);
		};
		this.getOffsetForIndex = (index, align = "auto") => {
			index = Math.max(0, Math.min(index, this.options.count - 1));
			const size = this.getSize();
			const scrollOffset = this.getScrollOffset();
			const item = this.measurementsCache[index];
			if (!item) return;
			if (align === "auto") {
				if (item.end >= scrollOffset + size - this.options.scrollPaddingEnd) align = "end";
				else if (item.start <= scrollOffset + this.options.scrollPaddingStart) align = "start";
				else return [scrollOffset, align];
			}
			if (align === "end" && index === this.options.count - 1) return [this.getMaxScrollOffset(), align];
			const toOffset = align === "end" ? item.end + this.options.scrollPaddingEnd : item.start - this.options.scrollPaddingStart;
			return [this.getOffsetForAlignment(toOffset, align, item.size), align];
		};
		this.scrollToOffset = (toOffset, { align = "start", behavior = "auto" } = {}) => {
			this._iosDeferredAdjustment = 0;
			const offset = this.getOffsetForAlignment(toOffset, align);
			const now = this.now();
			this.scrollState = {
				index: null,
				align,
				behavior,
				startedAt: now,
				lastTargetOffset: offset,
				stableFrames: 0
			};
			this._scrollToOffset(offset, {
				adjustments: void 0,
				behavior
			});
			this.scheduleScrollReconcile();
		};
		this.scrollToIndex = (index, { align: initialAlign = "auto", behavior = "auto" } = {}) => {
			this._iosDeferredAdjustment = 0;
			index = Math.max(0, Math.min(index, this.options.count - 1));
			const offsetInfo = this.getOffsetForIndex(index, initialAlign);
			if (!offsetInfo) return;
			const [offset, align] = offsetInfo;
			const now = this.now();
			this.scrollState = {
				index,
				align,
				behavior,
				startedAt: now,
				lastTargetOffset: offset,
				stableFrames: 0
			};
			this._scrollToOffset(offset, {
				adjustments: void 0,
				behavior
			});
			this.scheduleScrollReconcile();
		};
		this.scrollBy = (delta, { behavior = "auto" } = {}) => {
			const offset = this.getScrollOffset() + delta;
			const now = this.now();
			this.scrollState = {
				index: null,
				align: "start",
				behavior,
				startedAt: now,
				lastTargetOffset: offset,
				stableFrames: 0
			};
			this._scrollToOffset(offset, {
				adjustments: void 0,
				behavior
			});
			this.scheduleScrollReconcile();
		};
		this.scrollToEnd = ({ behavior = "auto" } = {}) => {
			if (this.options.count > 0) {
				this.scrollToIndex(this.options.count - 1, {
					align: "end",
					behavior
				});
				return;
			}
			this.scrollToOffset(Math.max(this.getTotalSize() - this.getSize(), 0), { behavior });
		};
		this.getTotalSize = () => {
			var _a;
			const measurements = this.getMeasurements();
			let end;
			if (measurements.length === 0) end = this.options.paddingStart;
			else if (this.options.lanes === 1) {
				const lastIdx = measurements.length - 1;
				const flat = this._flatMeasurements;
				if (flat != null) end = flat[lastIdx * 2] + flat[lastIdx * 2 + 1];
				else end = ((_a = measurements[lastIdx]) == null ? void 0 : _a.end) ?? 0;
			} else {
				const endByLane = Array(this.options.lanes).fill(null);
				let endIndex = measurements.length - 1;
				while (endIndex >= 0 && endByLane.some((val) => val === null)) {
					const item = measurements[endIndex];
					if (endByLane[item.lane] === null) endByLane[item.lane] = item.end;
					endIndex--;
				}
				end = Math.max(...endByLane.filter((val) => val !== null));
			}
			return Math.max(end - this.options.scrollMargin + this.options.paddingEnd, 0);
		};
		this.takeSnapshot = () => {
			const snapshot = [];
			if (this.itemSizeCache.size === 0) return snapshot;
			const m = this.getMeasurements();
			for (const item of m) if (item && this.itemSizeCache.has(item.key)) snapshot.push({
				index: item.index,
				key: item.key,
				start: item.start,
				size: item.size,
				end: item.end,
				lane: item.lane
			});
			return snapshot;
		};
		this._scrollToOffset = (offset, { adjustments, behavior }) => {
			this._intendedScrollOffset = offset + (adjustments ?? 0);
			this.options.scrollToFn(offset, {
				behavior,
				adjustments
			}, this);
		};
		this.measure = () => {
			this.pendingMin = null;
			this.itemSizeCache.clear();
			this.laneAssignments.clear();
			this.itemSizeCacheVersion++;
			this.notify(false);
		};
		this.setOptions(opts);
	}
	applyScrollAdjustment(delta, behavior) {
		if (delta === 0) return false;
		if (isIOSWebKit() && (this.isScrolling || this._iosTouching || this._iosJustTouchEnded)) {
			this._iosDeferredAdjustment += delta;
			return false;
		} else {
			this._scrollToOffset(this.getScrollOffset(), {
				adjustments: this.scrollAdjustments += delta,
				behavior
			});
			if (this.scrollOffset !== null) {
				this.scrollOffset += this.scrollAdjustments;
				if (this.scrollOffset < 0) this.scrollOffset = 0;
				this.scrollAdjustments = 0;
			}
			return true;
		}
	}
	scheduleScrollReconcile() {
		if (!this.targetWindow) {
			this.scrollState = null;
			return;
		}
		if (this.rafId != null) return;
		this.rafId = this.targetWindow.requestAnimationFrame(() => {
			this.rafId = null;
			this.reconcileScroll();
		});
	}
	reconcileScroll() {
		if (!this.scrollState) return;
		if (!this.scrollElement) return;
		if (this.now() - this.scrollState.startedAt > 5e3) {
			this.scrollState = null;
			return;
		}
		const offsetInfo = this.scrollState.index != null ? this.getOffsetForIndex(this.scrollState.index, this.scrollState.align) : void 0;
		const targetOffset = offsetInfo ? offsetInfo[0] : this.scrollState.lastTargetOffset;
		const STABLE_FRAMES = 1;
		const targetChanged = targetOffset !== this.scrollState.lastTargetOffset;
		if (!targetChanged && approxEqual(targetOffset, this.getScrollOffset())) {
			this.scrollState.stableFrames++;
			if (this.scrollState.stableFrames >= STABLE_FRAMES) {
				if (this.getScrollOffset() !== targetOffset) this._scrollToOffset(targetOffset, {
					adjustments: void 0,
					behavior: "auto"
				});
				this.scrollState = null;
				return;
			}
		} else {
			this.scrollState.stableFrames = 0;
			if (targetChanged) {
				const viewport = this.getSize() || 600;
				const distance = Math.abs(targetOffset - this.getScrollOffset());
				const keepSmooth = this.scrollState.behavior === "smooth" && distance > viewport;
				this.scrollState.lastTargetOffset = targetOffset;
				if (!keepSmooth) this.scrollState.behavior = "auto";
				this._scrollToOffset(targetOffset, {
					adjustments: void 0,
					behavior: keepSmooth ? "smooth" : "auto"
				});
			}
		}
		this.scheduleScrollReconcile();
	}
};
const findNearestBinarySearch = (low, high, getCurrentValue, value) => {
	while (low <= high) {
		const middle = (low + high) / 2 | 0;
		const currentValue = getCurrentValue(middle);
		if (currentValue < value) low = middle + 1;
		else if (currentValue > value) high = middle - 1;
		else return middle;
	}
	if (low > 0) return low - 1;
	else return 0;
};
function findNearestBinarySearchFlat(flat, high, value) {
	let low = 0;
	while (low <= high) {
		const middle = (low + high) / 2 | 0;
		const currentValue = flat[middle * 2];
		if (currentValue < value) low = middle + 1;
		else if (currentValue > value) high = middle - 1;
		else return middle;
	}
	return low > 0 ? low - 1 : 0;
}
function calculateRangeImpl(measurements, outerSize, scrollOffset, lanes, flat) {
	const lastIndex = measurements.length - 1;
	if (measurements.length <= lanes) return {
		startIndex: 0,
		endIndex: lastIndex
	};
	if (lanes === 1 && flat !== null) {
		const startIndex2 = findNearestBinarySearchFlat(flat, lastIndex, scrollOffset);
		let endIndex2 = startIndex2;
		const limit = scrollOffset + outerSize;
		while (endIndex2 < lastIndex && flat[endIndex2 * 2] + flat[endIndex2 * 2 + 1] < limit) endIndex2++;
		return {
			startIndex: startIndex2,
			endIndex: endIndex2
		};
	}
	const getStart = (index) => measurements[index].start;
	let startIndex = findNearestBinarySearch(0, lastIndex, getStart, scrollOffset);
	let endIndex = startIndex;
	if (lanes === 1) while (endIndex < lastIndex && measurements[endIndex].end < scrollOffset + outerSize) endIndex++;
	else if (lanes > 1) {
		const endPerLane = Array(lanes).fill(0);
		while (endIndex < lastIndex && endPerLane.some((pos) => pos < scrollOffset + outerSize)) {
			const item = measurements[endIndex];
			endPerLane[item.lane] = item.end;
			endIndex++;
		}
		const startPerLane = Array(lanes).fill(scrollOffset + outerSize);
		while (startIndex >= 0 && startPerLane.some((pos) => pos >= scrollOffset)) {
			const item = measurements[startIndex];
			startPerLane[item.lane] = item.start;
			startIndex--;
		}
		startIndex = Math.max(0, startIndex - startIndex % lanes);
		endIndex = Math.min(lastIndex, endIndex + (lanes - 1 - endIndex % lanes));
	}
	return {
		startIndex,
		endIndex
	};
}
//#endregion
//#region src/render.ts
const VIRTUALIZE_MIN_COLUMNS = 12;
const isVirtualized = (ctx) => ctx.view === "resource" && (ctx.viewModel?.columns.length ?? 0) > VIRTUALIZE_MIN_COLUMNS;
const isTimeGridView = (view) => view === "day" || view === "week" || view === "resource";
const TIMELINE_LANE_HEIGHT = 36;
const MONTH_BAR_HEIGHT = 22;
const formatMinutes = (minutes) => {
	const clamped = Math.min(minutes, 1439);
	return `${String(Math.floor(clamped / 60)).padStart(2, "0")}:${String(clamped % 60).padStart(2, "0")}`;
};
const toUTCDate = (date) => new Date(Date.UTC(date.year, date.month - 1, date.day));
const el = (tag, className, part) => {
	const node = document.createElement(tag);
	node.className = className;
	if (part) node.dataset.part = part;
	return node;
};
const localDateTimeValue = (value) => `${value.toPlainDate().toString()}T${String(value.hour).padStart(2, "0")}:${String(value.minute).padStart(2, "0")}`;
const eventColor = (occurrence, resources) => occurrence.event.color ?? resources.find((resource) => resource.id === occurrence.event.resourceId)?.color;
function createRenderer(element, callbacks) {
	element.classList.add("scheduler");
	element.dataset.part = "root";
	const toolbar = el("div", "scheduler-toolbar", "toolbar");
	const nav = el("div", "scheduler-toolbar-nav");
	const prevButton = el("button", "scheduler-nav-button", "nav-prev");
	const todayButton = el("button", "scheduler-nav-button scheduler-nav-today", "nav-today");
	const nextButton = el("button", "scheduler-nav-button", "nav-next");
	const title = el("div", "scheduler-title", "title");
	const viewSwitch = el("div", "scheduler-view-switch", "view-switch");
	prevButton.type = "button";
	todayButton.type = "button";
	nextButton.type = "button";
	prevButton.innerHTML = "&lsaquo;";
	nextButton.innerHTML = "&rsaquo;";
	viewSwitch.setAttribute("role", "group");
	nav.append(prevButton, todayButton, nextButton);
	toolbar.append(nav, title, viewSwitch);
	const header = el("div", "scheduler-header", "header");
	const headerGutter = el("div", "scheduler-gutter");
	const headerColumns = el("div", "scheduler-header-columns");
	header.append(headerGutter, headerColumns);
	const allDayLane = el("div", "scheduler-all-day", "all-day-lane");
	const allDayLabel = el("div", "scheduler-gutter scheduler-all-day-label");
	const allDayColumns = el("div", "scheduler-all-day-columns");
	allDayLane.append(allDayLabel, allDayColumns);
	const body = el("div", "scheduler-body", "body");
	const timeAxis = el("div", "scheduler-time-axis", "time-axis");
	const grid = el("div", "scheduler-grid", "grid");
	grid.setAttribute("role", "grid");
	body.append(timeAxis, grid);
	const loadingIndicator = el("div", "scheduler-loading", "loading");
	loadingIndicator.hidden = true;
	toolbar.append(loadingIndicator);
	const liveRegion = el("div", "visually-hidden", "live-region");
	liveRegion.setAttribute("aria-live", "polite");
	element.replaceChildren(toolbar, header, allDayLane, body, liveRegion);
	prevButton.addEventListener("click", () => callbacks.onNavigate("prev"));
	todayButton.addEventListener("click", () => callbacks.onNavigate("today"));
	nextButton.addEventListener("click", () => callbacks.onNavigate("next"));
	viewSwitch.addEventListener("click", (event) => {
		const button = event.target.closest("[data-coreui-view]");
		if (button) callbacks.onViewSelect(button.dataset.coreuiView);
	});
	grid.addEventListener("click", (event) => {
		const more = event.target.closest("[data-part=\"more-link\"]");
		if (more?.dataset.coreuiDate) callbacks.onMoreLink?.(more.dataset.coreuiDate);
	});
	const syncRowScroll = () => {
		const offset = body.scrollLeft;
		headerColumns.style.transform = offset ? `translateX(${-offset}px)` : "";
		allDayColumns.style.transform = offset ? `translateX(${-offset}px)` : "";
	};
	body.addEventListener("scroll", syncRowScroll, { passive: true });
	const sizeColumnRow = (row, ctx) => {
		const virtualize = isVirtualized(ctx);
		row.style.gridAutoColumns = virtualize ? `${ctx.resourceColumnWidth}px` : "";
		row.style.width = virtualize && ctx.viewModel ? `${ctx.viewModel.columns.length * ctx.resourceColumnWidth}px` : "";
	};
	const dragPreview = el("div", "scheduler-drag-preview", "drag-preview");
	const selectionOverlay = el("div", "scheduler-selection-overlay", "selection-overlay");
	const boxRefs = /* @__PURE__ */ new Map();
	const eventLayers = /* @__PURE__ */ new Map();
	const monthCells = [];
	let nowIndicators = [];
	let context = null;
	let lastState = { type: "idle" };
	let virtualizer = null;
	let unmountVirtualizer = null;
	let windowFrame = 0;
	const scheduleWindowRender = () => {
		if (windowFrame) return;
		windowFrame = requestAnimationFrame(() => {
			windowFrame = 0;
			if (context && isTimeGridView(context.view)) {
				renderGrid(context);
				applyPreview(lastState);
				callbacks.onWindowChange?.();
			}
		});
	};
	const ensureVirtualizer = (ctx) => {
		const count = ctx.viewModel?.columns.length ?? 0;
		if (!virtualizer) {
			virtualizer = new Virtualizer({
				count,
				estimateSize: () => ctx.resourceColumnWidth,
				getScrollElement: () => body,
				horizontal: true,
				observeElementOffset,
				observeElementRect,
				onChange: scheduleWindowRender,
				overscan: 3,
				scrollToFn: elementScroll
			});
			unmountVirtualizer = virtualizer._didMount();
		} else if (virtualizer.options.count !== count) virtualizer.setOptions({
			...virtualizer.options,
			count
		});
		virtualizer._willUpdate();
		return virtualizer;
	};
	const timeFormatter = (ctx) => new Intl.DateTimeFormat(ctx.locale, {
		hour: "2-digit",
		minute: "2-digit",
		timeZone: ctx.timeZone
	});
	const visibleDays = (ctx) => ctx.viewModel?.days ?? ctx.timelineModel?.days ?? ctx.monthModel?.days ?? ctx.dayList?.map((entry) => entry.date) ?? [];
	const renderToolbar = (ctx) => {
		const { labels } = ctx;
		prevButton.setAttribute("aria-label", labels.prev);
		nextButton.setAttribute("aria-label", labels.next);
		todayButton.textContent = labels.today;
		const days = visibleDays(ctx);
		const first = days[0];
		const last = days[days.length - 1];
		if (ctx.view === "month") title.textContent = new Intl.DateTimeFormat(ctx.locale, {
			month: "long",
			year: "numeric",
			timeZone: "UTC"
		}).format(toUTCDate(first.add({ days: Math.floor(days.length / 2) })));
		else {
			const dateFormatter = new Intl.DateTimeFormat(ctx.locale, {
				dateStyle: "medium",
				timeZone: "UTC"
			});
			title.textContent = days.length > 1 ? dateFormatter.formatRange(toUTCDate(first), toUTCDate(last)) : dateFormatter.format(toUTCDate(first));
		}
		const views = [
			{
				view: "day",
				label: labels.day
			},
			{
				view: "week",
				label: labels.week
			},
			{
				view: "month",
				label: labels.month
			},
			{
				view: "agenda",
				label: labels.agenda
			},
			...ctx.showResourceButton ? [{
				view: "resource",
				label: labels.resource
			}, {
				view: "timeline",
				label: labels.timeline
			}] : []
		];
		viewSwitch.setAttribute("aria-label", labels.views);
		viewSwitch.replaceChildren(...views.map(({ view, label }) => {
			const button = el("button", "scheduler-view-button", "view-button");
			button.type = "button";
			button.dataset.coreuiView = view;
			button.textContent = label;
			button.setAttribute("aria-pressed", String(view === ctx.view));
			return button;
		}));
	};
	const renderHeader = (ctx) => {
		const weekdayFormatter = new Intl.DateTimeFormat(ctx.locale, {
			weekday: "short",
			day: "numeric",
			timeZone: "UTC"
		});
		header.hidden = ctx.view === "agenda";
		headerGutter.hidden = ctx.view === "month";
		headerGutter.style.flexBasis = ctx.view === "timeline" ? "var(--cui-scheduler-timeline-label-width)" : "";
		sizeColumnRow(headerColumns, ctx);
		if (ctx.view === "timeline") {
			const dayFormatter = new Intl.DateTimeFormat(ctx.locale, {
				weekday: "short",
				day: "numeric",
				month: "short",
				timeZone: "UTC"
			});
			const dayWidth = 24 * ctx.timelineHourWidth;
			headerColumns.style.gridAutoColumns = `${dayWidth}px`;
			headerColumns.style.width = `${(ctx.timelineModel?.days.length ?? 0) * dayWidth}px`;
			headerColumns.replaceChildren(...(ctx.timelineModel?.days ?? []).map((day) => {
				const cell = el("div", "scheduler-column-header", "column-header");
				cell.textContent = dayFormatter.format(toUTCDate(day));
				return cell;
			}));
			return;
		}
		if (ctx.view === "month") {
			const nameFormatter = new Intl.DateTimeFormat(ctx.locale, {
				weekday: "short",
				timeZone: "UTC"
			});
			const days = visibleDays(ctx).slice(0, 7);
			headerColumns.replaceChildren(...days.map((day) => {
				const cell = el("div", "scheduler-column-header", "column-header");
				cell.textContent = nameFormatter.format(toUTCDate(day));
				return cell;
			}));
			return;
		}
		headerColumns.replaceChildren(...(ctx.viewModel?.columns ?? []).map((column) => {
			const cell = el("div", "scheduler-column-header", "column-header");
			cell.textContent = column.resourceId === void 0 ? weekdayFormatter.format(toUTCDate(column.date)) : column.label ?? column.resourceId;
			return cell;
		}));
	};
	const renderAllDay = (ctx) => {
		allDayLabel.textContent = ctx.labels.allDay;
		sizeColumnRow(allDayColumns, ctx);
		if (!isTimeGridView(ctx.view) || !ctx.viewModel) {
			allDayLane.hidden = true;
			return;
		}
		allDayColumns.replaceChildren(...ctx.viewModel.columnLayouts.map((columnLayout) => {
			const column = el("div", "scheduler-all-day-column");
			column.append(...columnLayout.allDay.map((occurrence, chipIndex) => {
				const chip = buildEventElement(ctx, occurrence, `${occurrence.key}#ad${chipIndex}`, ctx.labels.allDay);
				chip.classList.add("scheduler-event-all-day");
				const chipTitle = el("div", "scheduler-event-title", "event-title");
				chipTitle.textContent = occurrence.event.title ?? "";
				chip.append(chipTitle);
				return chip;
			}));
			return column;
		}));
		allDayLane.hidden = ctx.viewModel.columnLayouts.every((columnLayout) => columnLayout.allDay.length === 0);
	};
	const renderTimeAxis = (ctx) => {
		timeAxis.hidden = !isTimeGridView(ctx.view);
		if (timeAxis.hidden) return;
		const hours = [];
		for (let hour = ctx.dayStartHour; hour < ctx.dayEndHour; hour++) hours.push(hour);
		timeAxis.replaceChildren(...hours.map((hour) => {
			const cell = el("div", "scheduler-time-label");
			cell.style.height = `${ctx.hourHeight}px`;
			const label = el("span", "scheduler-time-label-text");
			label.textContent = formatMinutes(hour * 60);
			cell.append(label);
			return cell;
		}));
	};
	const applyColor = (target, occurrence, ctx) => {
		const color = eventColor(occurrence, ctx.resources);
		if (color) target.style.setProperty("--cui-scheduler-event-bg", color);
	};
	const buildEventElement = (ctx, occurrence, boxKey, timeText) => {
		const eventEl = el("div", "scheduler-event", "event");
		eventEl.dataset.coreuiKey = occurrence.key;
		eventEl.dataset.coreuiBoxKey = boxKey;
		eventEl.tabIndex = 0;
		eventEl.classList.toggle("scheduler-event-selected", ctx.selection.includes(occurrence.key));
		eventEl.setAttribute("aria-label", `${occurrence.event.title ?? ""}, ${timeText}`);
		applyColor(eventEl, occurrence, ctx);
		if (ctx.selection.includes(occurrence.key)) eventEl.setAttribute("aria-selected", "true");
		return eventEl;
	};
	const renderGrid = (ctx) => {
		grid.className = "scheduler-grid";
		monthCells.length = 0;
		boxRefs.clear();
		eventLayers.clear();
		nowIndicators = [];
		if (ctx.view === "month") {
			renderMonth(ctx);
			return;
		}
		if (ctx.view === "agenda") {
			renderAgenda(ctx);
			return;
		}
		if (ctx.view === "timeline") {
			renderTimeline(ctx);
			return;
		}
		renderTimeGrid(ctx);
	};
	const renderTimeline = (ctx) => {
		const model = ctx.timelineModel;
		if (!model) return;
		grid.className = "scheduler-grid scheduler-timeline";
		grid.style.width = "";
		grid.removeAttribute("aria-colcount");
		grid.setAttribute("aria-rowcount", String(model.rows.length));
		grid.style.setProperty("--cui-scheduler-timeline-hour-w", `${ctx.timelineHourWidth}px`);
		const ppm = ctx.timelineHourWidth / 60;
		const formatter = timeFormatter(ctx);
		const canvasWidth = model.totalMinutes * ppm;
		grid.replaceChildren(...model.rows.map((row, rowIndex) => {
			const rowEl = el("div", "scheduler-timeline-row", "timeline-row");
			rowEl.dataset.coreuiRow = String(rowIndex);
			rowEl.setAttribute("role", "row");
			const label = el("div", "scheduler-timeline-label", "resource-header");
			label.setAttribute("role", "rowheader");
			label.textContent = row.resource.label ?? row.resource.id;
			const canvas = el("div", "scheduler-timeline-canvas", "timeline-canvas");
			canvas.style.width = `${canvasWidth}px`;
			canvas.style.height = `${Math.max(row.laneCount, 1) * TIMELINE_LANE_HEIGHT}px`;
			eventLayers.set(rowIndex, canvas);
			for (const box of row.boxes) {
				const { occurrence } = box;
				const timeText = occurrence.allDay ? ctx.labels.allDay : `${formatter.format(new Date(occurrence.start.epochMilliseconds))} – ${formatter.format(new Date(occurrence.end.epochMilliseconds))}`;
				const bar = buildEventElement(ctx, occurrence, box.key, timeText);
				bar.classList.add("scheduler-timeline-bar");
				bar.classList.toggle("scheduler-event-continues-before", box.continuesBefore);
				bar.classList.toggle("scheduler-event-continues-after", box.continuesAfter);
				bar.style.left = `${box.startMinutes * ppm}px`;
				bar.style.width = `${Math.max((box.endMinutes - box.startMinutes) * ppm - 2, 6)}px`;
				bar.style.top = `${box.track * TIMELINE_LANE_HEIGHT + 2}px`;
				bar.style.height = `32px`;
				const startHandle = el("div", "scheduler-event-resize scheduler-event-resize-start", "resize-handle-start");
				const barTitle = el("span", "scheduler-event-title", "event-title");
				barTitle.textContent = occurrence.event.title ?? "";
				const endHandle = el("div", "scheduler-event-resize scheduler-event-resize-end", "resize-handle-end");
				bar.append(startHandle, barTitle, endHandle);
				canvas.append(bar);
				boxRefs.set(box.key, {
					box,
					columnIndex: rowIndex,
					element: bar
				});
			}
			if (ctx.now) {
				const indicator = el("div", "scheduler-now-indicator scheduler-timeline-now", "now-indicator");
				canvas.append(indicator);
				nowIndicators.push(indicator);
			}
			rowEl.append(label, canvas);
			return rowEl;
		}));
		updateNow(ctx.now);
	};
	const renderTimeGrid = (ctx) => {
		if (!ctx.viewModel) return;
		const ppm = ctx.hourHeight / 60;
		const startMinutes = ctx.dayStartHour * 60;
		const endMinutes = ctx.dayEndHour * 60;
		const formatter = timeFormatter(ctx);
		const weekdayFormatter = new Intl.DateTimeFormat(ctx.locale, {
			weekday: "long",
			day: "numeric",
			month: "long",
			timeZone: "UTC"
		});
		const virtualize = isVirtualized(ctx);
		grid.classList.toggle("scheduler-grid-virtualized", virtualize);
		grid.setAttribute("aria-colcount", String(ctx.viewModel.columns.length));
		syncRowScroll();
		let columnIndexes = ctx.viewModel.columnLayouts.map((_, index) => index);
		if (virtualize) {
			const instance = ensureVirtualizer(ctx);
			grid.style.width = `${instance.getTotalSize()}px`;
			columnIndexes = instance.getVirtualItems().map((item) => item.index);
		} else grid.style.width = "";
		grid.replaceChildren(...columnIndexes.map((columnIndex) => {
			const columnLayout = ctx.viewModel.columnLayouts[columnIndex];
			const { date, label, resourceId } = columnLayout.column;
			const columnLabel = resourceId === void 0 ? weekdayFormatter.format(toUTCDate(date)) : label ?? resourceId;
			const column = el("div", "scheduler-column", "column");
			column.dataset.coreuiColumn = String(columnIndex);
			column.setAttribute("role", "row");
			column.setAttribute("aria-label", columnLabel);
			column.setAttribute("aria-colindex", String(columnIndex + 1));
			if (virtualize) {
				column.style.left = `${columnIndex * ctx.resourceColumnWidth}px`;
				column.style.width = `${ctx.resourceColumnWidth}px`;
			}
			for (let hour = ctx.dayStartHour; hour < ctx.dayEndHour; hour++) {
				const slot = el("div", "scheduler-time-slot", "time-slot");
				slot.dataset.coreuiMinutes = String(hour * 60);
				slot.style.height = `${ctx.hourHeight}px`;
				slot.setAttribute("role", "gridcell");
				slot.setAttribute("aria-label", `${columnLabel}, ${formatMinutes(hour * 60)}`);
				slot.tabIndex = -1;
				column.append(slot);
			}
			appendNonWorking(column, columnLayout.column.date, ctx, ppm, startMinutes, endMinutes);
			const events = el("div", "scheduler-column-events");
			eventLayers.set(columnIndex, events);
			for (const box of columnLayout.boxes) {
				const { occurrence } = box;
				const timeRange = `${formatter.format(new Date(occurrence.start.epochMilliseconds))} – ${formatter.format(new Date(occurrence.end.epochMilliseconds))}`;
				const eventEl = buildEventElement(ctx, occurrence, box.key, timeRange);
				eventEl.style.top = `${(box.top - startMinutes) * ppm}px`;
				eventEl.style.height = `${box.height * ppm}px`;
				eventEl.style.left = `${box.leftPct}%`;
				eventEl.style.width = `calc(${box.widthPct}% - 2px)`;
				eventEl.classList.toggle("scheduler-event-continues-before", box.continuesBefore);
				eventEl.classList.toggle("scheduler-event-continues-after", box.continuesAfter);
				const startHandle = el("div", "scheduler-event-resize scheduler-event-resize-start", "resize-handle-start");
				const time = el("div", "scheduler-event-time");
				time.textContent = timeRange;
				const eventTitle = el("div", "scheduler-event-title", "event-title");
				eventTitle.textContent = occurrence.event.title ?? "";
				const endHandle = el("div", "scheduler-event-resize scheduler-event-resize-end", "resize-handle-end");
				eventEl.append(startHandle, time, eventTitle, endHandle);
				events.append(eventEl);
				boxRefs.set(box.key, {
					box,
					columnIndex,
					element: eventEl
				});
			}
			if (ctx.now && columnLayout.column.date.equals(ctx.now.toPlainDate())) {
				const indicator = el("div", "scheduler-now-indicator", "now-indicator");
				events.append(indicator);
				nowIndicators.push(indicator);
			}
			column.append(events);
			return column;
		}));
		updateNow(ctx.now);
	};
	const appendNonWorking = (column, date, ctx, ppm, startMinutes, endMinutes) => {
		if (!ctx.businessHours) return;
		const { daysOfWeek, startHour, endHour } = ctx.businessHours;
		const addBand = (from, to) => {
			if (to <= from) return;
			const band = el("div", "scheduler-non-working", "non-working");
			band.style.top = `${(from - startMinutes) * ppm}px`;
			band.style.height = `${(to - from) * ppm}px`;
			column.append(band);
		};
		if (daysOfWeek && !daysOfWeek.includes(date.dayOfWeek)) {
			addBand(startMinutes, endMinutes);
			return;
		}
		addBand(startMinutes, Math.min(startHour * 60, endMinutes));
		addBand(Math.max(endHour * 60, startMinutes), endMinutes);
	};
	const updateNow = (now) => {
		if (!context || !now || nowIndicators.length === 0) return;
		if (context.view === "timeline") {
			const model = context.timelineModel;
			if (!model) return;
			const ppm = context.timelineHourWidth / 60;
			const offset = model.days[0].until(now.toPlainDate()).total({ unit: "days" }) * MINUTES_IN_DAY + now.hour * 60 + now.minute;
			const visible = offset >= 0 && offset <= model.totalMinutes;
			for (const indicator of nowIndicators) {
				indicator.hidden = !visible;
				indicator.style.left = `${offset * ppm}px`;
			}
			return;
		}
		const ppm = context.hourHeight / 60;
		const minutes = now.hour * 60 + now.minute;
		const startMinutes = context.dayStartHour * 60;
		const visible = minutes >= startMinutes && minutes <= context.dayEndHour * 60;
		for (const indicator of nowIndicators) {
			indicator.hidden = !visible;
			indicator.style.top = `${(minutes - startMinutes) * ppm}px`;
		}
	};
	const renderMonth = (ctx) => {
		const model = ctx.monthModel;
		if (!model) return;
		grid.className = "scheduler-grid scheduler-month-grid";
		grid.style.width = "";
		grid.setAttribute("aria-colcount", "7");
		grid.setAttribute("aria-rowcount", String(model.weeks.length));
		const formatter = timeFormatter(ctx);
		const today = ctx.now?.toPlainDate();
		const anchorMonth = model.days[Math.floor(model.days.length / 2)]?.month;
		const buildCell = (entry, dayIndex, laneCount) => {
			const cell = el("div", "scheduler-month-day", "month-day");
			cell.dataset.coreuiDayIndex = String(dayIndex);
			cell.dataset.coreuiDate = entry.dateISO;
			cell.setAttribute("role", "gridcell");
			cell.classList.toggle("scheduler-month-day-outside", entry.date.month !== anchorMonth);
			monthCells.push(cell);
			if (today && entry.date.equals(today)) cell.classList.add("scheduler-month-day-today");
			const number = el("div", "scheduler-month-day-number");
			number.textContent = String(entry.date.day);
			cell.append(number);
			if (laneCount > 0) {
				const spacer = el("div", "scheduler-month-bar-spacer");
				spacer.style.height = `${laneCount * MONTH_BAR_HEIGHT}px`;
				cell.append(spacer);
			}
			const visible = entry.occurrences.slice(0, ctx.monthMaxEventsPerDay);
			const hidden = entry.occurrences.length - visible.length;
			for (const occurrence of visible) {
				const startsHere = occurrence.allDay || occurrence.start.toPlainDate().equals(entry.date);
				const timeText = occurrence.allDay ? ctx.labels.allDay : formatter.format(new Date(occurrence.start.epochMilliseconds));
				const chip = buildEventElement(ctx, occurrence, `${occurrence.key}#m${dayIndex}`, timeText);
				chip.classList.add("scheduler-event-chip");
				chip.dataset.coreuiDayIndex = String(dayIndex);
				const chipTitle = el("span", "scheduler-event-title", "event-title");
				chipTitle.textContent = occurrence.event.title ?? "";
				if (!occurrence.allDay && startsHere) {
					const time = el("span", "scheduler-event-time");
					time.textContent = formatter.format(new Date(occurrence.start.epochMilliseconds));
					chip.append(time);
				}
				chip.append(chipTitle);
				cell.append(chip);
			}
			if (hidden > 0) {
				const more = el("button", "scheduler-more-link", "more-link");
				more.type = "button";
				more.dataset.coreuiDate = entry.dateISO;
				more.textContent = ctx.labels.more.replace("{count}", String(hidden));
				cell.append(more);
			}
			return cell;
		};
		const weekRows = [];
		for (const [weekIndex, week] of model.weeks.entries()) {
			const weekStart = weekIndex * 7;
			const weekEl = el("div", "scheduler-month-week");
			weekEl.setAttribute("role", "row");
			weekEl.setAttribute("aria-rowindex", String(weekIndex + 1));
			weekEl.append(...week.days.map((entry, index) => {
				const cell = buildCell(entry, weekStart + index, week.laneCount);
				cell.setAttribute("aria-colindex", String(index + 1));
				return cell;
			}));
			for (const bar of week.bars) {
				const timeText = bar.occurrence.allDay ? ctx.labels.allDay : formatter.format(new Date(bar.occurrence.start.epochMilliseconds));
				const barEl = buildEventElement(ctx, bar.occurrence, bar.key, timeText);
				barEl.classList.add("scheduler-month-bar");
				barEl.classList.toggle("scheduler-event-continues-before", bar.continuesBefore);
				barEl.classList.toggle("scheduler-event-continues-after", bar.continuesAfter);
				barEl.dataset.coreuiDayIndex = String(weekStart + bar.startCol);
				barEl.style.left = `calc(${bar.startCol / 7 * 100}% + 2px)`;
				barEl.style.width = `calc(${(bar.endCol - bar.startCol + 1) / 7 * 100}% - 4px)`;
				barEl.style.top = `${bar.lane * MONTH_BAR_HEIGHT + 26}px`;
				const barTitle = el("span", "scheduler-event-title", "event-title");
				barTitle.textContent = bar.occurrence.event.title ?? "";
				barEl.append(barTitle);
				weekEl.append(barEl);
			}
			weekRows.push(weekEl);
		}
		grid.replaceChildren(...weekRows);
	};
	const renderAgenda = (ctx) => {
		const dayList = (ctx.dayList ?? []).filter((entry) => entry.occurrences.length > 0);
		grid.className = "scheduler-grid scheduler-agenda";
		grid.style.width = "";
		grid.removeAttribute("aria-colcount");
		if (dayList.length === 0) {
			const empty = el("div", "scheduler-agenda-empty", "agenda-empty");
			empty.textContent = ctx.labels.agendaEmpty;
			grid.replaceChildren(empty);
			return;
		}
		const formatter = timeFormatter(ctx);
		const dayFormatter = new Intl.DateTimeFormat(ctx.locale, {
			weekday: "long",
			day: "numeric",
			month: "long",
			timeZone: "UTC"
		});
		grid.replaceChildren(...dayList.map((entry) => {
			const section = el("div", "scheduler-agenda-day", "agenda-day");
			const heading = el("div", "scheduler-agenda-day-header");
			heading.textContent = dayFormatter.format(toUTCDate(entry.date));
			section.append(heading);
			for (const occurrence of entry.occurrences) {
				const timeText = occurrence.allDay ? ctx.labels.allDay : `${formatter.format(new Date(occurrence.start.epochMilliseconds))} – ${formatter.format(new Date(occurrence.end.epochMilliseconds))}`;
				const row = buildEventElement(ctx, occurrence, `${occurrence.key}#a${entry.dateISO}`, timeText);
				row.classList.add("scheduler-agenda-event");
				const time = el("span", "scheduler-event-time");
				time.textContent = timeText;
				const rowTitle = el("span", "scheduler-event-title", "event-title");
				rowTitle.textContent = occurrence.event.title ?? "";
				row.append(time, rowTitle);
				section.append(row);
			}
			return section;
		}));
	};
	const dialogHost = el("dialog", "scheduler-dialog-host", "event-dialog");
	dialogHost.addEventListener("close", () => callbacks.onDialogDismiss?.());
	const field = (labelText, input) => {
		const wrap = el("label", "scheduler-dialog-field");
		const caption = el("span", "scheduler-dialog-label");
		caption.textContent = labelText;
		wrap.append(caption, input);
		return wrap;
	};
	const selectField = (part, labelText, options, value) => {
		const select = el("select", "scheduler-popover-select", part);
		const known = options.some(([optionValue]) => optionValue === value);
		for (const [optionValue, text] of known ? options : [...options, [value, value]]) {
			const option = document.createElement("option");
			option.value = optionValue;
			option.textContent = text;
			select.append(option);
		}
		select.value = value;
		return field(labelText, select);
	};
	const renderDialog = (ctx) => {
		const occurrence = ctx.dialogOccurrence;
		if (!occurrence) {
			if (dialogHost.open) dialogHost.close();
			dialogHost.remove();
			return;
		}
		if (dialogHost.isConnected && dialogHost.dataset.coreuiKey === occurrence.key) return;
		const { labels } = ctx;
		dialogHost.replaceChildren();
		dialogHost.setAttribute("aria-label", labels.editEvent);
		dialogHost.dataset.coreuiKey = occurrence.key;
		const card = el("form", "scheduler-dialog");
		const heading = el("div", "scheduler-dialog-title");
		heading.textContent = labels.editEvent;
		card.append(heading);
		const titleInput = el("input", "scheduler-dialog-input", "title-input");
		titleInput.type = "text";
		titleInput.value = occurrence.event.title ?? "";
		card.append(field(labels.titleLabel, titleInput));
		const startInput = el("input", "scheduler-dialog-input", "start-input");
		const endInput = el("input", "scheduler-dialog-input", "end-input");
		if (occurrence.allDay) {
			startInput.type = "date";
			startInput.value = occurrence.start.toPlainDate().toString();
			endInput.type = "date";
			endInput.value = occurrence.end.toPlainDate().toString();
		} else {
			startInput.type = "datetime-local";
			startInput.value = localDateTimeValue(occurrence.start);
			endInput.type = "datetime-local";
			endInput.value = localDateTimeValue(occurrence.end);
		}
		card.append(field(labels.startLabel, startInput), field(labels.endLabel, endInput));
		const colorInput = el("input", "scheduler-dialog-color", "color-input");
		colorInput.type = "color";
		colorInput.value = /^#[0-9a-f]{6}$/i.test(occurrence.event.color ?? "") ? occurrence.event.color : "#321fdb";
		colorInput.dataset.coreuiInitial = colorInput.value;
		card.append(field(labels.colorLabel, colorInput));
		card.append(selectField("repeat-select", labels.repeat, [
			["", labels.repeatNone],
			["FREQ=DAILY", labels.repeatDaily],
			["FREQ=WEEKLY", labels.repeatWeekly],
			["FREQ=MONTHLY", labels.repeatMonthly]
		], occurrence.event.rrule?.replace(/^RRULE:/i, "") ?? ""));
		if (occurrence.recurring) card.append(selectField("scope-select", labels.editScope, [
			["occurrence", labels.scopeOccurrence],
			["future", labels.scopeFuture],
			["all", labels.scopeAll]
		], ctx.recurringEditScope));
		const footer = el("div", "scheduler-dialog-footer");
		const deleteButton = el("button", "scheduler-popover-delete", "delete-button");
		deleteButton.type = "button";
		deleteButton.textContent = labels.deleteEvent;
		const cancelButton = el("button", "scheduler-view-button", "dialog-cancel");
		cancelButton.type = "button";
		cancelButton.textContent = labels.cancel;
		const saveButton = el("button", "scheduler-dialog-save", "dialog-save");
		saveButton.type = "submit";
		saveButton.textContent = labels.save;
		footer.append(deleteButton, cancelButton, saveButton);
		card.append(footer);
		dialogHost.append(card);
		element.append(dialogHost);
		if (!dialogHost.open) dialogHost.showModal();
	};
	const contextOccurrence = (key) => {
		if (!key || !context) return;
		return (context.viewModel?.occurrences ?? context.monthModel?.occurrences ?? context.timelineModel?.occurrences ?? []).find((occurrence) => occurrence.key === key);
	};
	const markDragSource = (key) => {
		for (const eventEl of element.querySelectorAll("[data-part=\"event\"].scheduler-event-dragging")) eventEl.classList.remove("scheduler-event-dragging");
		if (!key) return;
		for (const eventEl of element.querySelectorAll("[data-part=\"event\"]")) if (eventEl.dataset.coreuiKey === key) eventEl.classList.add("scheduler-event-dragging");
	};
	const fillGhost = (target, occurrence, timeText) => {
		target.replaceChildren();
		if (timeText) {
			const time = el("span", "scheduler-event-time");
			time.textContent = timeText;
			target.append(time);
		}
		const ghostTitle = el("span", "scheduler-event-title");
		ghostTitle.textContent = occurrence?.event.title ?? "";
		target.append(ghostTitle);
		const color = occurrence ? eventColor(occurrence, context?.resources ?? []) : void 0;
		if (color) target.style.setProperty("--cui-scheduler-event-bg", color);
		else target.style.removeProperty("--cui-scheduler-event-bg");
	};
	const applyPreview = (state) => {
		if (!context) return;
		lastState = state;
		markDragSource(state.type === "drag-move" || state.type === "drag-resize" ? state.occurrenceKey : void 0);
		const ppm = context.hourHeight / 60;
		const startMinutes = context.dayStartHour * 60;
		dragPreview.remove();
		selectionOverlay.remove();
		element.classList.toggle("scheduler-interacting", state.type === "drag-move" || state.type === "drag-resize" || state.type === "select-range");
		if (context.view === "month") {
			applyMonthPreview(state);
			return;
		}
		if (context.view === "timeline") {
			const ppmH = context.timelineHourWidth / 60;
			if (state.type === "drag-move" || state.type === "drag-resize") {
				const layer = eventLayers.get(state.preview.column);
				if (layer) {
					const track = context.timelineModel ? timelinePreviewTrack(context.timelineModel, state.occurrenceKey, state.preview.column) : 0;
					dragPreview.style.top = `${track * TIMELINE_LANE_HEIGHT + 2}px`;
					dragPreview.style.height = `32px`;
					dragPreview.style.insetInline = "";
					dragPreview.style.left = `${state.preview.startMinutes * ppmH}px`;
					dragPreview.style.width = `${(state.preview.endMinutes - state.preview.startMinutes) * ppmH}px`;
					fillGhost(dragPreview, contextOccurrence(state.occurrenceKey), "");
					layer.append(dragPreview);
				}
			} else if (state.type === "select-range") {
				const layer = eventLayers.get(state.range.startColumn);
				if (layer) {
					selectionOverlay.style.insetInline = "";
					selectionOverlay.style.top = "0";
					selectionOverlay.style.height = "100%";
					selectionOverlay.style.left = `${state.range.startMinutes * ppmH}px`;
					selectionOverlay.style.width = `${(state.range.endMinutes - state.range.startMinutes) * ppmH}px`;
					layer.append(selectionOverlay);
				}
			}
			return;
		}
		if (state.type === "drag-move" || state.type === "drag-resize") {
			const layer = eventLayers.get(state.preview.column);
			if (!layer) return;
			dragPreview.style.left = "";
			dragPreview.style.width = "";
			dragPreview.style.top = `${(state.preview.startMinutes - startMinutes) * ppm}px`;
			dragPreview.style.height = `${(state.preview.endMinutes - state.preview.startMinutes) * ppm}px`;
			fillGhost(dragPreview, contextOccurrence(state.occurrenceKey), `${formatMinutes(state.preview.startMinutes)} – ${formatMinutes(state.preview.endMinutes)}`);
			layer.append(dragPreview);
			return;
		}
		if (state.type === "select-range") {
			const layer = eventLayers.get(state.range.startColumn);
			if (!layer) return;
			const endMinutes = state.range.startColumn === state.range.endColumn ? state.range.endMinutes : context.dayEndHour * 60;
			selectionOverlay.style.left = "";
			selectionOverlay.style.width = "";
			selectionOverlay.style.top = `${(state.range.startMinutes - startMinutes) * ppm}px`;
			selectionOverlay.style.height = `${(endMinutes - state.range.startMinutes) * ppm}px`;
			layer.append(selectionOverlay);
		}
	};
	const monthGhost = el("div", "scheduler-event scheduler-month-ghost");
	const applyMonthPreview = (state) => {
		for (const cell of monthCells) cell.classList.remove("scheduler-month-day-target");
		monthGhost.remove();
		if (state.type === "drag-move") {
			const occurrence = contextOccurrence(state.occurrenceKey);
			const spanDays = occurrence ? Math.max(occurrence.allDay ? occurrence.start.toPlainDate().until(occurrence.end.toPlainDate()).total({ unit: "days" }) : occurrence.start.toPlainDate().until(occurrence.end.subtract({ minutes: 1 }).toPlainDate()).total({ unit: "days" }) + 1, 1) : 1;
			const target = state.preview.column;
			for (let index = target; index < target + spanDays; index++) monthCells[index]?.classList.add("scheduler-month-day-target");
			const cell = monthCells[target];
			if (cell && occurrence) {
				const startCol = target % 7;
				const span = Math.min(spanDays, 7 - startCol);
				fillGhost(monthGhost, occurrence, "");
				monthGhost.classList.toggle("scheduler-month-ghost-bar", spanDays > 1);
				if (spanDays > 1) {
					const week = cell.closest("[role=\"row\"]");
					monthGhost.style.left = `calc(${startCol / 7 * 100}% + 2px)`;
					monthGhost.style.width = `calc(${span / 7 * 100}% - 4px)`;
					week?.append(monthGhost);
				} else {
					monthGhost.style.left = "";
					monthGhost.style.width = "";
					cell.append(monthGhost);
				}
			}
			return;
		}
		if (state.type === "select-range") for (let index = state.range.startColumn; index <= state.range.endColumn; index++) monthCells[index]?.classList.add("scheduler-month-day-target");
	};
	return {
		refs: {
			body,
			grid,
			liveRegion,
			timeAxis,
			title
		},
		render(nextContext) {
			context = nextContext;
			element.dataset.coreuiView = nextContext.view;
			renderToolbar(nextContext);
			renderHeader(nextContext);
			renderAllDay(nextContext);
			renderTimeAxis(nextContext);
			renderGrid(nextContext);
			renderDialog(nextContext);
			applyPreview({ type: "idle" });
		},
		getBox(key) {
			return boxRefs.get(key);
		},
		findBoxByOccurrence(occurrenceKey) {
			for (const ref of boxRefs.values()) if (ref.box.occurrence.key === occurrenceKey) return ref;
		},
		focusEvent(occurrenceKey) {
			const ref = this.findBoxByOccurrence(occurrenceKey);
			if (ref) {
				ref.element.focus();
				return;
			}
			for (const chip of element.querySelectorAll("[data-part=\"event\"]")) if (chip.dataset.coreuiKey === occurrenceKey) {
				chip.focus();
				return;
			}
		},
		preview(state) {
			applyPreview(state);
		},
		focusDialog() {
			dialogHost.querySelector("[data-part=\"title-input\"]")?.focus();
		},
		updateNow(now) {
			updateNow(now);
		},
		announce(message) {
			liveRegion.textContent = "";
			liveRegion.textContent = message;
		},
		setLoading(loading) {
			loadingIndicator.hidden = !loading;
			element.classList.toggle("scheduler-is-loading", loading);
		},
		dispose() {
			if (windowFrame) {
				cancelAnimationFrame(windowFrame);
				windowFrame = 0;
			}
			unmountVirtualizer?.();
			virtualizer = null;
		}
	};
}
//#endregion
//#region src/scheduler.ts
/**
* --------------------------------------------------------------------------
* CoreUI PRO scheduler.ts
* License (https://coreui.io/pro/license/)
* --------------------------------------------------------------------------
*/
/**
* Constants
*/
const NAME = "scheduler";
const EVENT_KEY = `.coreui.scheduler`;
const EVENT_DATE_CHANGE = `dateChange${EVENT_KEY}`;
const EVENT_EVENT_CHANGE = `eventChange${EVENT_KEY}`;
const EVENT_SELECTION_CHANGE = `selectionChange${EVENT_KEY}`;
const EVENT_VIEW_CHANGE = `viewChange${EVENT_KEY}`;
const SELECTOR_EVENT = "[data-part=\"event\"]";
const SELECTOR_COLUMN = "[data-part=\"column\"]";
const SELECTOR_DELETE_BUTTON = "[data-part=\"delete-button\"]";
const SELECTOR_MONTH_DAY = "[data-part=\"month-day\"]";
const SELECTOR_DIALOG = "[data-part=\"event-dialog\"]";
const SELECTOR_RESIZE_START = "[data-part=\"resize-handle-start\"]";
const SELECTOR_RESIZE_END = "[data-part=\"resize-handle-end\"]";
const SELECTOR_TIME_SLOT = "[data-part=\"time-slot\"]";
const NAVIGATION_KEYS = {
	ArrowDown: "down",
	ArrowLeft: "left",
	ArrowRight: "right",
	ArrowUp: "up",
	End: "end",
	Home: "home"
};
const Default = {
	agendaDays: 14,
	businessHours: null,
	dataSource: null,
	date: null,
	dayEndHour: 24,
	dayStartHour: 0,
	events: [],
	eventOverlap: true,
	expandToFit: false,
	firstDayOfWeek: 1,
	hourHeight: 48,
	labels: {},
	locale: null,
	monthMaxEventsPerDay: 4,
	recurringEditScope: "occurrence",
	resourceColumnWidth: 160,
	resources: [],
	selectable: true,
	snap: 15,
	timeZone: null,
	timelineDays: 7,
	timelineHourWidth: 48,
	view: "week"
};
const DefaultType = {
	agendaDays: "number",
	businessHours: "(object|null)",
	dataSource: "(object|null)",
	date: "(string|date|null)",
	dayEndHour: "number",
	dayStartHour: "number",
	events: "array",
	eventOverlap: "boolean",
	expandToFit: "boolean",
	firstDayOfWeek: "number",
	hourHeight: "number",
	labels: "object",
	locale: "(string|null)",
	monthMaxEventsPerDay: "number",
	recurringEditScope: "string",
	resourceColumnWidth: "number",
	resources: "array",
	selectable: "boolean",
	snap: "number",
	timeZone: "(string|null)",
	timelineDays: "number",
	timelineHourWidth: "number",
	view: "string"
};
const NOW_REFRESH_MS = 6e4;
const TOUCH_DRAG_DELAY_MS = 300;
const TOUCH_SCROLL_TOLERANCE_PX = 8;
let uid = 0;
/**
* Class definition
*/
var Scheduler = class extends BaseComponent {
	constructor(element, config) {
		super(element, config);
		this._viewModel = null;
		this._dayList = null;
		this._month = null;
		this._timeline = null;
		this._occurrences = [];
		this._nowTimer = null;
		this._machineMode = "grid";
		this._pointerSession = null;
		this._keyboardGrab = null;
		this._slotFocus = {
			column: 0,
			slot: 0
		};
		this._slotSelection = null;
		this._dialog = null;
		this._dialogFocusPending = false;
		this._fetchedRange = null;
		this._fetchToken = 0;
		this._touchPending = null;
		this._touchDragging = false;
		this._onTouchMove = (event) => {
			if (this._touchDragging) {
				event.preventDefault();
				return;
			}
			const pending = this._touchPending;
			const touch = event.touches[0];
			if (!pending || !touch) return;
			if (Math.hypot(touch.clientX - pending.x, touch.clientY - pending.y) > TOUCH_SCROLL_TOLERANCE_PX) this._clearTouchPress();
		};
		this._onWindowPointerMove = (event) => this._handlePointerMove(event);
		this._onWindowPointerUp = (event) => this._handlePointerUp(event);
		this._onWindowPointerCancel = () => this._cancelInteraction();
		this._onWindowKeyDown = (event) => {
			if (event.key === "Escape") this._cancelInteraction();
		};
		this._onTouchTapUp = (event) => {
			const pending = this._touchPending;
			if (!pending || event.pointerId !== pending.pointerId) return;
			this._clearTouchPress();
			if (this._config.selectable) this._handleClick({ occurrenceKey: pending.target.occurrenceKey });
		};
		this._labels = {
			...DEFAULT_LABELS,
			...this._config.labels
		};
		this._slotFocus = {
			column: 0,
			slot: Math.max(0, 8 - this._config.dayStartHour)
		};
		this._store = createSchedulerStore({
			date: this._config.date ?? void 0,
			events: this._config.events,
			resources: this._config.resources,
			timeZone: this._config.timeZone ?? void 0,
			view: this._config.view
		});
		this._machine = this._createMachine();
		this._renderer = createRenderer(this._element, {
			onNavigate: (direction) => this.navigate(direction),
			onViewSelect: (view) => this.setView(view),
			onWindowChange: () => this._applySlotFocus(),
			onMoreLink: (dateISO) => {
				this._store.setDate(dateISO);
				this.setView("day");
			},
			onDialogDismiss: () => this._closeDialog()
		});
		this._unsubscribe = this._store.store.subscribe(() => this._render()).unsubscribe;
		this._addEventListeners();
		this._startNowTimer();
		this._render();
	}
	static get Default() {
		return Default;
	}
	static get DefaultType() {
		return DefaultType;
	}
	static get NAME() {
		return NAME;
	}
	getEvents() {
		return [...this._store.store.state.events];
	}
	getSelection() {
		return [...this._store.store.state.selection];
	}
	/** The currently visible window as ISO strings (end exclusive). */
	getVisibleRange() {
		const window = this._visibleWindow();
		return window ? {
			start: toISO(window.start),
			end: toISO(window.end)
		} : null;
	}
	navigate(direction) {
		const { view } = this._store.store.state;
		const step = view === "agenda" ? this._config.agendaDays : view === "timeline" ? this._config.timelineDays : void 0;
		this._store.navigate(direction, step);
		EventHandler.trigger(this._element, EVENT_DATE_CHANGE, { date: this._store.store.state.date });
	}
	setDate(date) {
		this._store.setDate(date);
		EventHandler.trigger(this._element, EVENT_DATE_CHANGE, { date: this._store.store.state.date });
	}
	setEvents(events) {
		this._store.setEvents(events);
	}
	setView(view) {
		if (view === this._store.store.state.view) return;
		this._store.setView(view);
		EventHandler.trigger(this._element, EVENT_VIEW_CHANGE, { view });
	}
	update(config) {
		this._config = this._getConfig({
			...this._config,
			...config
		});
		this._labels = {
			...DEFAULT_LABELS,
			...this._config.labels
		};
		this._machine = this._createMachine();
		if (config.events) this._store.setEvents(config.events);
		if (config.resources) this._store.setResources(config.resources);
		if (config.view) this._store.setView(config.view);
		if (config.date) this._store.setDate(config.date);
		if ("dataSource" in config) this._fetchedRange = null;
		this._render();
	}
	dispose() {
		this._machine.cancel();
		this._clearTouchPress();
		this._endTouchDrag();
		this._teardownWindowListeners();
		if (this._nowTimer) clearInterval(this._nowTimer);
		this._unsubscribe();
		this._renderer.dispose();
		EventHandler.off(this._element, EVENT_KEY);
		super.dispose();
	}
	_machineModeFor(view) {
		if (view === "month") return "month";
		return view === "timeline" ? "timeline" : "grid";
	}
	_createMachine() {
		const mode = this._machineModeFor(this._store?.store.state.view ?? "week");
		this._machineMode = mode;
		const bounds = mode === "month" ? {
			minMinutes: 0,
			dayMinutes: 0
		} : mode === "timeline" ? {
			minMinutes: 0,
			dayMinutes: this._config.timelineDays * MINUTES_IN_DAY
		} : {
			minMinutes: this._config.dayStartHour * 60,
			dayMinutes: this._config.dayEndHour * 60
		};
		return createInteractionMachine({
			snap: this._config.snap,
			...bounds,
			onChange: (state) => this._renderer.preview(state),
			onCommit: (commit) => this._handleCommit(commit),
			onClick: (click) => this._handleClick(click)
		});
	}
	_now() {
		return Temporal.Now.zonedDateTimeISO(this._store.store.state.timeZone);
	}
	_startNowTimer() {
		this._nowTimer = setInterval(() => {
			this._renderer.updateNow(this._now());
		}, NOW_REFRESH_MS);
	}
	_isTimeGrid() {
		const { view } = this._store.store.state;
		return view === "day" || view === "week" || view === "resource";
	}
	_columnCount() {
		const { view } = this._store.store.state;
		if (view === "month") return this._month?.days.length ?? 0;
		if (view === "timeline") return this._timeline?.rows.length ?? 0;
		return this._viewModel?.columns.length ?? 0;
	}
	_render() {
		const { state } = this._store.store;
		const focusedKey = document.activeElement instanceof HTMLElement && this._element.contains(document.activeElement) ? document.activeElement.closest(SELECTOR_EVENT)?.dataset.coreuiKey : void 0;
		if (this._machineViewMismatch()) this._machine = this._createMachine();
		if (this._isTimeGrid()) {
			this._viewModel = computeViewModel(state, {
				dayEndMinutes: this._config.dayEndHour * 60,
				dayStartMinutes: this._config.dayStartHour * 60,
				expandToFit: this._config.expandToFit,
				firstDayOfWeek: this._config.firstDayOfWeek,
				minEventMinutes: this._config.snap
			});
			this._dayList = null;
			this._timeline = null;
			this._month = null;
			this._occurrences = this._viewModel.occurrences;
		} else if (state.view === "timeline") {
			this._viewModel = null;
			this._dayList = null;
			this._month = null;
			this._timeline = computeTimelineModel(state, getAgendaDays(state, this._config.timelineDays), { minEventMinutes: this._config.snap });
			this._occurrences = this._timeline.occurrences;
		} else if (state.view === "month") {
			this._viewModel = null;
			this._timeline = null;
			this._dayList = null;
			this._month = computeMonthModel(state, getMonthDays(state, this._config.firstDayOfWeek));
			this._occurrences = this._month.occurrences;
		} else {
			this._viewModel = null;
			this._timeline = null;
			this._month = null;
			this._dayList = computeDayListModel(state, getAgendaDays(state, this._config.agendaDays));
			const seen = /* @__PURE__ */ new Map();
			for (const entry of this._dayList) for (const occurrence of entry.occurrences) seen.set(occurrence.key, occurrence);
			this._occurrences = [...seen.values()];
		}
		this._machine.setColumnCount(this._columnCount());
		const dialogOccurrence = this._dialog ? this._occurrenceByKey(this._dialog) ?? null : null;
		if (this._dialog && !dialogOccurrence) this._dialog = null;
		this._renderer.render({
			businessHours: this._config.businessHours,
			dayEndHour: this._config.dayEndHour,
			dayStartHour: this._config.dayStartHour,
			dayList: this._dayList,
			dialogOccurrence,
			hourHeight: this._config.hourHeight,
			labels: this._labels,
			locale: this._config.locale ?? void 0,
			monthMaxEventsPerDay: this._config.monthMaxEventsPerDay,
			monthModel: this._month,
			now: this._now(),
			recurringEditScope: this._config.recurringEditScope,
			resourceColumnWidth: this._config.resourceColumnWidth,
			resources: state.resources,
			selection: state.selection,
			showResourceButton: state.resources.length > 0,
			timeZone: state.timeZone,
			timelineHourWidth: this._config.timelineHourWidth,
			timelineModel: this._timeline,
			view: state.view,
			viewModel: this._viewModel
		});
		if (this._isTimeGrid()) {
			this._slotFocus = {
				column: Math.min(this._slotFocus.column, Math.max(this._columnCount() - 1, 0)),
				slot: Math.min(this._slotFocus.slot, Math.max(this._config.dayEndHour - this._config.dayStartHour - 1, 0))
			};
			this._applySlotFocus();
		}
		if (this._dialogFocusPending && dialogOccurrence) {
			this._dialogFocusPending = false;
			this._renderer.focusDialog();
		} else if (focusedKey && !dialogOccurrence) this._renderer.focusEvent(focusedKey);
		this._maybeFetch();
	}
	_visibleWindow() {
		if (this._viewModel) return this._viewModel.window;
		if (this._timeline) return this._timeline.window;
		const days = this._month?.days ?? this._dayList?.map((entry) => entry.date);
		if (days && days.length > 0) {
			const { timeZone } = this._store.store.state;
			return {
				start: days[0].toZonedDateTime({ timeZone }),
				end: days[days.length - 1].add({ days: 1 }).toZonedDateTime({ timeZone })
			};
		}
		return null;
	}
	_maybeFetch() {
		const { dataSource } = this._config;
		const window = this._visibleWindow();
		if (!dataSource || !window) return;
		const key = `${window.start.epochMilliseconds}|${window.end.epochMilliseconds}`;
		if (key === this._fetchedRange) return;
		this._fetchedRange = key;
		this._fetchToken += 1;
		const token = this._fetchToken;
		this._renderer.setLoading(true);
		Promise.resolve(dataSource.getEvents(toISO(window.start), toISO(window.end))).then((events) => {
			if (token === this._fetchToken) this._store.setEvents(events);
		}).catch(() => {
			if (token === this._fetchToken) this._renderer.announce(this._labels.loadFailed);
		}).finally(() => {
			if (token === this._fetchToken) this._renderer.setLoading(false);
		});
	}
	_machineViewMismatch() {
		return this._machineModeFor(this._store.store.state.view) !== this._machineMode;
	}
	_addEventListeners() {
		EventHandler.on(this._element, `pointerdown${EVENT_KEY}`, SELECTOR_COLUMN, (event) => this._handlePointerDown(event));
		EventHandler.on(this._element, `pointerdown${EVENT_KEY}`, ".scheduler-month-week", (event) => this._handlePointerDown(event));
		EventHandler.on(this._element, `pointerdown${EVENT_KEY}`, "[data-part=\"timeline-row\"]", (event) => this._handlePointerDown(event));
		EventHandler.on(this._element, `pointerdown${EVENT_KEY}`, ".scheduler-agenda", (event) => this._handleAgendaPointerDown(event));
		EventHandler.on(this._element, `pointerdown${EVENT_KEY}`, "[data-part=\"all-day-lane\"]", (event) => {
			const key = event.target.closest(SELECTOR_EVENT)?.dataset.coreuiKey;
			if (key && this._config.selectable) this._handleClick({ occurrenceKey: key });
		});
		EventHandler.on(this._element, `keydown${EVENT_KEY}`, SELECTOR_EVENT, (event) => this._handleEventKeydown(event));
		EventHandler.on(this._element, `keydown${EVENT_KEY}`, SELECTOR_TIME_SLOT, (event) => this._handleSlotKeydown(event));
		EventHandler.on(this._element, `keydown${EVENT_KEY}`, (event) => {
			if (event.key === "Escape") this._cancelInteraction();
		});
		EventHandler.on(this._element, `submit${EVENT_KEY}`, (event) => {
			if (event.target.closest(SELECTOR_DIALOG)) {
				event.preventDefault();
				this._saveDialog();
			}
		});
		EventHandler.on(this._element, `click${EVENT_KEY}`, "[data-part=\"dialog-cancel\"]", () => this._closeDialog());
		EventHandler.on(this._element, `pointerdown${EVENT_KEY}`, SELECTOR_DIALOG, (event) => {
			if (event.target.dataset.part === "event-dialog") this._closeDialog();
		});
		EventHandler.on(this._element, `click${EVENT_KEY}`, SELECTOR_DELETE_BUTTON, (event) => {
			const key = event.target.closest(SELECTOR_DIALOG)?.dataset.coreuiKey;
			if (key) this._deleteOccurrence(key);
		});
	}
	_setupWindowListeners() {
		window.addEventListener("pointermove", this._onWindowPointerMove);
		window.addEventListener("pointerup", this._onWindowPointerUp);
		window.addEventListener("pointercancel", this._onWindowPointerCancel);
		window.addEventListener("keydown", this._onWindowKeyDown);
	}
	_teardownWindowListeners() {
		window.removeEventListener("pointermove", this._onWindowPointerMove);
		window.removeEventListener("pointerup", this._onWindowPointerUp);
		window.removeEventListener("pointercancel", this._onWindowPointerCancel);
		window.removeEventListener("keydown", this._onWindowKeyDown);
	}
	_normalizePointer(event) {
		const gridRect = this._renderer.refs.grid.getBoundingClientRect();
		if (this._store.store.state.view === "month") {
			const cell = document.elementFromPoint(event.clientX, event.clientY)?.closest?.(SELECTOR_MONTH_DAY);
			if (cell?.dataset.coreuiDayIndex !== void 0) return {
				point: {
					column: Number(cell.dataset.coreuiDayIndex),
					minutes: 0
				},
				pixel: {
					x: event.clientX,
					y: event.clientY
				}
			};
			const columnWidth = Math.max(gridRect.width / 7, 1);
			const col = Math.min(Math.max(Math.floor((event.clientX - gridRect.left) / columnWidth), 0), 6);
			const weekRows = [...this._element.querySelectorAll(".scheduler-month-week")];
			let row = 0;
			let best = Number.POSITIVE_INFINITY;
			for (const [index, weekRow] of weekRows.entries()) {
				const rect = weekRow.getBoundingClientRect();
				if (event.clientY >= rect.top && event.clientY < rect.bottom) {
					row = index;
					break;
				}
				const distance = event.clientY < rect.top ? rect.top - event.clientY : event.clientY - rect.bottom;
				if (distance < best) {
					best = distance;
					row = index;
				}
			}
			return {
				point: {
					column: row * 7 + col,
					minutes: 0
				},
				pixel: {
					x: event.clientX,
					y: event.clientY
				}
			};
		}
		if (this._store.store.state.view === "timeline") {
			const rowFromPoint = document.elementFromPoint(event.clientX, event.clientY)?.closest?.("[data-part=\"timeline-row\"]");
			let row = rowFromPoint?.dataset.coreuiRow === void 0 ? -1 : Number(rowFromPoint.dataset.coreuiRow);
			if (row === -1) {
				const rows = [...this._element.querySelectorAll("[data-part=\"timeline-row\"]")];
				let best = Number.POSITIVE_INFINITY;
				for (const candidate of rows) {
					const rect = candidate.getBoundingClientRect();
					const distance = event.clientY < rect.top ? rect.top - event.clientY : Math.max(0, event.clientY - rect.bottom);
					if (distance < best) {
						best = distance;
						row = Number(candidate.dataset.coreuiRow);
					}
				}
			}
			const canvasRect = this._element.querySelector("[data-part=\"timeline-canvas\"]")?.getBoundingClientRect();
			const ppmH = this._config.timelineHourWidth / 60;
			const total = this._timeline?.totalMinutes ?? 0;
			const minutes = canvasRect ? Math.min(Math.max((event.clientX - canvasRect.left) / ppmH, 0), total) : 0;
			return {
				point: {
					column: Math.max(row, 0),
					minutes
				},
				pixel: {
					x: event.clientX,
					y: event.clientY
				}
			};
		}
		const columnCount = Math.max(this._columnCount(), 1);
		const columnWidth = gridRect.width / columnCount;
		const column = Math.min(Math.max(Math.floor((event.clientX - gridRect.left) / Math.max(columnWidth, 1)), 0), columnCount - 1);
		const ppm = this._config.hourHeight / 60;
		const startMinutes = this._config.dayStartHour * 60;
		return {
			point: {
				column,
				minutes: Math.min(Math.max(startMinutes + (event.clientY - gridRect.top) / ppm, startMinutes), this._config.dayEndHour * 60)
			},
			pixel: {
				x: event.clientX,
				y: event.clientY
			}
		};
	}
	_occurrenceByKey(key) {
		return this._occurrences.find((entry) => entry.key === key);
	}
	_monthOriginColumn(occurrence, dayIndex) {
		const days = this._month?.days;
		if (!days || days.length === 0) return dayIndex;
		const index = Math.round(days[0].until(occurrence.start.toPlainDate()).total({ unit: "days" }));
		return index >= 0 && index < days.length ? index : dayIndex;
	}
	_dragSnap(occurrence) {
		return this._store.store.state.view === "timeline" && occurrence.allDay ? MINUTES_IN_DAY : void 0;
	}
	_pressTarget(event) {
		const target = event.target;
		const eventElement = target.closest(SELECTOR_EVENT);
		if (!eventElement?.dataset.coreuiKey) return {};
		if (this._store.store.state.view === "month") {
			const dayIndex = Number(eventElement.dataset.coreuiDayIndex ?? eventElement.closest(SELECTOR_MONTH_DAY)?.dataset.coreuiDayIndex ?? 0);
			const occurrence = this._occurrenceByKey(eventElement.dataset.coreuiKey);
			if (!occurrence) return { occurrenceKey: eventElement.dataset.coreuiKey };
			return {
				occurrenceKey: occurrence.key,
				origin: {
					column: this._monthOriginColumn(occurrence, dayIndex),
					startMinutes: 0,
					endMinutes: 0
				}
			};
		}
		const boxKey = eventElement.dataset.coreuiBoxKey;
		if (!boxKey) return {};
		const ref = this._renderer.getBox(boxKey);
		if (!ref) return {};
		const origin = {
			column: ref.columnIndex,
			startMinutes: ref.box.startMinutes,
			endMinutes: ref.box.startMinutes + ref.box.height
		};
		const snap = this._dragSnap(ref.box.occurrence);
		if (target.closest(SELECTOR_RESIZE_START)) return {
			occurrenceKey: ref.box.occurrence.key,
			handle: "start",
			origin,
			snap
		};
		if (target.closest(SELECTOR_RESIZE_END)) return {
			occurrenceKey: ref.box.occurrence.key,
			handle: "end",
			origin,
			snap
		};
		return {
			occurrenceKey: ref.box.occurrence.key,
			origin,
			snap
		};
	}
	_handleAgendaPointerDown(event) {
		const key = event.target.closest(SELECTOR_EVENT)?.dataset.coreuiKey;
		if (this._config.selectable) this._handleClick({ occurrenceKey: key });
	}
	_handlePointerDown(event) {
		if (this._store.store.state.view === "agenda") return;
		if (event.button !== 0 && event.pointerType === "mouse") return;
		if (event.target.closest(SELECTOR_DIALOG)) return;
		if (event.target.closest("[data-part=\"more-link\"]")) return;
		const target = this._pressTarget(event);
		if (!target.occurrenceKey && !this._config.selectable) return;
		if (target.occurrenceKey && !target.origin) {
			if (this._config.selectable) this._handleClick({ occurrenceKey: target.occurrenceKey });
			return;
		}
		if (event.pointerType === "touch") {
			this._beginTouchPress(event, target);
			return;
		}
		event.preventDefault();
		if (this._pointerSession) this._machine.cancel();
		this._pointerSession = { pointerId: event.pointerId };
		this._capturePointer(event.pointerId);
		this._setupWindowListeners();
		this._machine.pointerDown(this._normalizePointer(event), target);
	}
	_capturePointer(pointerId) {
		try {
			this._element.setPointerCapture(pointerId);
		} catch {}
	}
	_releasePointer(pointerId) {
		try {
			this._element.releasePointerCapture(pointerId);
		} catch {}
	}
	_beginTouchPress(event, target) {
		this._clearTouchPress();
		const pointer = this._normalizePointer(event);
		window.addEventListener("touchmove", this._onTouchMove, { passive: false });
		window.addEventListener("pointerup", this._onTouchTapUp);
		this._touchPending = {
			pointerId: event.pointerId,
			x: event.clientX,
			y: event.clientY,
			target,
			timer: setTimeout(() => {
				const pending = this._touchPending;
				if (!pending) return;
				this._touchPending = null;
				window.removeEventListener("pointerup", this._onTouchTapUp);
				this._touchDragging = true;
				this._pointerSession = { pointerId: pending.pointerId };
				this._capturePointer(pending.pointerId);
				this._setupWindowListeners();
				this._machine.pointerDown(pointer, pending.target);
			}, TOUCH_DRAG_DELAY_MS)
		};
	}
	_clearTouchPress() {
		if (this._touchPending) {
			clearTimeout(this._touchPending.timer);
			this._touchPending = null;
		}
		if (!this._touchDragging) window.removeEventListener("touchmove", this._onTouchMove);
		window.removeEventListener("pointerup", this._onTouchTapUp);
	}
	_handlePointerMove(event) {
		if (this._pointerSession && event.pointerId === this._pointerSession.pointerId) this._machine.pointerMove(this._normalizePointer(event));
	}
	_handlePointerUp(event) {
		if (this._pointerSession && event.pointerId === this._pointerSession.pointerId) {
			this._pointerSession = null;
			this._releasePointer(event.pointerId);
			this._endTouchDrag();
			this._teardownWindowListeners();
			this._machine.pointerUp();
		}
	}
	_endTouchDrag() {
		if (this._touchDragging) {
			this._touchDragging = false;
			window.removeEventListener("touchmove", this._onTouchMove);
		}
	}
	_cancelInteraction() {
		if (this._dialog) {
			this._closeDialog();
			return;
		}
		this._clearTouchPress();
		this._endTouchDrag();
		if (this._pointerSession) this._releasePointer(this._pointerSession.pointerId);
		this._pointerSession = null;
		this._keyboardGrab = null;
		this._slotSelection = null;
		this._teardownWindowListeners();
		if (this._machine.getState().type !== "idle") {
			this._machine.cancel();
			this._renderer.announce(this._labels.eventCancelled);
		}
	}
	_handleEventKeydown(event) {
		const element = event.target.closest(SELECTOR_EVENT);
		const key = element?.dataset.coreuiKey;
		if (!key) return;
		const grabbed = this._keyboardGrab === key && this._machine.getState().type !== "idle";
		if (!grabbed && (event.key === "Delete" || event.key === "Backspace")) {
			event.preventDefault();
			this._deleteOccurrence(key);
			return;
		}
		if (!grabbed && event.key === "F2") {
			event.preventDefault();
			this._handleClick({ occurrenceKey: key });
			return;
		}
		if (event.key === "Enter" || event.key === " ") {
			event.preventDefault();
			if (grabbed) {
				this._keyboardGrab = null;
				this._machine.commit();
				return;
			}
			const origin = this._keyboardOrigin(element, key);
			const occurrence = this._occurrenceByKey(key);
			if (!origin) return;
			this._keyboardGrab = key;
			this._machine.grab(key, origin, event.shiftKey && this._isTimeGrid() ? "resize-end" : "move", (occurrence && this._dragSnap(occurrence)) ?? this._config.snap);
			this._renderer.announce(interpolate(this._labels.eventGrabbed, { title: occurrence?.event.title ?? "" }));
			return;
		}
		if (!grabbed) return;
		const inTimeline = this._store.store.state.view === "timeline";
		const nudge = {
			...this._store.store.state.view === "month" ? {
				ArrowUp: { columns: -7 },
				ArrowDown: { columns: 7 }
			} : inTimeline ? {
				ArrowUp: { columns: -1 },
				ArrowDown: { columns: 1 }
			} : {
				ArrowUp: { minutes: -this._config.snap },
				ArrowDown: { minutes: this._config.snap }
			},
			...inTimeline ? {
				ArrowLeft: { minutes: -this._config.snap },
				ArrowRight: { minutes: this._config.snap }
			} : {
				ArrowLeft: { columns: -1 },
				ArrowRight: { columns: 1 }
			}
		}[event.key];
		if (nudge) {
			event.preventDefault();
			this._machine.nudge(nudge);
		}
	}
	_keyboardOrigin(element, key) {
		if (this._store.store.state.view === "month") {
			const occurrence = this._occurrenceByKey(key);
			const dayIndex = Number(element.dataset.coreuiDayIndex ?? element.closest(SELECTOR_MONTH_DAY)?.dataset.coreuiDayIndex ?? 0);
			if (!occurrence) return null;
			return {
				column: this._monthOriginColumn(occurrence, dayIndex),
				startMinutes: 0,
				endMinutes: 0
			};
		}
		if (this._store.store.state.view === "agenda") return null;
		const boxKey = element.dataset.coreuiBoxKey;
		const ref = boxKey ? this._renderer.getBox(boxKey) : void 0;
		if (!ref) return null;
		return {
			column: ref.columnIndex,
			startMinutes: ref.box.startMinutes,
			endMinutes: ref.box.startMinutes + ref.box.height
		};
	}
	_handleSlotKeydown(event) {
		const slot = event.target.closest(SELECTOR_TIME_SLOT);
		const column = slot?.closest(SELECTOR_COLUMN);
		if (!slot || !column || !this._isTimeGrid()) return;
		const { snap } = this._config;
		const startMinutes = this._config.dayStartHour * 60;
		const endMinutes = this._config.dayEndHour * 60;
		if (this._slotSelection) {
			const extensions = {
				ArrowUp: { minutes: -snap },
				ArrowDown: { minutes: snap },
				ArrowLeft: { columns: -1 },
				ArrowRight: { columns: 1 }
			};
			if (event.key === "Enter") {
				event.preventDefault();
				this._slotSelection = null;
				this._machine.pointerUp();
				return;
			}
			const extension = extensions[event.key];
			if (extension) {
				event.preventDefault();
				this._slotSelection = {
					column: Math.min(Math.max(this._slotSelection.column + (extension.columns ?? 0), 0), this._columnCount() - 1),
					minutes: Math.min(Math.max(this._slotSelection.minutes + (extension.minutes ?? 0), startMinutes), endMinutes)
				};
				this._machine.pointerMove({
					point: {
						column: this._slotSelection.column,
						minutes: this._slotSelection.minutes
					},
					pixel: {
						x: 0,
						y: 100
					}
				});
			}
			return;
		}
		if (event.key === "Enter" || event.key === " ") {
			event.preventDefault();
			const anchor = {
				column: this._slotFocus.column,
				minutes: (this._config.dayStartHour + this._slotFocus.slot) * 60
			};
			this._slotSelection = {
				column: anchor.column,
				minutes: Math.min(anchor.minutes + snap, endMinutes)
			};
			this._machine.pointerDown({
				point: anchor,
				pixel: {
					x: 0,
					y: 0
				}
			});
			this._machine.pointerMove({
				point: {
					column: this._slotSelection.column,
					minutes: this._slotSelection.minutes
				},
				pixel: {
					x: 0,
					y: 100
				}
			});
			return;
		}
		const navigationKey = NAVIGATION_KEYS[event.key];
		if (navigationKey) {
			event.preventDefault();
			this._slotFocus = resolveNavigation(this._slotFocus, navigationKey, {
				columns: this._columnCount(),
				slots: this._config.dayEndHour - this._config.dayStartHour
			});
			this._applySlotFocus(true);
		}
	}
	_applySlotFocus(focus = false) {
		for (const active of this._element.querySelectorAll(`${SELECTOR_TIME_SLOT}[tabindex="0"]`)) active.tabIndex = -1;
		const minutes = (this._config.dayStartHour + this._slotFocus.slot) * 60;
		const slot = this._element.querySelector(`${SELECTOR_COLUMN}[data-coreui-column="${this._slotFocus.column}"] ${SELECTOR_TIME_SLOT}[data-coreui-minutes="${minutes}"]`);
		if (slot) {
			slot.tabIndex = 0;
			if (focus) slot.focus();
		}
	}
	_deleteOccurrence(occurrenceKey) {
		const occurrence = this._occurrenceByKey(occurrenceKey);
		if (!occurrence) return;
		this._dialog = null;
		this._applyPatch({
			action: "delete",
			event: occurrence.event,
			occurrenceKey: occurrence.recurring ? occurrence.key : void 0,
			scope: occurrence.recurring ? this._config.recurringEditScope : void 0
		}, occurrence, interpolate(this._labels.eventDeleted, { title: occurrence.event.title ?? "" }));
		if (this._store.store.state.selection.includes(occurrenceKey)) {
			this._store.setSelection([]);
			EventHandler.trigger(this._element, EVENT_SELECTION_CHANGE, { selection: [] });
		}
	}
	_handleClick(click) {
		if (!this._config.selectable) return;
		const selection = click.occurrenceKey ? [click.occurrenceKey] : [];
		this._dialog = click.occurrenceKey ?? null;
		this._dialogFocusPending = Boolean(click.occurrenceKey);
		this._store.setSelection(selection);
		EventHandler.trigger(this._element, EVENT_SELECTION_CHANGE, { selection });
		this._render();
	}
	_closeDialog() {
		if (!this._dialog) return;
		const key = this._dialog;
		this._dialog = null;
		this._render();
		this._renderer.focusEvent(key);
	}
	_saveDialog() {
		const occurrence = this._dialog ? this._occurrenceByKey(this._dialog) : void 0;
		if (!occurrence) return;
		const value = (part) => this._element.querySelector(`[data-part="${part}"]`)?.value ?? "";
		const title = value("title-input").trim() || void 0;
		const start = value("start-input");
		let end = value("end-input");
		const colorInput = this._element.querySelector("[data-part=\"color-input\"]");
		const color = colorInput && colorInput.value !== colorInput.dataset.coreuiInitial ? colorInput.value : occurrence.event.color;
		const rrule = value("repeat-select") || void 0;
		const scopeValue = value("scope-select");
		if (!start || !end) return;
		const { timeZone } = this._store.store.state;
		const startZoned = toZoned(start, timeZone);
		let endZoned = toZoned(end, timeZone);
		if (Temporal.ZonedDateTime.compare(endZoned, startZoned) <= 0) {
			endZoned = startZoned.add(exactDuration(occurrence.start, occurrence.end));
			end = toISO(endZoned);
		}
		if (!occurrence.allDay && this._blocksCommit(occurrence, startZoned, endZoned, occurrence.event.resourceId)) return;
		this._dialog = null;
		this._applyPatch({
			action: "update",
			event: {
				...occurrence.event,
				title,
				color,
				rrule,
				start,
				end
			},
			occurrenceKey: occurrence.recurring ? occurrence.key : void 0,
			scope: occurrence.recurring ? scopeValue : void 0
		}, occurrence, interpolate(this._labels.eventUpdated, { title: title ?? "" }));
	}
	_blocksBusinessHours(start, end) {
		const hours = this._config.businessHours;
		if (!hours?.enforce) return false;
		const startMinutes = start.hour * 60 + start.minute;
		const endMinutes = end.hour * 60 + end.minute;
		const sameDay = start.toPlainDate().equals(end.toPlainDate());
		const inside = (!hours.daysOfWeek || hours.daysOfWeek.includes(start.dayOfWeek)) && sameDay && startMinutes >= hours.startHour * 60 && endMinutes <= hours.endHour * 60;
		if (!inside) this._renderer.announce(this._labels.outsideBusinessHours);
		return !inside;
	}
	_blocksCommit(occurrence, start, end, resourceId) {
		return this._blocksBusinessHours(start, end) || this._blocksOverlap(occurrence, start, end, resourceId);
	}
	_blocksOverlap(occurrence, start, end, resourceId) {
		if (this._config.eventOverlap) return false;
		const { view } = this._store.store.state;
		const inResourceView = view === "resource" || view === "timeline";
		const collision = this._occurrences.some((other) => {
			if (other.allDay || other.key === occurrence?.key) return false;
			if (inResourceView && other.event.resourceId !== resourceId) return false;
			return overlaps(other.start, other.end, {
				start,
				end
			});
		});
		if (collision) this._renderer.announce(this._labels.overlapBlocked);
		return collision;
	}
	_handleCommit(commit) {
		this._keyboardGrab = null;
		if (commit.action === "select") {
			this._createFromSelection(commit.range);
			return;
		}
		const occurrence = this._occurrenceByKey(commit.occurrenceKey);
		if (!occurrence) return;
		const scope = occurrence.recurring ? this._config.recurringEditScope : void 0;
		const { view } = this._store.store.state;
		if (view === "timeline") {
			this._handleTimelineCommit(commit, occurrence, scope);
			return;
		}
		if (commit.action === "move") {
			const isResourceView = view === "resource";
			const start = occurrence.start.toPlainDateTime().add({ days: isResourceView ? 0 : commit.deltaColumns }).add({ minutes: commit.deltaMinutes }).toZonedDateTime(this._store.store.state.timeZone, { disambiguation: "compatible" });
			const end = start.add(exactDuration(occurrence.start, occurrence.end));
			const resourceId = isResourceView ? this._store.store.state.resources[commit.preview.column]?.id : occurrence.event.resourceId;
			if (occurrence.allDay) {
				const startDate = start.toPlainDate();
				const spanDays = Math.max(occurrence.start.toPlainDate().until(occurrence.end.toPlainDate()).total({ unit: "days" }), 1);
				this._applyPatch({
					action: "move",
					event: {
						...occurrence.event,
						start: startDate.toString(),
						end: startDate.add({ days: spanDays }).toString(),
						resourceId
					},
					occurrenceKey: occurrence.recurring ? occurrence.key : void 0,
					scope
				}, occurrence, interpolate(this._labels.eventMoved, {
					title: occurrence.event.title ?? "",
					date: startDate.toString(),
					start: ""
				}));
				return;
			}
			if (this._blocksCommit(occurrence, start, end, resourceId)) return;
			this._applyPatch({
				action: "move",
				event: {
					...occurrence.event,
					start: toISO(start),
					end: toISO(end),
					resourceId
				},
				occurrenceKey: occurrence.recurring ? occurrence.key : void 0,
				scope
			}, occurrence, interpolate(this._labels.eventMoved, {
				title: occurrence.event.title ?? "",
				date: start.toPlainDate().toString(),
				start: this._formatTime(start)
			}));
			return;
		}
		const columnDate = view === "month" ? this._month?.days[commit.preview.column] : this._viewModel?.columns[commit.preview.column]?.date;
		if (!columnDate) return;
		const start = commit.handle === "start" ? this._zonedFromMinutes(columnDate, commit.preview.startMinutes) : occurrence.start;
		const end = commit.handle === "end" ? this._zonedFromMinutes(columnDate, commit.preview.endMinutes) : occurrence.end;
		if (this._blocksCommit(occurrence, start, end, occurrence.event.resourceId)) return;
		this._applyPatch({
			action: "resize",
			event: {
				...occurrence.event,
				start: toISO(start),
				end: toISO(end)
			},
			occurrenceKey: occurrence.recurring ? occurrence.key : void 0,
			scope
		}, occurrence, interpolate(this._labels.eventResized, {
			title: occurrence.event.title ?? "",
			start: this._formatTime(start),
			end: this._formatTime(end)
		}));
	}
	_timelineZoned(offsetMinutes) {
		const days = this._timeline?.days;
		if (!days) return null;
		const dayIndex = Math.min(Math.floor(offsetMinutes / MINUTES_IN_DAY), days.length - 1);
		return this._zonedFromMinutes(days[dayIndex], offsetMinutes - dayIndex * MINUTES_IN_DAY);
	}
	_handleTimelineCommit(commit, occurrence, scope) {
		const model = this._timeline;
		if (!model) return;
		const { preview } = commit;
		const targetResource = model.rows[preview.column]?.resource;
		const resourceId = commit.action === "move" ? targetResource?.id : occurrence.event.resourceId;
		let start;
		let end;
		if (occurrence.allDay) {
			const shiftDays = commit.action === "move" ? Math.round(commit.deltaMinutes / MINUTES_IN_DAY) : 0;
			const startDate = commit.action === "resize" && commit.handle === "start" ? model.days[0].add({ days: Math.round(preview.startMinutes / MINUTES_IN_DAY) }) : occurrence.start.toPlainDate().add({ days: shiftDays });
			const endDate = commit.action === "resize" && commit.handle === "end" ? model.days[0].add({ days: Math.round(preview.endMinutes / MINUTES_IN_DAY) }) : occurrence.end.toPlainDate().add({ days: shiftDays });
			const event = {
				...occurrence.event,
				start: startDate.toString(),
				end: (Temporal.PlainDate.compare(endDate, startDate) > 0 ? endDate : startDate.add({ days: 1 })).toString(),
				resourceId
			};
			this._applyPatch({
				action: commit.action,
				event,
				occurrenceKey: occurrence.recurring ? occurrence.key : void 0,
				scope
			}, occurrence, interpolate(this._labels.eventUpdated, { title: occurrence.event.title ?? "" }));
			return;
		}
		if (commit.action === "move") {
			start = occurrence.start.toPlainDateTime().add({ minutes: commit.deltaMinutes }).toZonedDateTime(this._store.store.state.timeZone, { disambiguation: "compatible" });
			end = start.add(exactDuration(occurrence.start, occurrence.end));
		} else {
			start = commit.handle === "start" ? this._timelineZoned(preview.startMinutes) : occurrence.start;
			end = commit.handle === "end" ? this._timelineZoned(preview.endMinutes) : occurrence.end;
		}
		if (!start || !end) return;
		if (this._blocksCommit(occurrence, start, end, resourceId)) return;
		this._applyPatch({
			action: commit.action,
			event: {
				...occurrence.event,
				start: toISO(start),
				end: toISO(end),
				resourceId
			},
			occurrenceKey: occurrence.recurring ? occurrence.key : void 0,
			scope
		}, occurrence, commit.action === "move" ? interpolate(this._labels.eventMoved, {
			title: occurrence.event.title ?? "",
			date: start.toPlainDate().toString(),
			start: this._formatTime(start)
		}) : interpolate(this._labels.eventResized, {
			title: occurrence.event.title ?? "",
			start: this._formatTime(start),
			end: this._formatTime(end)
		}));
	}
	_createFromSelection(range) {
		const { state } = this._store.store;
		const isResourceView = state.view === "resource";
		uid += 1;
		const id = `scheduler-event-${Date.now().toString(36)}-${uid}`;
		if (state.view === "timeline") {
			const start = this._timelineZoned(range.startMinutes);
			const end = this._timelineZoned(range.endMinutes);
			const resource = this._timeline?.rows[range.startColumn]?.resource;
			if (!start || !end || !resource) return;
			if (this._blocksCommit(void 0, start, end, resource.id)) return;
			const event = {
				id,
				title: this._labels.newEvent,
				start: toISO(start),
				end: toISO(end),
				resourceId: resource.id
			};
			this._applyPatch({
				action: "create",
				event
			}, void 0, interpolate(this._labels.eventCreated, {
				title: event.title ?? "",
				date: start.toPlainDate().toString(),
				start: this._formatTime(start),
				end: this._formatTime(end)
			}));
			return;
		}
		if (state.view === "month") {
			const startDate = this._month?.days[range.startColumn];
			const endDate = this._month?.days[range.endColumn];
			if (!startDate || !endDate) return;
			const event = {
				id,
				title: this._labels.newEvent,
				start: startDate.toString(),
				end: endDate.add({ days: 1 }).toString(),
				allDay: true
			};
			this._applyPatch({
				action: "create",
				event
			}, void 0, interpolate(this._labels.eventCreated, {
				title: event.title ?? "",
				date: startDate.toString(),
				start: "",
				end: ""
			}));
			return;
		}
		const startDate = this._viewModel?.columns[range.startColumn]?.date;
		const endDate = isResourceView ? startDate : this._viewModel?.columns[range.endColumn]?.date;
		if (!startDate || !endDate) return;
		const start = this._zonedFromMinutes(startDate, range.startMinutes);
		const end = this._zonedFromMinutes(endDate, isResourceView && range.endColumn !== range.startColumn ? MINUTES_IN_DAY : range.endMinutes);
		if (this._blocksCommit(void 0, start, end, isResourceView ? state.resources[range.startColumn]?.id : void 0)) return;
		const event = {
			id,
			title: this._labels.newEvent,
			start: toISO(start),
			end: toISO(end),
			...isResourceView ? { resourceId: state.resources[range.startColumn]?.id } : {}
		};
		this._applyPatch({
			action: "create",
			event
		}, void 0, interpolate(this._labels.eventCreated, {
			title: event.title ?? "",
			date: start.toPlainDate().toString(),
			start: this._formatTime(start),
			end: this._formatTime(end)
		}));
	}
	_applyPatch(patch, occurrence, announcement) {
		const revert = this._store.applyPatch(patch);
		const occurrencePayload = occurrence ? {
			key: occurrence.key,
			start: toISO(occurrence.start),
			end: toISO(occurrence.end)
		} : null;
		EventHandler.trigger(this._element, EVENT_EVENT_CHANGE, {
			action: patch.action,
			event: patch.event,
			occurrence: occurrencePayload,
			revert,
			scope: patch.scope ?? null
		});
		this._renderer.announce(announcement);
		const persist = this._config.dataSource?.persistEvents;
		if (persist) Promise.resolve(persist({
			action: patch.action,
			event: patch.event,
			occurrence: occurrencePayload,
			scope: patch.scope ?? null
		})).then((result) => {
			if (result && result.success === false) {
				revert();
				this._renderer.announce(this._labels.saveFailed);
			}
		}).catch(() => {
			revert();
			this._renderer.announce(this._labels.saveFailed);
		});
	}
	_zonedFromMinutes(date, minutes) {
		return date.toZonedDateTime({ timeZone: this._store.store.state.timeZone }).toPlainDateTime().add({ minutes }).toZonedDateTime(this._store.store.state.timeZone, { disambiguation: "compatible" });
	}
	_formatTime(value) {
		return new Intl.DateTimeFormat(this._config.locale ?? void 0, {
			hour: "2-digit",
			minute: "2-digit",
			timeZone: this._store.store.state.timeZone
		}).format(new Date(value.epochMilliseconds));
	}
};
//#endregion
export { DEFAULT_LABELS, Scheduler };

//# sourceMappingURL=scheduler.esm.js.map