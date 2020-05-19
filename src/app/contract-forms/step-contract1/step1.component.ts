import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contract-form-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.less']
})
export class ContractFormPage1Component implements OnInit {
  contract_heading = 'Überlassungs- und Servicevereinbarung';
  headingpara1 = 'Leistungsumfang der PTC Telematik GmbH';
  headingpara2 = '	Vertragsbeginn / Laufzeit / Kündigung';
  headingpara3 = '	Datenspeicherung ';
  headingpara4 = '	Nutzungs- und Servicepauschalen';
  headingpara5 = '	Vertragsbedingungen';
  headingpara6 = '	Entgelt /Vertragslaufzeit';
  paratext1_1 = ' Die PTC Telematik GmbH liefert die für den Betrieb von Telematik-Systemen erforderliche Hardware sowie entsprechend dem gewünschten Lieferumfang weitere Peripheriegeräte, die mit dem System verbunden werden und sorgt für die Anbindung der Telematik-Geräte an ein Operationssystem. Die Hardware wird konfektioniert, d.h. sie wird mit der für den Betrieb erforderlichen Konfiguration (Software) versehen, mit einer aktiven SIM-Karte eines Mobilfunk-betreibers bestückt und auf dem Datenserver angelegt, so dass der sofortige Einsatz möglich ist';
  paratext1_2 = ' Der Auftraggeber erhält den Zugang zu einem Online-Portal, um die gebuchten Anwendungen nutzen zu können. Die PTC Telematik GmbH stellt alle Updates der Software zur Verfügung, die für das von ihm genutzte System und die gebuchten Module entwickelt werden. ';
  paratext1_3 = ' Die PTC Telematik GmbH sorgt für den Daten-transfer über ein Mobilfunknetz (Mobilfunkkosten inklusive), übernimmt die Lizenzgebühren für die elektronischen Karten, sichert das Data-Hosting auf eigenen Servern in einem gesicherten Rechenzentrum in Frankfurt am Main und bietet den mit den Leistungen verbundenen Service.';
  paratext1_4 = ' Die PTC Telematik GmbH steht dem Auftraggeber während der Geschäftszeiten als Ansprechpartner für Fragen zur Nutzung Telematik-Systems und des Online-Portals schriftlich und telefonisch als Ansprechpartner zur Verfügung. ';
  paratext2_1 = '	Die Nutzungszeit beginnt an dem zwischen den Parteien vereinbartem Tage. Falls die PTC Telematik GmbH mit der Installation der Hardware beauftragt wird, beginnt der Vertrag mit dem Einbau, falls nicht, mit dem Versand der Hardware und der Zurverfügungstellung des Online-Portals. ';
  paratext2_2 = '	Der Vertrag kommt mit der Auftragsbestätigung zustande.  Die Laufzeit ergibt sich aus der im Angebot ersichtlichen Regelung. Der Vertrag kann mit einer Frist von 3 Monaten zum Ende der vereinbarten Laufzeit gekündigt werden. Sollte keine Kündigung erfolgen, verlängert sich die Vereinbarung jeweils um ein weiteres Jahr.';
  paratext2_3 = '	Dem Auftraggeber werden der Einbau vor Ort sowie eine Garantie-Vor-Ort-Option angeboten.';
  paratext3_1 = 'Der Auftraggeber bestimmt die Dauer der Datenspeicherung. Sollte keine Frist bestimmt worden sein, werden die Daten nach Ablauf eines Jahres gelöscht; es sei denn, dass eine längere Speicherzeit gesondert vereinbart wurde.';
  paratext3_2 = 'Die Richtlinie zur Verarbeitung personenbezogener Daten sowie der Auftragsverarbeitungsvertrag nebst Anlagen ist ebenfalls Gegenstand dieser Vereinbarung.';
  paratext4_1 = '	Die Leistungen der PTC Telematik GmbH gemäß dieser Vereinbarung werden dem Auftraggeber entweder zum Kauf mit einer monatlichen Servicepauschale oder als Abonnement inklusive der Nutzungs- und Servicepauschale angeboten. Maßgeblich ist die Auftragsbestätigung.';
  paratext5_1 = 'Nebenabreden und Ergänzungen des Vertrages bedürfen der Schriftform. Maßgebliche Bestandteile dieses Vertrages sind das Angebot, die Auftragsbestätigung, die AGB sowie die besonderen Vertragsbedingungen der Auftrag-nehmerin.';


  constructor() { }

  ngOnInit(): void {

  }

}
