import { Russian } from "./vendor/flatpickr/l10n/ru.js";

export const initFlatPicker = () => {

  const fp = flatpickr("#order-date", {
    "locale": Russian,
    inline: true,
    static: true,
    monthSelectorType: 'static',
    nextArrow: '<img alt="" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMzEiIHZpZXdCb3g9IjAgMCAyOCAzMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAuODQzNzUgNS42NzAwMUMwLjg0Mzc1IDIuNjYwMzggMy40ODMyMyAwLjMzMjggNi40NjkyMiAwLjcwOTI5MUwyMy42MjQ5IDIuODcyMzdDMjYuMTI0NyAzLjE4NzU2IDI3Ljk5OTQgNS4zMTM1MSAyNy45OTk0IDcuODMzMDlWMjEuOTY0MkMyNy45OTk0IDI0LjQyMDIgMjYuMjE1OCAyNi41MTI1IDIzLjc5MDggMjYuOTAxMkw2LjYzNTE0IDI5LjY1MTJDMy41OTY3OCAzMC4xMzgzIDAuODQzNzUgMjcuNzkxNCAwLjg0Mzc1IDI0LjcxNDNWNS42NzAwMVoiIGZpbGw9IiNGNDc5MjAiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNi4yMTE0IDE1LjM0OTZDMTYuMTczMSAxNS4zODQ3IDE2LjE0NjcgMTUuNDA0NSAxNi4xMzIyIDE1LjQwODhMMTYuMDc0NiAxNS40NjE4QzE2LjAwNzEgMTUuNTA1NyAxNS45Mzk4IDE1LjU1ODUgMTUuODcyNSAxNS42MjA0TDE1Ljc0OTkgMTUuNzE5NUMxNS43NDAzIDE1LjcyODMgMTUuNzE4NiAxNS43NDM3IDE1LjY4NDggMTUuNzY1N0MxNS42NTExIDE1Ljc4NzcgMTUuNjI0NiAxNS44MDc1IDE1LjYwNTQgMTUuODI1MUwxNC42OTc4IDE2LjY1OTdMMTQuNDk2MSAxNi44NDUxQzE0LjM5NTIgMTYuOTI4OSAxNC4zMjU0IDE2Ljk4ODUgMTQuMjg3IDE3LjAyMzhMMTQuMDI3NyAxNy4yNjIzTDEzLjk2MjcgMTcuMzA4NEwxMy41ODgxIDE3LjY1MjlMMTMuMzU3NiAxNy44NjQ4QzEzLjI0NzEgMTcuOTU3NCAxMy4xNjc4IDE4LjAyNTggMTMuMTE5NyAxOC4wNjk5TDExLjk2NzIgMTkuMTI5N0MxMS45NzcxIDE5LjEzODggMTEuOTM0IDE5LjE4NzUgMTEuODM4IDE5LjI3NThMMTEuNzg3NyAxOS4zMzU2QzExLjcyMDUgMTkuMzk3NCAxMS42OTQzIDE5LjQzNTEgMTEuNzA5MSAxOS40NDg3TDExLjY2NjIgMTkuNTE1M0MxMS42NTIgMTkuNTM3NSAxMS42MzI5IDE5LjU2NDEgMTEuNjA5IDE5LjU5NTFDMTEuNTk5NCAxOS42MDQgMTEuNTkyMyAxOS42MTUxIDExLjU4NzYgMTkuNjI4NEMxMS41NzggMTkuNjM3MyAxMS41NzU3IDE5LjY0MzkgMTEuNTgwNiAxOS42NDg1TDExLjU2NjYgMTkuNjg4NkwxMS41NTI2IDE5LjcyODdMMTEuNTQ1NiAxOS43NDg3QzExLjU0MDkgMTkuNzYyMSAxMS41MzM3IDE5Ljc3MzIgMTEuNTI0MSAxOS43ODJMMTEuNTAzOSAxOS44OTU5TDExLjUwNDcgMTkuOTQ5NkwxMS41OTM1IDIwLjAzMTJDMTEuNjU3MyAyMC4wNzIzIDExLjY3OTggMjAuMTEwNiAxMS42NjA4IDIwLjE0NjJMMTEuNjkgMjAuMTQ2NUwxMS43ODU1IDIwLjE4MTNMMTEuODE0NyAyMC4xODE2TDExLjg0MzkgMjAuMTgyTDExLjg4MDUgMjAuMTg5MUwxMi4wNDc5IDIwLjE1NzZDMTIuMDUyOCAyMC4xNjIyIDEyLjA3NzEgMjAuMTU4IDEyLjEyMDcgMjAuMTQ1MUMxMi4xNTk0IDIwLjEyNzcgMTIuMjA1MyAyMC4xMDgxIDEyLjI1ODYgMjAuMDg2NEMxMi4yOTcyIDIwLjA2OSAxMi4zMjM4IDIwLjA1ODEgMTIuMzM4NCAyMC4wNTM4TDEyLjM5NjQgMjAuMDI3N0wxMi40Njg4IDE5Ljk4ODNDMTIuNTEyNCAxOS45NzU0IDEyLjU0MzggMTkuOTYwMiAxMi41NjMgMTkuOTQyNUwxMi42MjExIDE5LjkxNjRDMTIuNjUwMSAxOS45MDc4IDEyLjY3NDMgMTkuODk0NiAxMi42OTM1IDE5Ljg3N0wxMi44MTY1IDE5LjgwNDdDMTIuODc5MyAxOS43NzQxIDEyLjkyNTIgMTkuNzQ1NiAxMi45NTQgMTkuNzE5MUwxMy4xOTIyIDE5LjU0MDhMMTMuMjEzNyAxOS41MDc1QzEzLjIxODMgMTkuNDk0MSAxMy4yMzAzIDE5LjQ3ODYgMTMuMjQ5NSAxOS40NjFMMTMuNDggMTkuMjQ5QzEzLjUwODggMTkuMjIyNSAxMy41NDQ5IDE5LjE5MzkgMTMuNTg4MiAxOS4xNjMxQzEzLjYyMiAxOS4xNDExIDEzLjY0ODUgMTkuMTIxMyAxMy42Njc3IDE5LjEwMzZMMTMuODY5NCAxOC45MTgyTDEzLjk3MDIgMTguODI1NUMxNC4wMjI5IDE4Ljc2OCAxNC4wNTQgMTguNzM0OCAxNC4wNjM2IDE4LjcyNTlMMTQuMjIyMSAxOC41ODAyTDE0LjMxNiAxOC41MDc1TDE0LjQxNjggMTguNDE0OEwxNS40MTA4IDE3LjUwMDhMMTUuNTI2MSAxNy4zOTQ4TDE1LjY0ODcgMTcuMjk1NkwxNS42OTIgMTcuMjU1OUMxNS43MDE1IDE3LjI0NzEgMTUuNzM3NiAxNy4yMTg0IDE1LjgwMDIgMTcuMTdMMTUuOTE1NCAxNy4wNjRMMTUuOTQ0MiAxNy4wMzc1TDE2LjA0NTEgMTYuOTQ0OEwxNi4xMjQ1IDE2Ljg4NTNMMTYuMjQ3MiAxNi43ODYyTDE2LjM0OCAxNi42OTM0TDE2LjQyNzUgMTYuNjM0TDE3LjAzMjUgMTYuMDc3NkMxNy4wNDIxIDE2LjA2ODggMTcuMDQ5MyAxNi4wNTc3IDE3LjA1MzkgMTYuMDQ0M0wxNy4xMTE2IDE1Ljk5MTNDMTcuMTQwNCAxNS45NjQ4IDE3LjE3MTQgMTUuOTIyNyAxNy4yMDQ2IDE1Ljg2NUMxNy4yMzc4IDE1LjgwNzIgMTcuMjczNyAxNS43NjA2IDE3LjMxMjEgMTUuNzI1M0wxNy4zMTg3IDE1LjY3ODRMMTcuMzQwNSAxNS42NzJMMTcuMzI0OSAxNS42MDQ3TDE3LjMzMTkgMTUuNTg0NkMxNy4zMzE3IDE1LjU2NjcgMTcuMzI0MyAxNS41NTk5IDE3LjMwOTcgMTUuNTY0MkwxNy4zMDkzIDE1LjUzNzRDMTcuMzA3NyAxNS41MzY5IDE3LjMwNjIgMTUuNTM2MyAxNy4zMDQ3IDE1LjUzNTlMMTcuMzIwNCAxNS40OTk2TDE3LjMyMDkgMTUuNDcyN0wxNy4zMjE0IDE1LjQ0NThMMTcuMzI5MiAxNS40MTIxTDE3LjI5NTMgMTUuMjU3OEMxNy4zMDAyIDE1LjI1MzMgMTcuMjk1NyAxNS4yMzA5IDE3LjI4MTggMTUuMTkwN0MxNy4yNjI5IDE1LjE1NTIgMTcuMjQxNiAxNS4xMTI5IDE3LjIxODEgMTUuMDYzOUMxNy4xOTkyIDE1LjAyODMgMTcuMTg3NCAxNS4wMDM4IDE3LjE4MjcgMTQuOTkwNEwxNy4xNTQ0IDE0LjkzN0wxNy4xMTE2IDE0Ljg3MDNDMTcuMDk3NiAxNC44MzAyIDE3LjA4MTEgMTQuODAxMiAxNy4wNjE5IDE0Ljc4MzZMMTcuMDMzNSAxNC43MzAyQzE3LjAyNDIgMTQuNzAzNCAxNy4wMDk5IDE0LjY4MTIgMTYuOTkwNyAxNC42NjM1TDE2LjkxMjIgMTQuNTUwM0MxNi44NzkgMTQuNDkyNSAxNi44NDggMTQuNDUwMyAxNi44MTkyIDE0LjQyMzhMMTYuNjI1NCAxNC4yMDQ2TDE2LjU4OTIgMTQuMTg1QzE2LjU3NDYgMTQuMTgwNyAxNi41NTc3IDE0LjE2OTcgMTYuNTM4NSAxNC4xNTIxTDE2LjMwOCAxMy45NDAxQzE2LjI3OTIgMTMuOTEzNiAxNi4yNDgxIDEzLjg4MDQgMTYuMjE0NiAxMy44NDA2QzE2LjE5MDggMTMuODA5NSAxNi4xNjkyIDEzLjc4NTIgMTYuMTUgMTMuNzY3NUwxNS45NDgzIDEzLjU4MkwxNS44NDc1IDEzLjQ4OTNDMTUuNzg0OSAxMy40NDA5IDE1Ljc0ODggMTMuNDEyMyAxNS43MzkyIDEzLjQwMzRMMTUuNTgwNyAxMy4yNTc3TDE1LjUwMTcgMTMuMTcxNEwxNS40MDA5IDEzLjA3ODdMMTQuNDA2OCAxMi4xNjQ2TDE0LjI5MTYgMTIuMDU4NkwxNC4xODM4IDExLjk0NTlMMTQuMTQwNSAxMS45MDYxQzE0LjEzMDkgMTEuODk3MyAxNC4wOTk4IDExLjg2NDEgMTQuMDQ3MSAxMS44MDY1TDEzLjkzMTkgMTEuNzAwNkwxMy45MDMxIDExLjY3NDFMMTMuODAyMiAxMS41ODEzTDEzLjczNzYgMTEuNTA4M0wxMy42Mjk4IDExLjM5NTVMMTMuNTI5IDExLjMwMjdMMTMuNDY0NCAxMS4yMjk3TDEyLjg1OTMgMTAuNjczM0MxMi44NDk3IDEwLjY2NDUgMTIuODM3NiAxMC42NTc5IDEyLjgyMyAxMC42NTM2TDEyLjc2NTQgMTAuNjAwNkMxMi43MzY2IDEwLjU3NDIgMTIuNjkwOCAxMC41NDU3IDEyLjYyNzkgMTAuNTE1MkMxMi41NjUgMTAuNDg0NyAxMi41MTQ0IDEwLjQ1MTggMTIuNDc1OSAxMC40MTY1TDEyLjQyNDggMTAuNDEwNUwxMi40MTc5IDEwLjM5MDRMMTIuMzQ0NCAxMC40MDQ5TDEyLjMyMjYgMTAuMzk4NUMxMi4zMDMxIDEwLjM5ODcgMTIuMjk1NyAxMC40MDU2IDEyLjMwMDMgMTAuNDE5TDEyLjI3MTEgMTAuNDE5NEMxMi4yNjA5IDEwLjQ0NjQgMTIuMjUxIDEwLjQ1NTUgMTIuMjQxMyAxMC40NDY3TDEyLjIzMzUgMTAuNDgwNEMxMi4yMjM1IDEwLjQ4OTYgMTIuMjExMyAxMC40OTIgMTIuMTk2OCAxMC40ODc3TDEyLjEyMDYgMTAuNjYzN0wxMi4xMTk4IDEwLjcxNzVMMTIuMDk3IDEwLjc2NDlDMTIuMDg3MSAxMC43NzQgMTIuMDc3MyAxMC43NzQxIDEyLjA2NzcgMTAuNzY1M0wxMi4wNTk5IDEwLjc5OUMxMi4wNDUzIDEwLjc5NDggMTIuMDM1NSAxMC43OTQ5IDEyLjAzMDYgMTAuNzk5NUwxMi4wMDA5IDEwLjgyNjhDMTEuOTg2MyAxMC44MjI1IDExLjk2MzkgMTAuODUyIDExLjkzMzYgMTAuOTE1MkwxMS44NzMyIDExLjAyMzdMMTEuOTA3NiAxMS4xNTFDMTEuOTAyNyAxMS4xNTU1IDExLjkwMjUgMTEuMTY0NSAxMS45MDcyIDExLjE3NzlMMTEuOTc4MyAxMS4yOTc5QzEyLjAwNjUgMTEuMzYwMyAxMi4wMzUgMTEuNDA0OCAxMi4wNjM4IDExLjQzMTNDMTIuMTAyMyAxMS40NjY2IDEyLjEyMzggMTEuNDkwOSAxMi4xMjg0IDExLjUwNDNMMTIuMTg2IDExLjU1NzNDMTIuMjMzOCAxMS42MTk0IDEyLjI5MTIgMTEuNjgxNCAxMi4zNTg1IDExLjc0MzJMMTIuNDY2MyAxMS44NTZDMTIuNDc1OSAxMS44NjQ4IDEyLjQ5MjYgMTEuODg0NyAxMi41MTY1IDExLjkxNThDMTIuNTQwMyAxMS45NDY4IDEyLjU2MTkgMTEuOTcxMiAxMi41ODExIDExLjk4ODlMMTMuNDg4NyAxMi44MjM0TDEzLjY5MDQgMTMuMDA4OUMxMy43ODE1IDEzLjEwMTcgMTMuODQ2MiAxMy4xNjU4IDEzLjg4NDYgMTMuMjAxMkwxNC4xNDQgMTMuNDM5NkwxNC4xOTQxIDEzLjQ5OTRMMTQuNTY4NyAxMy44NDM5TDE0Ljc5OTIgMTQuMDU1OEMxNC44OTk5IDE0LjE1NzUgMTQuOTc0MyAxNC4yMzA0IDE1LjAyMjMgMTQuMjc0NkwxNi4xNzQ4IDE1LjMzNDNDMTYuMTc5MSAxNS4zMzA0IDE2LjE5MTIgMTUuMzM1NSAxNi4yMTE0IDE1LjM0OTZaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K" />',
    prevArrow: '<img alt="" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMzEiIHZpZXdCb3g9IjAgMCAyOCAzMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI4IDUuNjcwMDFDMjggMi42NjAzOCAyNS4zNjA1IDAuMzMyOCAyMi4zNzQ1IDAuNzA5MjkxTDUuMjE4ODcgMi44NzIzN0MyLjcxOTA5IDMuMTg3NTYgMC44NDQzNTEgNS4zMTM1MSAwLjg0NDM1MSA3LjgzMzA5VjIxLjk2NDJDMC44NDQzNTEgMjQuNDIwMiAyLjYyNzk5IDI2LjUxMjUgNS4wNTI5NiAyNi45MDEyTDIyLjIwODYgMjkuNjUxMkMyNS4yNDcgMzAuMTM4MyAyOCAyNy43OTE0IDI4IDI0LjcxNDNWNS42NzAwMVoiIGZpbGw9IiNGNDc5MjAiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMi42MzI0IDE1LjM0OTZDMTIuNjcwNiAxNS4zODQ3IDEyLjY5NyAxNS40MDQ1IDEyLjcxMTUgMTUuNDA4OEwxMi43NjkxIDE1LjQ2MThDMTIuODM2NyAxNS41MDU3IDEyLjkwNCAxNS41NTg1IDEyLjk3MTIgMTUuNjIwNEwxMy4wOTM5IDE1LjcxOTVDMTMuMTAzNSAxNS43MjgzIDEzLjEyNTIgMTUuNzQzNyAxMy4xNTg5IDE1Ljc2NTdDMTMuMTkyNyAxNS43ODc3IDEzLjIxOTEgMTUuODA3NSAxMy4yMzg0IDE1LjgyNTFMMTQuMTQ1OSAxNi42NTk3TDE0LjM0NzYgMTYuODQ1MUMxNC40NDg2IDE2LjkyODkgMTQuNTE4MyAxNi45ODg1IDE0LjU1NjcgMTcuMDIzOEwxNC44MTYgMTcuMjYyM0wxNC44ODEgMTcuMzA4NEwxNS4yNTU2IDE3LjY1MjlMMTUuNDg2MSAxNy44NjQ4QzE1LjU5NjcgMTcuOTU3NCAxNS42NzYgMTguMDI1OCAxNS43MjQgMTguMDY5OUwxNi44NzY1IDE5LjEyOTdDMTYuODY2NyAxOS4xMzg4IDE2LjkwOTcgMTkuMTg3NSAxNy4wMDU4IDE5LjI3NThMMTcuMDU2IDE5LjMzNTZDMTcuMTIzMyAxOS4zOTc0IDE3LjE0OTUgMTkuNDM1MSAxNy4xMzQ3IDE5LjQ0ODdMMTcuMTc3NSAxOS41MTUzQzE3LjE5MTggMTkuNTM3NSAxNy4yMTA4IDE5LjU2NDEgMTcuMjM0NyAxOS41OTUxQzE3LjI0NDMgMTkuNjA0IDE3LjI1MTUgMTkuNjE1MSAxNy4yNTYyIDE5LjYyODRDMTcuMjY1NyAxOS42MzczIDE3LjI2ODEgMTkuNjQzOSAxNy4yNjMxIDE5LjY0ODVMMTcuMjc3MiAxOS42ODg2TDE3LjI5MTIgMTkuNzI4N0wxNy4yOTgyIDE5Ljc0ODdDMTcuMzAyOSAxOS43NjIxIDE3LjMxIDE5Ljc3MzIgMTcuMzE5NiAxOS43ODJMMTcuMzM5OCAxOS44OTU5TDE3LjMzOTEgMTkuOTQ5NkwxNy4yNTAzIDIwLjAzMTJDMTcuMTg2NCAyMC4wNzIzIDE3LjE2NCAyMC4xMTA2IDE3LjE4MjkgMjAuMTQ2MkwxNy4xNTM3IDIwLjE0NjVMMTcuMDU4MyAyMC4xODEzTDE3LjAyOTEgMjAuMTgxNkwxNi45OTk5IDIwLjE4MkwxNi45NjMzIDIwLjE4OTFMMTYuNzk1OSAyMC4xNTc2QzE2Ljc5MDkgMjAuMTYyMiAxNi43NjY2IDIwLjE1OCAxNi43MjMgMjAuMTQ1MUMxNi42ODQ0IDIwLjEyNzcgMTYuNjM4NCAyMC4xMDgxIDE2LjU4NTIgMjAuMDg2NEMxNi41NDY1IDIwLjA2OSAxNi41MTk5IDIwLjA1ODEgMTYuNTA1NCAyMC4wNTM4TDE2LjQ0NzQgMjAuMDI3N0wxNi4zNzQ5IDE5Ljk4ODNDMTYuMzMxMyAxOS45NzU0IDE2LjI5OTkgMTkuOTYwMiAxNi4yODA3IDE5Ljk0MjVMMTYuMjIyNyAxOS45MTY0QzE2LjE5MzYgMTkuOTA3OCAxNi4xNjk1IDE5Ljg5NDYgMTYuMTUwMyAxOS44NzdMMTYuMDI3MiAxOS44MDQ3QzE1Ljk2NDQgMTkuNzc0MSAxNS45MTg2IDE5Ljc0NTYgMTUuODg5OCAxOS43MTkxTDE1LjY1MTUgMTkuNTQwOEwxNS42MzAxIDE5LjUwNzVDMTUuNjI1NCAxOS40OTQxIDE1LjYxMzUgMTkuNDc4NiAxNS41OTQzIDE5LjQ2MUwxNS4zNjM4IDE5LjI0OUMxNS4zMzQ5IDE5LjIyMjUgMTUuMjk4OSAxOS4xOTM5IDE1LjI1NTUgMTkuMTYzMUMxNS4yMjE4IDE5LjE0MTEgMTUuMTk1MyAxOS4xMjEzIDE1LjE3NjEgMTkuMTAzNkwxNC45NzQ0IDE4LjkxODJMMTQuODczNiAxOC44MjU1QzE0LjgyMDkgMTguNzY4IDE0Ljc4OTcgMTguNzM0OCAxNC43ODAxIDE4LjcyNTlMMTQuNjIxNiAxOC41ODAyTDE0LjUyNzggMTguNTA3NUwxNC40MjcgMTguNDE0OEwxMy40MzI5IDE3LjUwMDhMMTMuMzE3NyAxNy4zOTQ4TDEzLjE5NSAxNy4yOTU2TDEzLjE1MTggMTcuMjU1OUMxMy4xNDIyIDE3LjI0NzEgMTMuMTA2MSAxNy4yMTg0IDEzLjA0MzYgMTcuMTdMMTIuOTI4MyAxNy4wNjRMMTIuODk5NSAxNy4wMzc1TDEyLjc5ODYgMTYuOTQ0OEwxMi43MTkyIDE2Ljg4NTNMMTIuNTk2NiAxNi43ODYyTDEyLjQ5NTcgMTYuNjkzNEwxMi40MTYzIDE2LjYzNEwxMS44MTEyIDE2LjA3NzZDMTEuODAxNiAxNi4wNjg4IDExLjc5NDUgMTYuMDU3NyAxMS43ODk4IDE2LjA0NDNMMTEuNzMyMiAxNS45OTEzQzExLjcwMzQgMTUuOTY0OCAxMS42NzI0IDE1LjkyMjcgMTEuNjM5MSAxNS44NjVDMTEuNjA1OSAxNS44MDcyIDExLjU3MDEgMTUuNzYwNiAxMS41MzE3IDE1LjcyNTNMMTEuNTI1MSAxNS42Nzg0TDExLjUwMzIgMTUuNjcyTDExLjUxODggMTUuNjA0N0wxMS41MTE4IDE1LjU4NDZDMTEuNTEyMSAxNS41NjY3IDExLjUxOTUgMTUuNTU5OSAxMS41MzQgMTUuNTY0MkwxMS41MzQ0IDE1LjUzNzRDMTEuNTM2IDE1LjUzNjkgMTEuNTM3NSAxNS41MzYzIDExLjUzOSAxNS41MzU5TDExLjUyMzMgMTUuNDk5NkwxMS41MjI5IDE1LjQ3MjdMMTEuNTIyNCAxNS40NDU4TDExLjUxNDUgMTUuNDEyMUwxMS41NDg1IDE1LjI1NzhDMTEuNTQzNiAxNS4yNTMzIDExLjU0OCAxNS4yMzA5IDExLjU2MiAxNS4xOTA3QzExLjU4MDkgMTUuMTU1MiAxMS42MDIxIDE1LjExMjkgMTEuNjI1NyAxNS4wNjM5QzExLjY0NDYgMTUuMDI4MyAxMS42NTY0IDE1LjAwMzggMTEuNjYxIDE0Ljk5MDRMMTEuNjg5NCAxNC45MzdMMTEuNzMyMiAxNC44NzAzQzExLjc0NjEgMTQuODMwMiAxMS43NjI3IDE0LjgwMTIgMTEuNzgxOSAxNC43ODM2TDExLjgxMDIgMTQuNzMwMkMxMS44MTk1IDE0LjcwMzQgMTEuODMzOCAxNC42ODEyIDExLjg1MyAxNC42NjM1TDExLjkzMTYgMTQuNTUwM0MxMS45NjQ3IDE0LjQ5MjUgMTEuOTk1NyAxNC40NTAzIDEyLjAyNDUgMTQuNDIzOEwxMi4yMTgzIDE0LjIwNDZMMTIuMjU0NiAxNC4xODVDMTIuMjY5MSAxNC4xODA3IDEyLjI4NiAxNC4xNjk3IDEyLjMwNTIgMTQuMTUyMUwxMi41MzU3IDEzLjk0MDFDMTIuNTY0NSAxMy45MTM2IDEyLjU5NTcgMTMuODgwNCAxMi42MjkxIDEzLjg0MDZDMTIuNjUzIDEzLjgwOTUgMTIuNjc0NSAxMy43ODUyIDEyLjY5MzcgMTMuNzY3NUwxMi44OTU0IDEzLjU4MkwxMi45OTYzIDEzLjQ4OTNDMTMuMDU4OCAxMy40NDA5IDEzLjA5NDkgMTMuNDEyMyAxMy4xMDQ2IDEzLjQwMzRMMTMuMjYzIDEzLjI1NzdMMTMuMzQyIDEzLjE3MTRMMTMuNDQyOSAxMy4wNzg3TDE0LjQzNjkgMTIuMTY0NkwxNC41NTIyIDEyLjA1ODZMMTQuNjYgMTEuOTQ1OUwxNC43MDMyIDExLjkwNjFDMTQuNzEyOCAxMS44OTczIDE0Ljc0NCAxMS44NjQxIDE0Ljc5NjYgMTEuODA2NUwxNC45MTE5IDExLjcwMDZMMTQuOTQwNyAxMS42NzQxTDE1LjA0MTUgMTEuNTgxM0wxNS4xMDYxIDExLjUwODNMMTUuMjEzOSAxMS4zOTU1TDE1LjMxNDggMTEuMzAyN0wxNS4zNzk0IDExLjIyOTdMMTUuOTg0NCAxMC42NzMzQzE1Ljk5NDEgMTAuNjY0NSAxNi4wMDYxIDEwLjY1NzkgMTYuMDIwNyAxMC42NTM2TDE2LjA3ODMgMTAuNjAwNkMxNi4xMDcxIDEwLjU3NDIgMTYuMTUzIDEwLjU0NTcgMTYuMjE1OSAxMC41MTUyQzE2LjI3ODggMTAuNDg0NyAxNi4zMjk0IDEwLjQ1MTggMTYuMzY3OCAxMC40MTY1TDE2LjQxODkgMTAuNDEwNUwxNi40MjU5IDEwLjM5MDRMMTYuNDk5MyAxMC40MDQ5TDE2LjUyMTEgMTAuMzk4NUMxNi41NDA2IDEwLjM5ODcgMTYuNTQ4MSAxMC40MDU2IDE2LjU0MzQgMTAuNDE5TDE2LjU3MjcgMTAuNDE5NEMxNi41ODI5IDEwLjQ0NjQgMTYuNTkyOCAxMC40NTU1IDE2LjYwMjQgMTAuNDQ2N0wxNi42MTAzIDEwLjQ4MDRDMTYuNjIwMiAxMC40ODk2IDE2LjYzMjQgMTAuNDkyIDE2LjY0NyAxMC40ODc3TDE2LjcyMzEgMTAuNjYzN0wxNi43MjQgMTAuNzE3NUwxNi43NDY3IDEwLjc2NDlDMTYuNzU2NyAxMC43NzQgMTYuNzY2NCAxMC43NzQxIDE2Ljc3NiAxMC43NjUzTDE2Ljc4MzkgMTAuNzk5QzE2Ljc5ODUgMTAuNzk0OCAxNi44MDgyIDEwLjc5NDkgMTYuODEzMiAxMC43OTk1TDE2Ljg0MjkgMTAuODI2OEMxNi44NTc1IDEwLjgyMjUgMTYuODc5OSAxMC44NTIgMTYuOTEwMiAxMC45MTUyTDE2Ljk3MDUgMTEuMDIzN0wxNi45MzYxIDExLjE1MUMxNi45NDExIDExLjE1NTUgMTYuOTQxMiAxMS4xNjQ1IDE2LjkzNjYgMTEuMTc3OUwxNi44NjU1IDExLjI5NzlDMTYuODM3MyAxMS4zNjAzIDE2LjgwODcgMTEuNDA0OCAxNi43Nzk5IDExLjQzMTNDMTYuNzQxNSAxMS40NjY2IDE2LjcyIDExLjQ5MDkgMTYuNzE1MyAxMS41MDQzTDE2LjY1NzcgMTEuNTU3M0MxNi42MSAxMS42MTk0IDE2LjU1MjUgMTEuNjgxNCAxNi40ODUzIDExLjc0MzJMMTYuMzc3NCAxMS44NTZDMTYuMzY3OSAxMS44NjQ4IDE2LjM1MTEgMTEuODg0NyAxNi4zMjczIDExLjkxNThDMTYuMzAzNCAxMS45NDY4IDE2LjI4MTkgMTEuOTcxMiAxNi4yNjI3IDExLjk4ODlMMTUuMzU1MSAxMi44MjM0TDE1LjE1MzQgMTMuMDA4OUMxNS4wNjIzIDEzLjEwMTcgMTQuOTk3NSAxMy4xNjU4IDE0Ljk1OTEgMTMuMjAxMkwxNC42OTk4IDEzLjQzOTZMMTQuNjQ5NiAxMy40OTk0TDE0LjI3NSAxMy44NDM5TDE0LjA0NDUgMTQuMDU1OEMxMy45NDM5IDE0LjE1NzUgMTMuODY5NSAxNC4yMzA0IDEzLjgyMTUgMTQuMjc0NkwxMi42Njg5IDE1LjMzNDNDMTIuNjY0NyAxNS4zMzA0IDEyLjY1MjUgMTUuMzM1NSAxMi42MzI0IDE1LjM0OTZaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K" />'
  });

}
