import styled from "styled-components";
import theme from "../../utils/theme";

export const Container = styled.div`
         background: ${theme.colors.pageBg};
         padding: 15px 2.5rem 0px 2.5rem;
         min-height: 100vh;

         .content {
           margin-top: 30px;
           display: flex;
           flex-wrap: wrap;
           width: 100%;

           .nav {
             width: 17%;
             height: 100%;

             .title {
               font-weight: bold;
             }

             .categories {
               display: flex;
               flex-direction: column;

               @media (max-width: 979px) {
                 flex-basis: 100%;
                 flex-direction: row;
                 margin-bottom: 10px;
                 margin-bottom: 20px;
               }
             }

             @media (max-width: 979px) {
               width: 100%;
               .title {
                 width: 100%;
                 text-align: center;
               }
             }
           }

           .list {
             width: 83%;
             display: flex;
             flex-wrap: wrap;
             padding-left: 20px;
             justify-content: center;

             .dropdown {
               padding-top: 5px;
               padding-bottom: 5px;
               width: 100%;
               text-align: right;
               margin-bottom: 20px;
               margin-right: 20px;

               select {
                 box-shadow: inset 0 -1px 0 #ddd;
                 appearance: none;
                 background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAMAAACelLz8AAAAJ1BMVEVmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmaP/QSjAAAADHRSTlMAAgMJC0uWpKa6wMxMdjkoAAAANUlEQVR4AeXJyQEAERAAsNl7Hf3X6xt0QL6JpZWq30pdvdadme+0PMdzvHm8YThHcT1H7K0BtOMDniZhWOgAAAAASUVORK5CYII=);
                 background-size: 13px;
                 background-repeat: no-repeat;
                 background-position: 100%;
                 min-width: 16rem;

                 :focus {
                   box-shadow: inset 0 -1.5px 0 #337ab7;
                 }
               }
             }

             @media (max-width: ${theme.deviceRes.tablet}) {
               width: 100%;
               padding-left: 0px;
             }
           }
         }
       `;
