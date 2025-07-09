import { CommonModule } from '@angular/common';
import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-contador-peso-component',
  imports: [CommonModule],
  templateUrl: './contador-peso.component.html',
  styleUrls: ['./contador-peso.component.css']
})
export class ContadorPesoComponent {

  W = signal(40); 
  H = signal(1.64); 


  IMC = computed(() => {
    const peso = this.W();
    const altura = this.H();
    return altura > 0 ? (peso / (altura * altura)).toFixed(2) : '0';
  });

  
  sumar() {
    this.W.update((value) => value + 1);
  }

  restar() {
    this.W.update((value) => value - 1);
  }

  resetKG() {
    this.W.set(40);
  }

  estadoIMC = computed(() => {
  const imc = parseFloat(this.IMC() as string);
  if (imc < 18.5) {
    return 'Bajo peso';
  } else if (imc < 24.9) {
    return 'Normal';
  } else if (imc < 29.9) {
    return 'Sobrepeso';
  } else {
    return 'Obesidad';
  }
});
consejoIMC = computed(() => {
  switch(this.estadoIMC()) {
    case 'Bajo peso':
      return 'Te recomendamos aumentar tu ingesta calórica y consultar a un nutricionista.';
    case 'Normal':
      return 'Mantén una dieta balanceada y ejercicio regular para conservar tu peso ideal.';
    case 'Sobrepeso':
      return 'Considera una dieta saludable y aumenta tu actividad física para mejorar tu salud.';
    case 'Obesidad':
      return 'Es importante consultar con un profesional de salud para un plan adecuado.';
    default:
      return '';
  }
});

}
