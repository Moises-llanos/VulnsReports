export const globalStyles = `

main {
   
    padding: 10px 20px 20px 5px;
   
}

h1, h2, h3, h4, h5, h6 {
    margin: 5px 0;
}

p {
    margin: 5px 0;
}

#card {
  position: relative;
  z-index: 1;
  margin-bottom: 25px;
}

.sub_new {
    background-color: #EE593A;
    width: 10px;
    height: 10px;
    border-radius: 50%;
}

.safe {
    background-color: #286140;
    color: #12c760;
    padding: 2px 3px;
    border-radius: 5px;
}

.width-100 {
    width: 100%;
}

.card {
    padding: 4px 10px;
    border: 1px solid #414148;
    background-color: #2C2C30;
    border-radius: 8px;
    margin: 8px 0;
    position: relative;
    z-index: 2;
    transition: width 300ms;
}

.card_succes {
    background-color: #323741;
    padding: 3px 8px;
    border-radius: 5px;
    position: relative;
    z-index: 2;
}

#card::before {
    content: "";
    position: absolute;
    width: 1px;
    height: calc(100% - 16px);
    top: 0;
    background-color: #F64D54;
    left: 10px;

    
}

.sub-card {
    position: relative;
    left: 20px;
    padding: 2px 10px;
    border-radius: 8px;
    border: 1px solid #414148;
    background-color: #2C2C30;
    width: calc(100% - 100px);
    margin: 5px 0;
    position: relative;
}

.sub-card::after {
    content: "";
    position: absolute;
    height: 1px;
    width: 10px;
    background-color: #F64D54;
    top: 0;
    bottom: 0;
    left: -10px;
    right: 0;
    margin: auto 0;
}



.card h2 {
    margin: 0;
    font-size: 15px;
}

.card img {
    height: 100%;
    max-height: 50px;
    max-width: 50px;
    width: 100%
    border-radius: 10px;
}

.card div p {
   margin-botton: 0;
}

.title_first {
    margin-top: 25px;
    margin-bottom: 10px;
}

.flex {
    display: flex;
}

.align-items-center {
    align-items: center;
}

.justify-content-center {
    justify-content: center;
}

.justify-content-between {
    justify-content: space-between;
}

.flex-wrap {
    flex-wrap: wrap;
}

.p-right-15 {
    padding-right: 15px;
}


.total_vulns {
    min-height: 20px;
    min-width: 20px;
    border-radius: 50%;
    background-color: #fff;
    color: #000;
    margin-left: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.gap-10 {
    gap: 10px
}

.divider {
    border-bottom: 2px solid #414148;
    margin: 10px 0;
}

.tag {
    padding: 0 5px;
    border-radius: 2px;
    margin-top: 2px;
}

.vulnerable {
    background-color: #D6AD5C;
    border: 1px solid #D6AD5C;
    color: #202427;
    font-weight: bold;
}

.bold {
    font-weight: bold;
}

.color-higt {
    color: #E16D6D;
}


.high {
    background-color: #F64D54;
    color: #000;
    
}

.medium {
    background-color: #FC9117;
    color: #000;
}

.low {
    background-color: #FFCE00;
    color: #000;
}

.none {
    background-color: #FFCE00;
    color: #000; 
}

.no_margin {
    margin: 0;
}

.no_padding {
    padding: 0
}

.no-border {
    border-radius: 0;
}



.margin-5 {
    margin: 5px 0;
}

.new_vul {
    border-left: 5px solid #F64D54;
}


.hidden-xs {
    @media (max-width: 570px){
        display: none;
    }
}

.hidden-xxs {
    @media (max-width: 400px){
        display: none;
    }
}

.hidden-sm {
    @media (max-width: 768px){
        display: none;
    }
}

.hidden-xxl {
    @media (max-width: 1366px){
        display: none;
    }
}

@media (max-width: 700px){
    .sub-card {
        display: none;
    }
}


@media (max-width: 500px) {
    .card div {
        display: block;
        margin: 5px 0;
    }

    .card div .tag {
        max-width: max-content;
    }

    
}

`;
