const { transfers } = require("../models/transferModel");
const { getUser } = require("./userService");

function transfer({ from, to, amount }) {
  const sender = getUser(from);
  const recipient = getUser(to);
  if (!sender || !recipient) throw new Error("Usuário não encontrado");
  if (sender.saldo < amount) throw new Error("Saldo insuficiente");
  if (!recipient.favorecido && amount >= 5000) {
    throw new Error("Transferências acima de R$ 5.000,00 só para favorecidos");
  }
  sender.saldo -= amount;
  recipient.saldo += amount;
  const transfer = { from, to, amount, date: new Date() };
  transfers.push(transfer);
  return transfer;
}

function getTransfers() {
  return transfers;
}

module.exports = {
  transfer,
  getTransfers,
};
