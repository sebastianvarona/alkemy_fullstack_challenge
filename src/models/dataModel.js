export default class Datos {
  constructor({ concepto, monto, fecha, tipo, categoria }) {
    this.concepto = concepto;
    this.monto = monto;
    this.fecha = fecha;
    this.tipo = tipo;
    this.categoria = categoria;
  }
  toArray() {
    return [this.concepto, this.monto, this.fecha, this.tipo, this.categoria];
  }
}
