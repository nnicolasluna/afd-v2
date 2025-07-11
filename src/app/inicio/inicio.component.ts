import { Component, AfterViewInit, signal, inject } from '@angular/core';
import * as L from 'leaflet';
import { HttpClient } from '@angular/common/http';
import { ModalStateService } from '../services/modal-state/modal-state.service';
import { VisibilidadService } from '../services/modal-state/visible.service';
import { sideBySideControl } from './sidebyside/swipe.control';

interface WMSOptions extends L.WMSOptions {
  opacity?: number;
}
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent implements AfterViewInit {
  direccionServidor = 'https://geoserver.bits.bo/geoserver/aceaa/wms';
  private map!: L.Map;
  private map1!: L.Map;
  private map2!: L.Map;
  private map3!: L.Map;
  x: string = '';
  isvisible = true;
  municipio = '';
  mostrarCard = false;
  mostrarDiagnostico = false;
  mostrarLeftBar = false;
  mostrarEvaluamos = false;
  mostrarVerDiagnostico = false;
  mostrarrecu = false;
  mostraralternativas = false;
  mostraralter_rightbar = false;
  mostrartrebotones = false;
  mostrartrebotonEvaluamos = false;
  mostrarConvenios = false;
  mostrarManuales = false;
  mostrarTalleres = false;
  mostrarLeyenda = false;
  mostrarPrePost = false;
  mostrarfocos = false;
  mostrarrege = false;
  mostrarRecuperacion = false;
  mostrarFaunaFlora = false;
  mostrarAfectadas = false;
  mostrarquemas = false;
  mostrarrestauracion = false;
  tipoLeyenda: string = '';
  mostrarMapa2 = false;
  mostrarMapa3 = false;
  bounds: any;
  indice: any;
  leyandaActiva: any;
  mostrarRightBar: boolean = true;
  TipoMapa: any;
  private visibilidadServiceVar = inject(VisibilidadService);
  departamentos = [
    {
      departamento: 'La Paz',
      source: 'assets/geojson/LaPaz/LaPaz.geo.json',
      state: true,
    },
    {
      departamento: 'Beni',
      source: 'assets/geojson/Beni/Beni.geo.json',
      state: true,
    },
    {
      departamento: 'Cochabamba',
      source: 'assets/geojson/Cocha/Cochabamba.geo.json',
      state: true,
    },
  ];
  municipios = [
    {
      municipio: 'San Buenaventura',
      departamento: 'La Paz',
      source: 'assets/geojson/LaPaz/Municipios/SanBuenaventura.geo.json',
      color: '#FF5C5CB5',
      bounds: [
        [-14.595647073317162, -68.08062043756617],
        [-13.949129563336342, -67.47255082174567],
      ],
      wms: {
        pre: {
          ndvi: 'aceaa:a_1746458264450preNDVISanBuena',
          nbr: 'aceaa:a_1746457357110preNBRSanBuena',
        },
        post: {
          ndvi: 'aceaa:a_1746459648105postNDVISanBuena',
          nbr: 'aceaa:a_1746461096055PostNBRSanBuena',
        },
        dnbr: 'aceaa:a_1747538623598sanbuena_dnbr1',
        focosCalor: {
          foco: 'aceaa:layer_focos_de_calor__san_buenaventura_9vf0rk',
          lm: 'aceaa:layer_lim__sanbuena_1eq9k',
        },
        quemas: 'aceaa:layer_areas_quemadas__san_buenaventura_ey7w5',
        Flora: {
          b: 'aceaa:layer_bosques__san_buenaventura_0p6o6',
          pcp: 'aceaa:layer_centros_poblados__san_buenaventura_3rx6dl',
          cp: 'aceaa:layer_comunidades__san_buenaventura_2iutt',
          lm: 'aceaa:layer_limite_municipal__san_buenaventura_4svij',
          aq: 'aceaa:layer_areas_quemadas__san_buenaventura_ey7w5',
          tco: 'aceaa:layer_tcos__san_buenaventura_sqzft',
          ap: 'aceaa:layer_areas_protegidas__san_buenaventura_8m4v5',
        },
        reptiles: {
          r: 'aceaa:layer_san_buenaventura__reptiles_h9uxv',
          an: 'aceaa:layer_san_buenaventura__anfibios_tnaut',
          aq: 'aceaa:layer_areas_quemadas__san_buenaventura_ey7w5',
          pcp: 'aceaa:layer_centros_poblados__san_buenaventura_3rx6dl',
          lm: 'aceaa:layer_lim__sanbuena_1eq9k',
        },
        mamiferos: {
          ma: 'aceaa:',
          av: 'aceaa:layer_san_buenaventura__aves_rhimql',
          aq: 'aceaa:layer_areas_quemadas__san_buenaventura_ey7w5',
          pcp: 'aceaa:layer_centros_poblados__san_buenaventura_3rx6dl',
          lm: 'aceaa:layer_lim__sanbuena_1eq9k',
        },
        AreasAfectadas: {
          af: 'aceaa:layer_areas_afectadas__san_buenaventura_7d67c',
          ap: 'aceaa:',
          cam: 'aceaa:layer_caminos__san_buenaventura_lkix1',
          ed: 'aceaa:layer_educacion__san_buenaventura_vykej',
          es: 'aceaa:layer_centros_de_salud__san_buenaventura_g3di2',
          c: 'aceaa:layer_com__sanbuena_f2d5b',
          lm: 'aceaa:layer_lim__sanbuena_1eq9k',
        },
        restauracion: {
          af: 'aceaa:layer_restauracion__san_buena_3aj6h',
          ap: 'aceaa:',
          cam: 'aceaa:layer_caminos__san_buenaventura_lkix1',
          ed: 'aceaa:layer_educacion__san_buenaventura_vykej',
          es: 'aceaa:layer_centros_de_salud__san_buenaventura_g3di2',
          c: 'aceaa:layer_com__sanbuena_f2d5b',
          lm: 'aceaa:layer_lim__sanbuena_1eq9k',
        },
        regeneracionPasiva: {
          ar: 'aceaa:layer_restauracion__san_buena_3aj6h',
          ap: 'aceaa:layer_areas_protegidas__san_buenaventura_8m4v5',
          cam: 'aceaa:layer_caminos__san_buenaventura_lkix1',
          arege: 'aceaa:layer_regenracion__san_buena_h3h8mg',
          aq: 'aceaa:layer_areas_quemadas__san_buenaventura_ey7w5',
          c: 'aceaa:layer_com__sanbuena_f2d5b',
          lm: 'aceaa:layer_lim__sanbuena_1eq9k',
        },
        regeneracionActiva: {
          ar: 'aceaa:layer_restauracion__san_buena_3aj6h',
          arege: 'aceaa:layer_regenracion__san_buena_h3h8mg',
          lm: 'aceaa:layer_lim__sanbuena_1eq9k',
        },
      },
    },
    {
      municipio: 'Palos Blancos',
      departamento: 'La Paz',
      source: 'assets/geojson/LaPaz/Municipios/PalosBlancos.geo.json',
      color: '#F4A21ABD',
      bounds: [
        [-15.937101287092842, -67.66398180879155],
        [-14.921915184509372, -66.79540076057638],
      ],
      wms: {
        pre: {
          ndvi: 'aceaa:a_1746452622394preNDVIPalosBlancos',
          nbr: 'aceaa:a_1746452806527preNBRPalosBlancos',
        },
        post: {
          ndvi: 'aceaa:a_1746458795037postNDVIPalosBlancos',
          nbr: 'aceaa:a_1746460441687PostNBRPalosBlancos',
        },
        dnbr: 'aceaa:a_1747576386958dNBR1_pb',
        focosCalor: {
          foco: 'aceaa:layer_focos_de_calor__palos_blancos_nyusnf',
          lm: 'aceaa:layer_lim__palbl_9w7b5',
        },
        quemas: 'aceaa:layer_quemas_2023palos_blancos_uu9f',
        Flora: {
          b: 'aceaa:layer_bosques__palos_blancos_w0088',
          pcp: 'aceaa:layer_principales_comunidades__palos_blancos_yqoe9',
          cp: 'aceaa:layer_comunidades__palos_blancos_12lr2',
          lm: 'aceaa:layer_limite_municipal__palos_blancos_e1wjf',
          aq: 'aceaa:layer_quemas_2023palos_blancos_uu9f',
          tco: 'aceaa:layer_tcos__palos_blancos_veodq',
          ap: 'aceaa:layer_areas_protegidas_palos_blancos_nuobfg',
        },
        reptiles: {
          r: 'aceaa:',
          an: 'aceaa:layer_palos_blancos__anfibios_vgueg',
          aq: 'aceaa:layer_quemas_2023palos_blancos_uu9f',
          pcp: 'aceaa:layer_principales_comunidades__palos_blancos_yqoe9',
          lm: 'aceaa:layer_lim__palbl_9w7b5',
        },
        mamiferos: {
          ma: 'aceaa:layer_palos_blancos__mamiferos_i9ma3',
          av: 'aceaa:layer_palos_blancos__aves_xlyp1k',
          aq: 'aceaa:layer_quemas_2023palos_blancos_uu9f',
          pcp: 'aceaa:layer_principales_comunidades__palos_blancos_yqoe9',
          lm: 'aceaa:layer_lim__palbl_9w7b5',
        },
        AreasAfectadas: {
          af: 'aceaa:layer_areas_afectadas__palos_blancos_l7r6j',
          ap: 'aceaa:',
          cam: 'aceaa:layer_caminos__palos_blancos_6oztc',
          ed: 'aceaa:layer_educacion__palo_blancos_0bauh',
          es: 'aceaa:layer_centros_de_salud__palos_blancos_ba79mk',
          c: 'aceaa:layer_com__palos_0z5xe',
          lm: 'aceaa:layer_lim__palbl_9w7b5',
        },
        restauracion: {
          af: 'aceaa:layer_restauracion__palos_b8p3mj',
          ap: 'aceaa:',
          cam: 'aceaa:layer_caminos__palos_blancos_6oztc',
          ed: 'aceaa:layer_educacion__palo_blancos_0bauh',
          es: 'aceaa:layer_centros_de_salud__palos_blancos_ba79mk',
          c: 'aceaa:layer_com__palos_0z5xe',
          lm: 'aceaa:layer_lim__palbl_9w7b5',
        },
        regeneracionPasiva: {
          ar: 'aceaa:layer_restauracion__palos_b8p3mj',
          ap: 'aceaa:layer_areas_protegidas_palos_blancos_nuobfg',
          cam: 'aceaa:layer_caminos__palos_blancos_6oztc',
          arege: 'aceaa:layer_regenracion__palos_blancos_63a1j',
          aq: 'aceaa:layer_quemas_2023palos_blancos_uu9f',
          c: 'aceaa:layer_com__palos_0z5xe',
          lm: 'aceaa:layer_lim__palbl_9w7b5',
        },
        regeneracionActiva: {
          ar: 'aceaa:layer_restauracion__palos_b8p3mj',
          arege: 'aceaa:layer_regenracion__palos_blancos_63a1j',
          lm: 'aceaa:layer_lim__palbl_9w7b5',
        },
      },
    },
    {
      municipio: 'Rurrenabaque',
      departamento: 'Beni',
      source: 'assets/geojson/Beni/Municipios/SanBorja.geo.json',
      color: '#45818E',
      bounds: [
        [-15.04651151441675, -67.55968740430527],
        [-14.343220478479576, -67.0736988355966],
      ],

      wms: {
        pre: {
          ndvi: 'aceaa:a_1746457664348preNDVIRurrenabaque',
          nbr: 'aceaa:a_1746456908941preNBRRurrenabaque',
        },
        post: {
          ndvi: 'aceaa:a_1746459230710postNDVIRurrenabaque',
          nbr: 'aceaa:a_1746460712250PostNBRRurrenabaque',
        },
        dnbr: 'aceaa:a_1747538931290rure_dnbr1',
        focosCalor: {
          foco: 'aceaa:layer_focos_de_calor__rurranabaque_cdmg5',
          lm: 'aceaa:layer_lim__rurre_2gri6',
        },
        quemas: 'aceaa:layer_quemas__rurrenabaque_wi7wz',
        Flora: {
          b: 'aceaa:layer_bosques__rurrenabaque_nzou',
          pcp: 'aceaa:',
          cp: 'aceaa:layer_comunidades__rurrenabaque_3u86m',
          lm: 'aceaa:layer_limite_municipal__rurrenabaque_im1s',
          aq: 'aceaa:layer_quemas__rurrenabaque_wi7wz',
          tco: 'aceaa:layer_tcos__rurrenabaque_3cwei',
          ap: 'aceaa:layer_areas_protegidas__rurrenabaque_54elx',
        },
        reptiles: {
          r: 'aceaa:layer_rurrenabaque__reptiles_agq4d',
          an: 'aceaa:',
          pcp: 'aceaa:',
          aq: 'aceaa:layer_quemas__rurrenabaque_wi7wz',
          lm: 'aceaa:layer_lim__rurre_2gri6',
        },
        mamiferos: {
          ma: 'aceaa:layer_rurrenabaque__mamiferos_r6dx8',
          av: 'aceaa:layer_rurrenabaque__aves_r6lbg',
          aq: 'aceaa:layer_quemas__rurrenabaque_wi7wz',
          pcp: 'aceaa:',
          lm: 'aceaa:layer_lim__rurre_2gri6',
        },
        AreasAfectadas: {
          af: 'aceaa:layer_areas_afectadas__rurrenabaque_nbi75',
          ap: 'aceaa:',
          cam: 'aceaa:layer_caminos__rurrenabaque_fjkee',
          ed: 'aceaa:layer_educacion__rurrenabaque_cuua9',
          es: 'aceaa:layer_centros_de_salud__rurrenabaque_fko8d',
          c: 'aceaa:layer_com__rurre_qtmpih',
          lm: 'aceaa:layer_lim__rurre_2gri6',
        },
        restauracion: {
          af: 'aceaa:layer_restauracion__rurre_p35e6',
          ap: 'aceaa:',
          cam: 'aceaa:layer_caminos__rurrenabaque_fjkee',
          ed: 'aceaa:layer_educacion__rurrenabaque_cuua9',
          es: 'aceaa:layer_centros_de_salud__rurrenabaque_fko8d',
          c: 'aceaa:layer_com__rurre_qtmpih',
          lm: 'aceaa:layer_lim__rurre_2gri6',
        },
        regeneracionPasiva: {
          ar: 'aceaa:layer_restauracion__rurre_p35e6',
          ap: 'aceaa:layer_areas_protegidas__rurrenabaque_54elx',
          cam: 'aceaa:layer_caminos__rurrenabaque_fjkee',
          arege: 'aceaa:layer_regenracion__rurrenabaque_nlk4t',
          aq: 'aceaa:layer_quemas__rurrenabaque_wi7wz',
          c: 'aceaa:layer_com__rurre_qtmpih',
          lm: 'aceaa:layer_lim__rurre_2gri6',
        },
        regeneracionActiva: {
          ar: 'aceaa:layer_restauracion__rurre_p35e6',
          arege: 'aceaa:layer_regenracion__rurrenabaque_nlk4t',
          lm: 'aceaa:layer_lim__rurre_2gri6',
        },
      },
    },
    {
      municipio: 'San Borja',
      departamento: 'Beni',
      source: 'assets/geojson/Beni/Municipios/Rurre.geo.json',
      color: '#8FCE00',
      bounds: [
        [-15.807833717708043, -67.29180978658083],
        [-14.310701465194448, -66.52105527280628],
      ],
      wms: {
        pre: {
          ndvi: 'aceaa:a_1746457864518preNDVISanBorja',
          nbr: 'aceaa:a_1746456545640preNBRSanBorja',
        },
        post: {
          ndvi: 'aceaa:a_1746459396083postNDVISanBorja',
          nbr: 'aceaa:a_1746460827267PostNBRSanBorja',
        },
        dnbr: 'aceaa:a_1747589538998dNBR_sb1',
        focosCalor: {
          foco: 'aceaa:layer_san_borja__focos_de_calor_sno9f',
          lm: 'aceaa:layer_lim__sanbor_6cq47',
        },
        quemas: 'aceaa:layer_quemas__san_borja_sw6j4',
        Flora: {
          b: 'aceaa:layer_bosques__san_borja_3k08u',
          pcp: 'aceaa:layer_centros_poblados__san_borja_os7lj',
          cp: 'aceaa:layer_comunidades__san_borja_xxxqn',
          lm: 'aceaa:layer_limite_municipal__san_borja_9wnmdk',
          aq: 'aceaa:layer_quemas__san_borja_sw6j4',
          tco: 'aceaa:layer_tcos__san_borja_ihj72',
          ap: 'aceaa:layer_areas_protegidas__san_borja_6igyd',
        },
        reptiles: {
          r: 'aceaa:layer_san_borja__reptiles_qsb99',
          an: 'aceaa:layer_san_borja__anfibios_p8xb',
          pcp: 'aceaa:layer_centros_poblados__san_borja_os7lj',
          lm: 'aceaa:layer_lim__sanbor_6cq47',
          aq: 'aceaa:layer_lim__sanbor_6cq47',
        },
        mamiferos: {
          ma: 'aceaa:layer_san_borja__mamiferos_t0ji6',
          av: 'aceaa:layer_san_borja__aves_h1ijw',
          aq: 'aceaa:layer_quemas__san_borja_sw6j4',
          pcp: 'aceaa:layer_centros_poblados__san_borja_os7lj',
          lm: 'aceaa:layer_lim__sanbor_6cq47',
        },
        AreasAfectadas: {
          af: 'aceaa:layer_areas_afectadas__san_borja_qb07d',
          ap: 'aceaa:',
          cam: 'aceaa:layer_caminos__san_borja_ytbtf',
          ed: 'aceaa:layer_educacion__san_borja_spoo4',
          es: 'aceaa:layer_centros_de_salud__san_borja_tbs5o',
          c: 'aceaa:layer_com__sanborja_773kv',
          lm: 'aceaa:layer_lim__sanbor_6cq47',
        },
        restauracion: {
          af: 'aceaa:layer_restauracion__san_borja_o4n6y',
          ap: 'aceaa:',
          cam: 'aceaa:layer_caminos__san_borja_ytbtf',
          ed: 'aceaa:layer_educacion__san_borja_spoo4',
          es: 'aceaa:layer_centros_de_salud__san_borja_tbs5o',
          c: 'aceaa:layer_com__sanborja_773kv',
          lm: 'aceaa:layer_lim__sanbor_6cq47',
        },
        regeneracionPasiva: {
          ar: 'aceaa:layer_restauracion__san_borja_o4n6y',
          ap: 'aceaa:layer_areas_protegidas__san_borja_6igyd',
          cam: 'aceaa:layer_caminos__san_borja_ytbtf',
          arege: 'aceaa:layer_regenracion__san_borja_cqyu',
          aq: 'aceaa:layer_quemas__san_borja_sw6j4',
          c: 'aceaa:layer_com__sanborja_773kv',
          lm: 'aceaa:layer_lim__sanbor_6cq47',
        },
        regeneracionActiva: {
          ar: 'aceaa:layer_lim__sanbor_6cq47',
          arege: 'aceaa:layer_regenracion__san_borja_cqyu',
          lm: 'aceaa:layer_restauracion__san_borja_o4n6y',
        },
      },
    },
    {
      municipio: 'Vinto',
      departamento: 'Cochabamba',
      source: 'assets/geojson/Cocha/Municipios/Vinto.geo.json',
      color: '#3521E8',
      bounds: [
        [-17.425969038992537, -66.45925118125885],
        [-17.257175597106478, -66.28695430976472],
      ],
      wms: {
        pre: {
          ndvi: 'aceaa:a_1746458448842preNDVIVinto',
          nbr: 'aceaa:a_1746457186315preNBRVinto',
        },
        post: {
          ndvi: 'aceaa:a_1746460151272postNDVIVinto',
          nbr: 'aceaa:a_1746461278454PostNBRVinto',
        },
        dnbr: 'aceaa:a_1747536074621vinto2',
        focosCalor: {
          foco: 'aceaa:layer_vinto__focos_de_calor_zpk08',
          lm: 'aceaa:layer_lim__vinto_fwxbq',
        },
        quemas: 'aceaa:layer_recurrencia_vinto_log5y',
        Flora: {
          pcp: 'aceaa:',
          cp: 'aceaa:layer_comunidades__vinto_rdrho',
          lm: 'aceaa:layer_limite_municipal__vinto_tcdqo',
          aq: 'aceaa:layer_recurrencia_vinto_log5y',
          tco: 'aceaa:',
          ap: 'aceaa:layer_areas_protegidas__vinto_beowz',
          b: 'aceaa:layer_bosques__vinto_1t2k4',
        },
        reptiles: {
          r: 'aceaa:layer_vinto__reptiles_w3601',
          an: 'aceaa:layer_vinto__anfibios_02418k',
          aq: 'aceaa:layer_recurrencia_vinto_log5y',
          pcp: 'aceaa:',
          lm: 'aceaa:layer_lim__vinto_fwxbq',
        },
        mamiferos: {
          ma: 'aceaa:',
          av: 'aceaa:layer_vinto__aves_uwcsfj',
          aq: 'aceaa:layer_recurrencia_vinto_log5y',
          pcp: 'aceaa:',
          lm: 'aceaa:layer_lim__vinto_fwxbq',
        },
        AreasAfectadas: {
          af: 'aceaa:layer_areas_afectadas__vinto_nu4l8',
          ap: 'aceaa:',
          cam: 'aceaa:layer_caminos__vinto_7glcj',
          ed: 'aceaa:layer_educacion__vinto_jygiq',
          es: 'aceaa:layer_centros_de_salud__vinto_l0oeb',
          c: 'aceaa:layer_com__vinto_2u1z9',
          lm: 'aceaa:layer_lim__vinto_fwxbq',
        },
        restauracion: {
          af: 'aceaa:layer_resturacion__vinto_i0aiw',
          ap: 'aceaa:',
          cam: 'aceaa:layer_caminos__vinto_7glcj',
          ed: 'aceaa:layer_educacion__vinto_jygiq',
          es: 'aceaa:layer_centros_de_salud__vinto_l0oeb',
          c: 'aceaa:layer_com__vinto_2u1z9',
          lm: 'aceaa:layer_lim__vinto_fwxbq',
        },
        regeneracionPasiva: {
          ar: 'aceaa:layer_resturacion__vinto_i0aiw',
          ap: 'aceaa:layer_areas_protegidas__vinto_beowz',
          cam: 'aceaa:layer_caminos__vinto_7glcj',
          arege: 'aceaa:layer_regenracion__vinto_pbtef',
          aq: 'aceaa:layer_recurrencia_vinto_log5y',
          c: 'aceaa:layer_com__vinto_2u1z9',
          lm: 'aceaa:layer_lim__vinto_fwxbq',
        },
        regeneracionActiva: {
          ar: 'aceaa:layer_resturacion__vinto_i0aiw',
          arege: 'aceaa:layer_regenracion__vinto_pbtef',
          lm: 'aceaa:layer_lim__vinto_fwxbq',
        },
      },
    },
    {
      municipio: 'Tiquipaya',
      departamento: 'Cochabamba',
      source: 'assets/geojson/Cocha/Municipios/Tiqui.geo.json',
      color: '#C7914A',
      bounds: [
        [-17.3745854047409, -66.29890190304351],
        [-17.071134501765325, -66.09399618673585],
      ],
      wms: {
        pre: {
          ndvi: 'aceaa:a_1746458375180preNDVITiquipaya',
          nbr: 'aceaa:a_1746457245470preNBRTiquipaya',
        },
        post: {
          ndvi: 'aceaa:a_1746460308299postNDVITiquipaya',
          nbr: 'aceaa:a_1746461236706PostNBRTiquipaya',
        },
        dnbr: 'aceaa:a_1747538444570tiquipaya_dnbr1',
        focosCalor: {
          foco: 'aceaa:layer_tiquipaya__focos_de_calor_slxrf',
          lm: 'aceaa:layer_lim__tiquipaya_wk4pu',
        },
        quemas: 'aceaa:layer_recurrencia_tiquipaya_zau6h',
        Flora: {
          b: 'aceaa:layer_bosques_tiquipaya_e2qfg',
          pcp: 'aceaa:layer_centros_poblados__tiquipaya_gsj6f',
          cp: 'aceaa:layer_comunidades__tiquipaya_0h1xp',
          lm: 'aceaa:layer_limite_municipal__tiquipaya_tj5nf',
          aq: 'aceaa:layer_recurrencia_tiquipaya_zau6h',
          tco: 'aceaa:',
          ap: 'aceaa:layer_areas_protegidas__tiquipaya_yzg2e',
        },
        reptiles: {
          r: 'aceaa:layer_tiquipaya__reptiles_5b858',
          an: 'aceaa:layer_tiquipaya__anfibios_uas96',
          aq: 'aceaa:layer_recurrencia_tiquipaya_zau6h',
          pcp: 'aceaa:layer_centros_poblados__tiquipaya_gsj6f',
          lm: 'aceaa:layer_lim__tiquipaya_wk4pu',
        },
        mamiferos: {
          ma: 'aceaa:layer_tiquipaya__mamiferos_2xinr',
          av: 'aceaa:layer_tiquipaya__aves_o6zusi',
          aq: 'aceaa:layer_recurrencia_tiquipaya_zau6h',
          pcp: 'aceaa:layer_centros_poblados__tiquipaya_gsj6f',
          lm: 'aceaa:layer_lim__tiquipaya_wk4pu',
        },
        AreasAfectadas: {
          af: 'aceaa:layer_areas_afectads__tiquipaya_zamol',
          ap: 'aceaa:',
          cam: 'aceaa:layer_caminos__tiquipaya_grija',
          ed: 'aceaa:layer_educacion__tiquipaya_8t80j',
          es: 'aceaa:layer_centros_de_salud__tiquipaya_r1mw6',
          c: 'aceaa:layer_com__tiquipaya_n5j61',
          lm: 'aceaa:layer_lim__tiquipaya_wk4pu',
        },
        restauracion: {
          af: 'aceaa:layer_resturacion__tiquipaya_o1iji',
          ap: 'aceaa:',
          cam: 'aceaa:layer_caminos__tiquipaya_grija',
          ed: 'aceaa:layer_educacion__tiquipaya_8t80j',
          es: 'aceaa:layer_centros_de_salud__tiquipaya_r1mw6',
          c: 'aceaa:layer_com__tiquipaya_n5j61',
          lm: 'aceaa:layer_lim__tiquipaya_wk4pu',
        },
        regeneracionPasiva: {
          ar: 'aceaa:layer_resturacion__tiquipaya_o1iji',
          ap: 'aceaa:layer_areas_protegidas__tiquipaya_yzg2e',
          cam: 'aceaa:layer_caminos__tiquipaya_grija',
          arege: 'aceaa:layer_regenracion__tiquipaya_3kyv8',
          aq: 'aceaa:layer_recurrencia_tiquipaya_zau6h',
          c: 'aceaa:layer_com__tiquipaya_n5j61',
          lm: 'aceaa:layer_lim__tiquipaya_wk4pu',
        },
        regeneracionActiva: {
          ar: 'aceaa:layer_resturacion__tiquipaya_o1iji',
          arege: 'aceaa:layer_regenracion__tiquipaya_3kyv8',
          lm: 'aceaa:layer_lim__tiquipaya_wk4pu',
        },
      },
    },
  ];
  leyenda = {
    NBR: [
      {
        color: '#D7191C',
        description:
          'Áreas fuertemente afectadas, con probabilidad de áreas quemadas.',
      },
      {
        color: '#E03D2D',
        description:
          'Zonas con daños importantes en la vegetación, impacto moderado por incendios.',
      },
      {
        color: '#F58D52',
        description:
          'Áreas con afectación leve, posible daño menor a la vegetación.',
      },
      {
        color: '#FED690',
        description:
          'Sin cambios visibles. Vegetación estable o sin señales de incendio.',
      },
      {
        color: '#F8FA72',
        description: 'Vegetación saludable, con signos de recuperación.',
      },
      {
        color: '#BEEC82',
        description: 'Vegetación sana y con buena cobertura.',
      },
      {
        color: '#7ACE2B',
        description: 'Vegetación muy saludable, densa y sin estrés.',
      },
    ],
    DNBR: [
      {
        color: '#6B8E23',
        description: 'Alto crecimiento de vegetación posterior al fuego',
      },
      {
        color: '#ADD8E6',
        description: 'Bajo crecimiento de vegetación posterior al fuego',
      },
      {
        color: '#32CD32',
        description: 'Zonas estables o sin quemar',
      },
      {
        color: '#FFFF00',
        description: 'Zonas quemadas con gravedad baja',
      },
      {
        color: '#FFA500',
        description: 'Zonas quemadas con gravedad moderada-baja',
      },
      {
        color: '#FF4500',
        description: 'Zonas quemadas con gravedad moderada-alta',
      },
      {
        color: '#800080',
        description: 'Zonas quemadas con gravedad alta',
      },
    ],
    NDVI: [
      {
        color: '#F3C8E2',
        description:
          'Superficies sin vegetación, como cuerpos de agua, rocas, nieve o suelos muy degradados.',
      },
      {
        color: '#F4D9E9',
        description:
          'Áreas con muy poca o ninguna vegetación. Puede incluir suelos desnudos, zonas urbanas o caminos.',
      },
      {
        color: '#DEEEC9',
        description:
          'Vegetación escasa o débil, como pastizales pobres o cultivos en etapa inicial.',
      },
      {
        color: '#9BD26C',
        description:
          'Vegetación en buen estado. Se observan pastos densos, cultivos sanos o bosques abiertos.',
      },
      {
        color: '#4DAC26',
        description:
          'Vegetación muy densa y saludable, como selvas, bosques frondosos o cultivos en su máximo crecimiento.',
      },
    ],
    FocosCarlo: [
      {
        color: '#E49635',
        description: 'Focos de Calor - Junio 2023',
      },
      {
        color: '#EA6E34',
        description: 'Focos de Calor - Julio 2023',
      },
      {
        color: '#F15932',
        description: 'Focos de Calor - Agosto 2023',
      },
      {
        color: '#3D96B4',
        description: 'Focos de Calor - Octubre 2023',
      },
      {
        color: '#CA1B11',
        description: 'Focos de Calor - Noviembre 2023',
      },
      {
        color: '#C2E99D',
        description: 'Focos de Calor - Diciembre 2023',
      },
    ],
  };
  pulsePoints = [
    { long: -66.583986063547712, lat: -14.888469024881504, label: 'San Borja' },
    { long: -66.603523521731546, lat: -14.893767021419279, label: 'San Borja' },
    {
      long: -67.466772951849521,
      lat: -15.299242026007526,
      label: 'Palos Blancos',
    },
    {
      long: -67.250119785935283,
      lat: -15.586222016452332,
      label: 'Palos Blancos',
    },
    {
      long: -67.542160663186792,
      lat: -14.301949370763342,
      label: 'San Buenaventura',
    },
    {
      long: -67.560121032584576,
      lat: -14.332509679746231,
      label: 'San Buenaventura',
    },
    {
      long: -67.511256977542558,
      lat: -14.640596957397738,
      label: 'Rurrenabaque',
    },
    {
      long: -67.502035253202479,
      lat: -14.486743690229083,
      label: 'Rurrenabaque',
    },
    { long: -66.338472044796234, lat: -17.361136266187586, label: 'Vinto' },
    { long: -66.206486187544854, lat: -17.315427603500169, label: 'Tiquipaya' },
  ];
  private geoLayers: { [key: string]: L.GeoJSON } = {};
  constructor(
    private http: HttpClient,
    private modalServiceState: ModalStateService
  ) { }

  ngOnInit() {
    this.modalServiceState.vistaActual$.subscribe((vista) => {
      this.mostrarCard = vista === 'card';
      this.mostrarDiagnostico = vista === 'diagnostico';
      this.mostrarLeftBar = vista === 'leftbar';
      this.mostrarEvaluamos = vista === 'evaluamos';
      this.mostrarVerDiagnostico = vista === 'verdiagnostico';
      this.mostrarrecu = vista === 'recuperacion';
      this.mostraralternativas = vista === 'alternativas';
      this.mostraralter_rightbar = vista === 'alter-rightbar';
      this.mostrarConvenios = vista === 'convenios';
      this.mostrarManuales = vista === 'manuales';
      this.mostrarTalleres = vista === 'talleres';
      this.mostrarLeyenda = vista == 'leyenda';
      this.mostrarRecuperacion = vista == 'recuperacion';
    });
    this.modalServiceState.tresBtnAct$.subscribe((data) => {
      this.mostrartrebotones = data === 'tresBtn';
    });
    this.modalServiceState.BtnEvaluamos$.subscribe((data) => {
      this.mostrartrebotonEvaluamos = data === 'btnEvaluamos';
    });
    this.modalServiceState.PrePost$.subscribe((data) => {
      this.mostrarPrePost = data == 'prepost';
    });
    this.modalServiceState.focos$.subscribe((data) => {
      this.mostrarfocos = data == 'focos';
    });
    this.modalServiceState.quemas$.subscribe((data) => {
      this.mostrarquemas = data == 'quemas';
    });
    this.modalServiceState.faunaflora$.subscribe((data) => {
      this.mostrarFaunaFlora = data == 'faunaflora';
    });
    this.modalServiceState.afectadas$.subscribe((data) => {
      this.mostrarAfectadas = data == 'afectadas';
    });
    this.modalServiceState.restauracion$.subscribe((data) => {
      this.mostrarrestauracion = data == 'restauracion';
    });
    this.modalServiceState.regeneracion$.subscribe((data) => {
      this.mostrarrege = data == 'regeneracion';
    });
  }
  ngAfterViewInit(): void {
    this.initMap();
    this.departamentos.forEach((dep) => {
      this.cargarDepartamento(dep.source);
    });
    this.municipios.forEach((mun) => {
      this.cargarMunicipio(mun.source, '#FDE9A0', mun.color);
    });
    this.pulsePoints.forEach((point) =>
      this.PulseIcons(point.long, point.lat, this.map, 'red', 6)
    );
  }

  private initMap(): void {
    if (this.map) {
      this.map.remove();
    }
    this.map = L.map('map', {
      center: [-18, -65],
      zoom: 5,
      scrollWheelZoom: true,
      dragging: true,
      zoomControl: false,
      doubleClickZoom: false,
      minZoom: 6,
      maxZoom: 10,
    });
    this.map.setZoom(6.4);
    L.tileLayer(
      'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      {
        maxZoom: 18,
      }
    ).addTo(this.map);
    const labelsLayer = L.tileLayer(
      'https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}',
      {
        maxZoom: 18,
        pane: 'labels',
      }
    );

    if (!this.map.getPane('labels')) {
      this.map.createPane('labels');
      this.map.getPane('labels')!.style.zIndex = '';
      this.map.getPane('labels')!.style.pointerEvents = 'none';
    }

    labelsLayer.addTo(this.map);
    this.map.on('zoomend', () => {
      if (this.map.getZoom() === 6) {
        this.map.setView([-16, -65]);
      }
    });
  }
  PulseIcons(
    long: number,
    lat: number,
    map: any,
    color: string,
    iconsize: number
  ) {
    const className = color === 'red' ? 'pulse-marker' : 'pulse-marker-yellow';
    const blinkingIcon = L.divIcon({
      className,
      iconSize: [iconsize, iconsize],
    });
    L.marker([lat, long], { icon: blinkingIcon }).addTo(map);
  }
  private cargarMunicipio(mun: any, color: any, Municipiocolor: any): void {
    this.http.get<any>(mun).subscribe({
      next: (data) => {
        const layer = L.geoJSON(data, {
          style: {
            color: color,
            weight: 2,
            fillOpacity: 0.5,
            fillColor: Municipiocolor,
          },
        });
        layer.addTo(this.map);
        this.geoLayers[mun.municipio] = layer;
      },
      error: (err) => {
        console.error(`Error al cargar el municipio ${mun.municipio}:`, err);
      },
    });
  }
  updateMapWidth(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const value = parseInt(inputElement.value, 10);
    const map1 = document.querySelector('#map1') as HTMLElement;
    const map2 = document.querySelector('#map2') as HTMLElement;
    if (map1 && map2) {
      map1.style.clipPath = `inset(0 ${100 - value}% 0 0)`;
      map2.style.clipPath = `inset(0 0 0 ${value}%)`;
    }
    const mapDivider = document.querySelector('.map-divider') as HTMLElement;

    const sliderValue = (event.target as HTMLInputElement).value;

    if (mapDivider) {
      // Obtenemos el ancho del contenedor padre de mapDivider o del mapa1 como alternativa
      let containerWidth;
      const parentElement = mapDivider.parentElement;

      if (parentElement) {
        containerWidth = parentElement.offsetWidth;
      } else if (map1) {
        // Si no hay padre, usamos el ancho total del mapa como referencia
        containerWidth = map1.offsetWidth * 2; // Multiplicamos por 2 ya que el mapa1 es la mitad
      } else {
        // Valor predeterminado en caso de que nada esté disponible
        containerWidth = window.innerWidth;
      }

      const dividerPosition = (containerWidth * value) / 100;
      mapDivider.style.left = `${dividerPosition}px`;
    }
    setTimeout(() => {
      if (this.map1 && this.map2) {
        this.map1.invalidateSize();
        this.map2.invalidateSize();
      }
    }, 100);
  }

  private cargarDepartamento(dep: any): void {
    this.http.get<any>(dep).subscribe((data) => {
      const layer = L.geoJSON(data, {
        style: {
          color: 'gold',
          weight: 2,
          fillOpacity: 0,
        },
      });
      layer.addTo(this.map);
      this.geoLayers[dep.departamento] = layer;
    });
  }
  agregarOverlayLupa(MunucipioSelecionado: any): void {
    const customIcon = L.icon({
      iconUrl: 'assets/png/Vector.png',
      iconSize: [50, 50],
      iconAnchor: [50, 50], // centro
    });
    L.marker([MunucipioSelecionado.latMun, MunucipioSelecionado.lonMun], {
      icon: customIcon,
    }).addTo(this.map);
    const customIcon2 = L.icon({
      iconUrl: 'assets/png/Polygon.png',
      iconSize: [110, 110],
      iconAnchor: [25, 25],
    });
    L.marker([MunucipioSelecionado.latMun, MunucipioSelecionado.lonMun], {
      icon: customIcon2,
    }).addTo(this.map);
    const customIcon3 = L.icon({
      iconUrl: 'assets/png/Ellipse.png',
      iconSize: [100, 100],
      iconAnchor: [5, -24],
    });
    L.marker([MunucipioSelecionado.latMun, MunucipioSelecionado.lonMun], {
      icon: customIcon3,
    }).addTo(this.map);
    const customIcon4 = L.icon({
      iconUrl: MunucipioSelecionado.png,
      iconSize: [60, 60],
      iconAnchor: [-12, -45],
    });
    L.marker([MunucipioSelecionado.latMun, MunucipioSelecionado.lonMun], {
      icon: customIcon4,
    }).addTo(this.map);
  }
  handleLocationSelection(MunucipioSelecionado: any): void {
    this.modalServiceState.cerrarFaunaFlora();
    this.modalServiceState.cerrarquemas();
    this.modalServiceState.cerrarfocos();
    if (this.mostrarMapa2 || this.mostrarMapa3) {
      this.mostrarMapa2 = false;
      this.mostrarMapa3 = false;

      setTimeout(() => {
        this.limpiarMapa();
        this.initMap();
        this.agregarOverlayLupa(MunucipioSelecionado);
        this.municipio = MunucipioSelecionado.municipio;
        const newCenter: L.LatLngExpression = [
          MunucipioSelecionado.latMun,
          MunucipioSelecionado.lonMun,
        ];
        this.map.flyTo(newCenter, 7.5);
      }, 0);
    }
    this.municipio = MunucipioSelecionado.municipio;
    const newCenter: L.LatLngExpression = [
      MunucipioSelecionado.latMun,
      MunucipioSelecionado.lonMun,
    ];
    this.map.flyTo(newCenter, 7.5);
    this.modalServiceState.mostrarCard();

    this.limpiarMapa();
    const departamentoEncontrado = this.departamentos.find(
      (dpts) => dpts.departamento === MunucipioSelecionado.departamento
    );
    const MunicipioEncontrado = this.municipios.find(
      (mun) => mun.municipio === MunucipioSelecionado.municipio
    );

    this.cargarDepartamento(departamentoEncontrado?.source);
    this.cargarMunicipio(
      MunicipioEncontrado?.source,
      '#FDE9A0',
      MunicipioEncontrado?.color
    );
    this.modalServiceState.mostrarTresBtn();
    this.agregarOverlayLupa(MunucipioSelecionado);
  }
  evaluamos(MunucipioSelecionado: any): void {
    const ciudadEncontrada = this.municipios.find(
      (ciudad) => ciudad.municipio === MunucipioSelecionado
    );
    if (ciudadEncontrada) {
      this.limpiarMapa();
      this.WMSVarios(ciudadEncontrada, 'focosCalor');
      this.visibilidadServiceVar.cerrarCard();
    }
  }
  toggleDepartamento(dep: any): void {
    if (dep.state) {
      this.map.removeLayer(this.geoLayers[dep.departamento]);
      dep.state = false;
    } else {
      this.cargarDepartamento(dep);
    }
  }
  private limpiarMapa(): void {
    this.map.eachLayer((layer: L.Layer) => {
      if (!(layer instanceof L.TileLayer)) {
        this.map.removeLayer(layer);
      }
    });
    this.departamentos.forEach((dep) => (dep.state = false));
  }
  locateUser(mesaje: string): void {
    if (!this.map) {
      return;
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          const userLocation = L.latLng(lat, lng);

          this.map.setView(userLocation, 16);

          // L.marker(userLocation).addTo(this.map)
          //   .bindPopup('Tu ubicación actual').openPopup();
        },
        (error: GeolocationPositionError) => {
          // Especifica el tipo de error

          let errorMessage = 'No se pudo obtener tu ubicación actual.';
        }
      );
    } else {
      alert('La geolocalización no es soportada por este navegador.');
    }
  }
  florafaura(x: string) {
    const ciudadEncontrada = this.municipios.find(
      (ciudad) => ciudad.municipio === this.municipio
    );
    if (x === 'flora') {
      this.WMSVarios(ciudadEncontrada, x);
    }
    if (x === 'reptiles') {
      this.WMSVarios(ciudadEncontrada, x);
    }
    if (x === 'mamiferos') {
      this.WMSVarios(ciudadEncontrada, x);
    }
  }
  regeneracion(x: string) {
    const ciudadEncontrada = this.municipios.find(
      (ciudad) => ciudad.municipio === this.municipio
    );
    if (x === 'activa') {
      this.WMSVarios(ciudadEncontrada, x);
    }
    if (x === 'pasiva') {
      this.WMSVarios(ciudadEncontrada, x);
    }
  }
  actualizarIndice(event: { indice: string; muni: string }) {
    const ciudadEncontrada = this.municipios.find(
      (ciudad) => ciudad.municipio === event.muni
    );
    if (event.indice == 'focosCalor') {
      this.WMSVarios(ciudadEncontrada, event.indice);
      this.modalServiceState.cerrarPrePost();
    }
    if (event.indice == 'nbr') {
      this.sidebysideWMS(ciudadEncontrada, event.indice);
    }
    if (event.indice == 'ndvi') {
      this.sidebysideWMS(ciudadEncontrada, event.indice);
    }
    if (event.indice == 'dnbr') {
      this.simpleWMS(ciudadEncontrada, event.indice);
      this.modalServiceState.cerrarPrePost();
    }
    if (event.indice == 'quemas') {
      this.sidebysideWMS(ciudadEncontrada, event.indice);
      this.modalServiceState.cerrarVistas();
    }
    if (event.indice == 'flora') {
      this.WMSVarios(ciudadEncontrada, event.indice);
      this.modalServiceState.cerrarVistas();
      this.modalServiceState.cerrarPrePost();
    }
    if (event.indice == 'AreasAfectadas') {
      this.WMSVarios(ciudadEncontrada, event.indice);
      this.modalServiceState.cerrarVistas();
    }
    if (event.indice == 'AreasRestauracion') {
      this.WMSVarios(ciudadEncontrada, event.indice);
      this.modalServiceState.cerrarVistas();
    }
    if (event.indice == 'pasiva') {
      this.WMSVarios(ciudadEncontrada, event.indice);
      this.modalServiceState.cerrarVistas();
    }
  }
  sidebysideWMS(muni: any, indice: string): void {
    this.modalServiceState.cerrarrege();
    this.modalServiceState.cerrarrestauracion();
    this.modalServiceState.cerrarafectadas();
    this.modalServiceState.cerrarFaunaFlora();
    this.modalServiceState.cerrarquemas();
    this.modalServiceState.cerrarfocos();
    this.mostrarRightBar = false;
    this.mostrarMapa2 = true;
    this.mostrarMapa3 = false;
    let layer1 = '';
    let layer2 = '';
    if (indice === 'nbr') {
      layer1 = muni!.wms.pre.nbr;
      layer2 = muni!.wms.post.nbr;
      this.tipoLeyenda = 'nbr';
      this.leyandaActiva = this.leyenda.NBR;
      this.mostrarLeyenda = true;
      this.modalServiceState.mostrarPrePost();
    }
    if (indice === 'ndvi') {
      layer1 = muni!.wms.pre.ndvi;
      layer2 = muni!.wms.post.ndvi;
      this.tipoLeyenda = 'ndvi';
      this.leyandaActiva = this.leyenda.NDVI;
      this.mostrarLeyenda = true;
      this.modalServiceState.mostrarPrePost();
    }
    if (indice === 'quemas') {
      layer1 = muni!.wms.quemas;
      layer2 = muni!.wms.focosCalor.lm;
      this.modalServiceState.mostrarquemas();
    }
    const bounds = L.latLngBounds(muni.bounds);
    setTimeout(() => {
      if (this.map1) {
        this.map1.remove();
      }
      if (this.map2) {
        this.map2.remove();
      }
      this.map1 = L.map('map1', {
        center: [-15.7, -67.3],
        zoom: 10,
        dragging: false,
        zoomControl: false,
        doubleClickZoom: false,
        scrollWheelZoom: false,
      });

      this.map2 = L.map('map2', {
        center: [-15.7, -67.3],
        zoom: 10,
        dragging: false,
        zoomControl: false,
        doubleClickZoom: false,
        scrollWheelZoom: false,
      });
      const baseLayerUrl =
        'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
      L.tileLayer(baseLayerUrl, {
        maxZoom: 18,
      }).addTo(this.map1);

      L.tileLayer(baseLayerUrl, {
        maxZoom: 18,
      }).addTo(this.map2);
      L.tileLayer
        .wms(this.direccionServidor, {
          layers: layer1,
          format: 'image/png',
          transparent: true,
          version: '1.1.0',
          attribution: 'GeoServer ACEAA',
        })
        .addTo(this.map1);
      L.tileLayer
        .wms(this.direccionServidor, {
          layers: layer2,
          format: 'image/png',
          transparent: true,
          version: '1.1.0',
          attribution: 'GeoServer ACEAA',
        })
        .addTo(this.map2);
      if (indice === 'quemas') {
        L.tileLayer
          .wms(this.direccionServidor, {
            layers: muni!.wms.focosCalor.lm,
            format: 'image/png',
            transparent: true,
            version: '1.1.0',
            attribution: 'GeoServer ACEAA',
          })
          .addTo(this.map1);
      }
      this.map1.fitBounds(bounds);
      this.map2.fitBounds(bounds);
    }, 0);
  }
  simpleWMS(muni: any, indice: string) {
    this.modalServiceState.cerrarrege();
    this.modalServiceState.cerrarrestauracion();
    this.modalServiceState.cerrarafectadas();
    this.modalServiceState.cerrarFaunaFlora();
    this.modalServiceState.cerrarquemas();
    this.modalServiceState.cerrarfocos();
    this.mostrarRightBar = false;
    this.mostrarMapa2 = false;
    this.mostrarMapa3 = true;
    let layer1 = '';
    if (indice == 'dnbr') {
      layer1 = muni!.wms.dnbr;
      this.tipoLeyenda = 'dnbr';
      this.leyandaActiva = this.leyenda.DNBR;
      this.mostrarLeyenda = true;
    }
    if (indice == 'focosCalor') {
      this.tipoLeyenda = 'focosCalor';
      layer1 = muni!.wms.focosCalor;
      this.leyandaActiva = this.leyenda.FocosCarlo;
      this.mostrarLeyenda = true;
      this.modalServiceState.mostrarfocos();
    }
    const bounds = L.latLngBounds(muni.bounds);
    setTimeout(() => {
      if (this.map3) {
        this.map3.remove();
      }
      this.map3 = L.map('map3', {
        center: [-15.7, -67.3],
        zoom: 10,
        dragging: true,
        zoomControl: false,
        doubleClickZoom: false,
        minZoom: 5,
        maxZoom: 15,
      });

      const baseLayerUrl =
        'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';

      L.tileLayer(baseLayerUrl, {
        maxZoom: 18,
      }).addTo(this.map3);

      L.tileLayer
        .wms(this.direccionServidor, {
          layers: layer1,
          format: 'image/png',
          transparent: true,
          version: '1.1.0',
          attribution: 'GeoServer ACEAA',
        })
        .addTo(this.map3);

      this.map3.fitBounds(bounds);
      this.map3.on('zoomend', () => {
        if (this.map3.getZoom() === 6) {
          this.map3.fitBounds(bounds);
        }
      });
    }, 0);
  }
  WMSVarios(muni: any, indice: string) {
    this.modalServiceState.cerrarrege();
    this.modalServiceState.cerrarrestauracion();
    this.modalServiceState.cerrarafectadas();
    this.modalServiceState.cerrarFaunaFlora();
    this.modalServiceState.cerrarquemas();
    this.modalServiceState.cerrarfocos();
    this.mostrarquemas = false;
    this.mostrarMapa2 = false;
    this.mostrarMapa3 = true;
    if (indice == 'focosCalor') {
      this.TipoMapa = muni!.wms.focosCalor;
      this.mostrarFaunaFlora = false;
      this.modalServiceState.mostrarfocos();
      this.tipoLeyenda = 'focosCalor';
      this.leyandaActiva = this.leyenda.FocosCarlo;
      this.mostrarLeyenda = true;
      this.modalServiceState.mostrarfocos();
    }
    if (indice == 'flora') {
      this.TipoMapa = muni!.wms.Flora;
      this.mostrarFaunaFlora = true;
    }
    if (indice == 'reptiles') {
      this.TipoMapa = muni!.wms.reptiles;
      this.mostrarFaunaFlora = true;
    }
    if (indice == 'mamiferos') {
      this.TipoMapa = muni!.wms.mamiferos;
      this.mostrarFaunaFlora = true;
    }
    if (indice == 'AreasAfectadas') {
      this.TipoMapa = muni!.wms.AreasAfectadas;
      this.modalServiceState.mostrarafectadas();
    }
    if (indice == 'AreasRestauracion') {
      this.TipoMapa = muni!.wms.restauracion;
      this.modalServiceState.mostrarrestauracion();
    }
    if (indice == 'pasiva') {
      this.TipoMapa = muni!.wms.regeneracionPasiva;
      this.modalServiceState.mostrarrege();
    }
    if (indice == 'activa') {
      this.TipoMapa = muni!.wms.regeneracionActiva;
      this.modalServiceState.mostrarrege();
    }
    const bounds = L.latLngBounds(muni.bounds);
    setTimeout(() => {
      if (this.map3) {
        this.map3.remove();
      }
      this.map3 = L.map('map3', {
        center: [-15.7, -67.3],
        zoom: 10,
        dragging: true,
        zoomControl: false,
        doubleClickZoom: false,
      });
      if (indice === 'activa') {
        const sanBorjaPoints = this.pulsePoints.filter(
          (point) => point.label === muni.municipio
        );
        sanBorjaPoints.forEach((point) => {
          this.PulseIcons(point.long, point.lat, this.map3, 'yellow', 8);
        });
      }
      this.map3.on('zoomend', () => {
        if (this.map3.getZoom() === 6) {
          this.map3.fitBounds(bounds);
        }
      });
      const baseLayerUrl =
        'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
      L.tileLayer(baseLayerUrl, {
        maxZoom: 18,
      }).addTo(this.map3);

      const wmsBaseUrl = this.direccionServidor;

      const defaultWmsOptions: WMSOptions = {
        format: 'image/png',
        transparent: true,
        version: '1.1.0',
        attribution: 'GeoServer ACEAA',
      };

      const wmsLayers: { [key: string]: L.TileLayer.WMS } = {};
      for (const layerName in this.TipoMapa) {
        if (this.TipoMapa.hasOwnProperty(layerName)) {
          const layerId = layerName as keyof typeof this.TipoMapa;
          const layers = this.TipoMapa[layerId];
          let layerOptions: WMSOptions = { ...defaultWmsOptions };

          // Aplica transparencia a capas específicas (ejemplo: 'b' y 'aq')
          if (layerName === 'ap') {
            layerOptions = { ...layerOptions, opacity: 0.6 };
          }
          if (layerName === 'ar') {
            layerOptions = { ...layerOptions, opacity: 0.8 };
          }
          if (layerName === 'b') {
            layerOptions = { ...layerOptions, opacity: 0.8 };
          }
          if (layerName === 'lm') {
            layerOptions = { ...layerOptions, opacity: 0.7 };
          }
          if (layerName === 'pcp') {
            layerOptions = { ...layerOptions, opacity: 0.7 };
          }
          if (layerName === 'r') {
            layerOptions = { ...layerOptions, opacity: 0.5 };
          }
          if (layerName === 'an') {
            layerOptions = { ...layerOptions, opacity: 0.5 };
          }
          if (layerName === 'ma') {
            layerOptions = { ...layerOptions, opacity: 0.5 };
          }
          if (layerName === 'av') {
            layerOptions = { ...layerOptions, opacity: 0.5 };
          }
          if (layerName === 'af') {
            layerOptions = { ...layerOptions, opacity: 0.7 };
          }
          if (layerName === 'tco') {
            layerOptions = { ...layerOptions, opacity: 0.7 };
          }
          wmsLayers[layerName] = L.tileLayer.wms(wmsBaseUrl, {
            layers: layers,
            ...(layerOptions as L.WMSOptions), // Aseguramos que cumpla con L.WMSOptions
          });
          wmsLayers[layerName].addTo(this.map3); // Initially add all layers
        }
      }
      this.map3.fitBounds(bounds);
    }, 0);
  }
  cerrarRB() {
    this.isvisible = false;
  }
}
