import * as React from 'react'
import styled from 'styled-components'

import { WHITE } from 'pages/shared/Colors'

const Container = styled.div`
  text-align: center;
`
const Preview = styled.span<{ large?: boolean }>`
  background: rgba(0,0,0,0.5);
  border-radius: 5px;
  box-sizing: border-box;
  color: ${WHITE};
  display: inline-block;
  font-size: ${props => (props.large ? '16px' : '12px')};
  margin-top: ${props => (props.large ? '10px' : '5px')};;
  padding: 4px 16px;
  text-align: center;
  width: ${props => (props.large ? 'auto' : '100%')};

`
interface Props {
  large?: boolean
}

export class Logo extends React.Component<Props, {}> {
  public render() {
    const width = this.props.large ? '250' : '163'

    return (
      <Container>
        <svg width={width} viewBox="0 0 163 28">
          <path
            fill="#FFF"
            fillRule="evenodd"
            d="M100.114984,65.4540073 C100.240193,66.343064 100.488093,67.0065284 100.855805,67.4469191 C101.529703,68.2474659 102.68357,68.6479192 104.319204,68.6479192 C105.29749,68.6479192 106.093,68.5421391 106.703934,68.3309387 C107.862478,67.9265276 108.44211,67.1745533 108.44211,66.074656 C108.44211,65.4324195 108.158231,64.9348212 107.590832,64.5833002 C107.022354,64.2400546 106.122144,63.9363865 104.890201,63.6726558 L102.784313,63.2106773 C100.714405,62.7533762 99.2917703,62.2557779 98.5182082,61.7196814 C97.2067507,60.8219896 96.5519214,59.4184241 96.5519214,57.5097047 C96.5519214,55.7679307 97.1927186,54.3208299 98.4757523,53.1680425 C99.7577065,52.0148953 101.64196,51.4392212 104.126713,51.4392212 C106.201659,51.4392212 107.971497,51.9821539 109.436587,53.0690986 C110.901318,54.1560432 111.669483,55.7326707 111.741083,57.8000603 L107.835134,57.8000603 C107.762455,56.6303625 107.239311,55.7988732 106.265702,55.3055924 C105.61627,54.9806964 104.809247,54.8177086 103.843913,54.8177086 C102.770281,54.8177086 101.913606,55.0285493 101.273528,55.4509502 C100.633451,55.873351 100.312872,56.4623376 100.312872,57.2193491 C100.312872,57.9141157 100.628773,58.4333018 101.260216,58.7765475 C101.665706,59.0057378 102.527059,59.2734262 103.843913,59.5817717 L107.25838,60.386636 C108.754054,60.738157 109.875899,61.2094902 110.622476,61.7984768 C111.78174,62.7141584 112.361731,64.0371294 112.361731,65.7709879 C112.361731,67.5476621 111.674161,69.0239064 110.301178,70.1986413 C108.926756,71.3730165 106.985655,71.9602041 104.478234,71.9602041 C101.917204,71.9602041 99.9027045,71.3816516 98.4361747,70.2249065 C96.9682057,69.0681613 96.2349408,67.4778616 96.2349408,65.4540073 L100.114984,65.4540073 Z M113.430434,59.88508 L113.430434,57.2060366 L115.436299,57.2060366 L115.436299,53.1943077 L119.157672,53.1943077 L119.157672,57.2060366 L121.493829,57.2060366 L121.493829,59.88508 L119.157672,59.88508 L119.157672,67.4864967 C119.157672,68.0754833 119.23215,68.4435549 119.382185,68.5885528 C119.53222,68.7335507 119.989161,68.8058698 120.754808,68.8058698 C120.868863,68.8058698 120.990474,68.8044306 121.117483,68.7997533 C121.24485,68.7947161 121.37006,68.7882398 121.493829,68.7796047 L121.493829,71.5906933 L119.712118,71.656536 C117.935444,71.7180612 116.721131,71.4107951 116.0699,70.7329389 C115.647499,70.3022627 115.436299,69.6377189 115.436299,68.7403869 L115.436299,59.88508 L113.430434,59.88508 Z M131.906191,64.4645675 C131.664768,64.6142427 131.421545,64.7351343 131.176524,64.8272421 C130.931503,64.9197098 130.594733,65.0053413 130.166936,65.0848563 L129.31098,65.2431667 C128.507915,65.3834872 127.931881,65.5551101 127.582159,65.7576754 C126.989214,66.1009211 126.693462,66.6334196 126.693462,67.3544515 C126.693462,67.9963281 126.874439,68.4611849 127.236395,68.7465034 C127.59727,69.0321817 128.037301,69.1757404 128.555768,69.1757404 C129.377902,69.1757404 130.134914,68.9382748 130.827522,68.4629839 C131.51977,67.9880528 131.878846,67.1216632 131.906191,65.8634555 L131.906191,64.4645675 Z M129.606013,62.7091212 C130.306537,62.6216907 130.806653,62.5112333 131.108523,62.379188 C131.648577,62.1499978 131.919144,61.7941592 131.919144,61.3102332 C131.919144,60.7212466 131.711901,60.3139572 131.297056,60.0898041 C130.882211,59.8652912 130.273435,59.7530347 129.471089,59.7530347 C128.570879,59.7530347 127.93296,59.9728703 127.558772,60.4129011 C127.291084,60.738157 127.111905,61.1785477 127.023395,61.732634 L123.39413,61.732634 C123.473285,60.4744263 123.826605,59.4410913 124.454449,58.6315496 C125.452524,57.3647068 127.166594,56.7311055 129.596658,56.7311055 C131.178323,56.7311055 132.583687,57.0430489 133.812032,57.6680151 C135.040377,58.2929813 135.653829,59.4713142 135.653829,61.2048128 L135.653829,67.8031175 C135.653829,68.2604186 135.662105,68.8148647 135.680095,69.4657362 C135.706719,69.959017 135.781197,70.2925482 135.904607,70.4688484 C136.028018,70.6455084 136.212953,70.7905063 136.458694,70.9042019 L136.458694,71.458648 L132.36781,71.458648 C132.253754,71.1682924 132.174599,70.8959266 132.130344,70.6404712 C132.086089,70.3850158 132.051189,70.0946602 132.024924,69.7694043 C131.502499,70.3324856 130.90128,70.8120941 130.219826,71.20787 C129.405247,71.6745258 128.485248,71.9076738 127.458749,71.9076738 C126.148371,71.9076738 125.067183,71.5360042 124.213026,70.7923053 C123.359229,70.0486063 122.932511,68.9958423 122.932511,67.6318544 C122.932511,65.8634555 123.619362,64.5833002 124.992705,63.7913886 C125.746118,63.3607124 126.854651,63.0523669 128.316503,62.8677914 L129.606013,62.7091212 Z M146.930494,56.7377617 C146.978706,56.742439 147.087365,56.7489154 147.253591,56.7575505 L147.253591,60.610969 C147.016125,60.5847039 146.804925,60.5667141 146.620709,60.558079 C146.435774,60.5498036 146.285739,60.5451263 146.172043,60.5451263 C144.659099,60.5451263 143.642675,61.0380472 143.123489,62.0228098 C142.832773,62.5772559 142.687775,63.4306927 142.687775,64.5834801 L142.687775,71.4588279 L138.900559,71.4588279 L138.900559,57.0741712 L142.489887,57.0741712 L142.489887,59.5815918 C143.070239,58.6230944 143.576832,57.9668259 144.007508,57.6153049 C144.71163,57.0263183 145.625872,56.7309256 146.752394,56.7309256 C146.822914,56.7309256 146.882281,56.7330843 146.930494,56.7377617 Z M149.537038,71.4589719 L149.537038,52.0069438 L153.297989,52.0069438 L153.297989,71.4589719 L149.537038,71.4589719 Z M156.659566,71.4589719 L156.659566,57.0743152 L160.473767,57.0743152 L160.473767,71.4589719 L156.659566,71.4589719 Z M156.659566,55.3588063 L156.659566,51.8882111 L160.473767,51.8882111 L160.473767,55.3588063 L156.659566,55.3588063 Z M172.512911,67.3742403 C173.117369,66.7096965 173.419958,65.6522551 173.419958,64.200477 C173.419958,62.8364891 173.1332,61.7984768 172.558965,61.0860801 C171.98509,60.3733236 171.215845,60.0171252 170.252671,60.0171252 C168.938335,60.0171252 168.031648,60.637414 167.531891,61.8779917 C167.26924,62.5378582 167.138274,63.3509979 167.138274,64.3192097 C167.138274,65.1553764 167.278234,65.897996 167.558156,66.5495871 C168.066548,67.7635399 168.978272,68.3708761 170.291888,68.3708761 C171.167992,68.3708761 171.908453,68.0391439 172.512911,67.3742403 Z M171.231676,57.0610387 C172.145559,57.4391846 172.883141,58.1346709 173.446223,59.1460583 L173.446223,57.0743511 L177.114706,57.0743511 L177.114706,70.7196264 C177.114706,72.5758156 176.802763,73.9747037 176.178156,74.9162906 C175.104164,76.5346545 173.04541,77.344556 170.001893,77.344556 C168.162614,77.344556 166.662983,76.9833205 165.50156,76.2622886 C164.340138,75.5412568 163.698261,74.4629473 163.574851,73.029159 L167.665735,73.029159 C167.771515,73.4691898 167.943138,73.7861704 168.180604,73.9790212 C168.585015,74.3226267 169.267188,74.4938898 170.226046,74.4938898 C171.580679,74.4938898 172.487366,74.0405464 172.944667,73.1349391 C173.243298,72.553868 173.393333,71.5777406 173.393333,70.2051177 L173.393333,69.2815205 C173.032097,69.8967722 172.645676,70.3587507 172.23191,70.6667363 C171.484613,71.2391723 170.511724,71.5248506 169.315401,71.5248506 C167.468207,71.5248506 165.991603,70.8761378 164.888108,69.5783525 C163.783893,68.2802074 163.231605,66.523322 163.231605,64.3062571 C163.231605,62.1679876 163.763384,60.3715246 164.826942,58.9150691 C165.89014,57.4586136 167.396248,56.7311055 169.347423,56.7311055 C170.067735,56.7311055 170.69558,56.8415629 171.231676,57.0610387 Z M190.603218,57.1533984 C191.326409,57.461384 191.918993,57.933077 192.38385,58.5673979 C192.777827,59.1045738 193.018171,59.6568612 193.105961,60.2246197 C193.193392,60.7927381 193.237647,61.7195734 193.237647,63.0054855 L193.237647,71.4588999 L189.39754,71.4588999 L189.39754,62.6996586 C189.39754,61.9239377 189.266575,61.2989715 189.004643,60.822961 C188.663916,60.1537399 188.017362,59.8191293 187.065341,59.8191293 C186.078779,59.8191293 185.330043,60.1519409 184.819132,60.8164847 C184.308222,61.4821079 184.052766,62.4301712 184.052766,63.6642725 L184.052766,71.4588999 L180.291815,71.4588999 L180.291815,52.0727146 L184.052766,52.0727146 L184.052766,58.9351097 C184.596059,58.0989431 185.224623,57.5164329 185.938099,57.1864996 C186.652654,56.8565664 187.40283,56.6914199 188.191863,56.6914199 C189.076962,56.6914199 189.880027,56.8461323 190.603218,57.1533984 Z M194.936605,59.88508 L194.936605,57.2060366 L196.942469,57.2060366 L196.942469,53.1943077 L200.664202,53.1943077 L200.664202,57.2060366 L203,57.2060366 L203,59.88508 L200.664202,59.88508 L200.664202,67.4864967 C200.664202,68.0754833 200.73868,68.4435549 200.888355,68.5885528 C201.03839,68.7335507 201.495332,68.8058698 202.260978,68.8058698 C202.375034,68.8058698 202.496645,68.8044306 202.623653,68.7997533 C202.751381,68.7947161 202.87623,68.7882398 203,68.7796047 L203,71.5906933 L201.218289,71.656536 C199.441614,71.7180612 198.227302,71.4107951 197.576071,70.7329389 C197.15367,70.3022627 196.942469,69.6377189 196.942469,68.7403869 L196.942469,59.88508 L194.936605,59.88508 Z M80.2971873,60.0742968 L51.5134821,60.0742968 L57.2702231,50 L86.0539284,50 L80.2971873,60.0742968 Z M68.7837052,73.0269642 L40,73.0269642 L45.756741,62.9526674 L74.5404463,62.9526674 L68.7837052,73.0269642 Z"
            transform="translate(-40 -50)"
          />
        </svg>
        <div>
          <Preview large={this.props.large}>developer preview</Preview>
        </div>
      </Container>
    )
  }
}
