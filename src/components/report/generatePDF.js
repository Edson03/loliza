import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'

const generatePDF = (cart,total) => {

    pdfMake.vfs = pdfFonts.pdfMake.vfs

    const reportTitle = [
        {
            text: 'Lista de produtos',
            fontSize: 15,
            bold: true,
            alignment: 'center',
            margin: [0, 25, 0, 35]
        }
    ]

    const dados = cart.map((item) => {
        return [
            {text: item.id, fontSize: 9, margin: [0, 2, 0, 2]},
            {text: item.type, fontSize: 9, margin: [0, 2, 0, 2]},
            {text: item.qtd, fontSize: 9, margin: [0, 2, 0, 2]},
            {text: 'R$'+item.price.toFixed(2).toString().replace('.', ','), fontSize: 9, margin: [0, 2, 0, 2]}
        ] 
    })

    const details = [
        {
            table:{
                headerRows: 1,
                widths: ['*', '*', '*', '*'],
                body: [
                    [
                        {text: 'ID', style: 'tableHeader', fontSize: 10},
                        {text: 'DESCRIÇÃO', style: 'tableHeader', fontSize: 10},
                        {text: 'QUANTIDADE', style: 'tableHeader', fontSize: 10},
                        {text: 'PREÇO', style: 'tableHeader', fontSize: 10}
                    ],
                    ...dados
                ]
            },
            layout: 'lightHorizontalLines'
        },
        {text: 'TOTAL: R$'+total.toFixed(2).toString().replace('.', ','), alignment: 'right', fontSize: 10, margin: [0, 15, 92, 0]}
    ]

    const footerLayout = (currentPage, pageCount) => {
        return [
            {
                text: currentPage + ' / ' + pageCount,
                alignment: 'right',
                fontSize: 9,
                margin: [0, 10, 20, 0]
            }
        ]
    }

    const pdfDefinitios = {
        pageSize: 'A4',
        pageMargins: [15, 50, 15, 40],

        header: [reportTitle],
        content: [details],
        footer: footerLayout
    }

    pdfMake.createPdf(pdfDefinitios).download()

}

export default generatePDF