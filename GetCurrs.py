import requests
import pandas as pd
import xml.etree.ElementTree as ET


def form_row_dict(date, path, HEADERS):
    row = {'date': date}
    
    for i in path.findall('./Valute'):
        char_code = i.find('CharCode').text
        vunit_rate = float(i.find('VunitRate').text.replace(',', '.'))
        if char_code in HEADERS:
            row[char_code] = vunit_rate
            
    return row


def main():
    URL = 'http://www.cbr.ru/scripts/XML_daily.asp'
    HEADERS = ["date", "BYR", "USD", "EUR", "KZT", "UAH", "AZN", "KGS", "UZS", "GEL"]

    STARTD = pd.to_datetime('2003-1-1')
    ENDD = pd.to_datetime('2025-1-1')
    
    result = []
    while STARTD <= ENDD:
        params = {
            'date_req': STARTD.strftime('%d/%m/%Y')
        }

        responce = requests.get(URL, params=params)
        date = STARTD.strftime('%Y-%m')
        path = ET.fromstring(responce.content)
        
        row_dict = form_row_dict(date, path, HEADERS)
        result.append(row_dict)
        STARTD += pd.DateOffset(months=1)
    
    DF = pd.DataFrame(result)
    DF = DF[HEADERS]
    DF.to_csv('currency.csv', index=False)

if __name__ == "__main__":
    main()