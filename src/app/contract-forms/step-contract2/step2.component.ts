import { Component, OnInit } from '@angular/core';
import {CommonFormService} from '../commonFormService/common-form-service.service';
import {CommonFormsFile} from '../commonFormsFile';

@Component({
  selector: 'app-contract-form-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.less']
})
export class ContractFormPage2Component implements OnInit {
  checked1 = false;
  checked2 = false;
  checked3 = false;
  checked4 = false;
  monatlich = false;
  viertel = false;
  halb = false;
  jahr = false;
  headingpara7 = 'Fälligkeit / Zahlung / Rechnung';
  headingpara6 = '	Entgelt /Vertragslaufzeit';
  paratext7_1 = 'Die Zahlungen erfolgen per Lastschrift ohne jeden Abzug bei Rechnungserhalt und der gesetzlich vorgeschriebenen Ankündigung. Dies gilt auch für Waren oder Dienstleistungen, die in Verbindung mit dem Nutzungsvertrag übernommen oder in Anspruch genommen werden, wie z.B. die Montage oder Demontage der Hardware oder etwaige Nachlieferungen';
  paratext7_2 = 'Ich ermächtige die PTC Telematik GmbH, Zahlungen von meinem Konto mittels Lastschrift einzuziehen. Zugleich weise ich mein Kreditinstitut an, die von der PTC Telematik GmbH auf mein Konto gezogenen Lastschriften einzulösen.';
  paratext7_3 = 'Hinweis: Ich kann innerhalb von 8 Wochen, beginnend mit dem Belastungsdatum, die Erstattung des belasteten Betrages verlangen. Es gelten dabei die mit meinem Kreditinstitut vereinbarten Bedingungen.';

  Laufzeitbeginn = '31.3.2020';
  Laufzeitende = '30.3.2024';

  payUpfront = false;
  
  constructor(public currentState: CommonFormService) { }

  ngOnInit(): void {

    if (CommonFormsFile.ContractFormPage2Component != null) {
      this.currentState.ContractFormPage2Component = CommonFormsFile.ContractFormPage2Component;
      // console.log('this is whant i want to seee');
      // console.log(JSON.stringify(this.currentState.RechnungFormComponent));
    }
    else {
      this.currentState.getFinalContractForm();
    }

  }
}
