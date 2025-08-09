//bibliotecas
const request = require("supertest");
const sinon = require("sinon");
const { expect } = require("chai");

//aplicação
const app = require("../../app");

//mock
const transferService = require('../../services/transferService')

// Testes
describe("Transfer Controller", () => {
  describe("POST /transfers", () => {
    it("Quando informo remetente e destinatario inexistentes recebo 400", async () => {
      const resposta = await request(app).post("/transfers").send({
        from: "cristian",
        to: "carlos",
        amount: 100,
      });
      expect(resposta.status).to.equal(400);
      expect(resposta.body).to.have.property('error', 'Usuário não encontrado');
      
    });
    it("Usando Mocks: Quando informo remetente e destinatario inexistentes recebo 400", async () => {
        // mocar apenas a função transfer do service
        const transferServiceMock = sinon.stub(transferService, 'transfer')
        transferServiceMock.throws (new Error("Usuário não encontrado"));

        const resposta = await request(app)
        .post("/transfers")
        .send({
            from: "cristian",
            to: "carlos",
            amount: 100,
        });
      expect(resposta.status).to.equal(400);
      expect(resposta.body).to.have.property('error', 'Usuário não encontrado');
      
      // reseto o mock
      sinon.restore();
    });
  });
});
