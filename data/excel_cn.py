#coding=utf-8
import xlrd
import json
import math
import psycopg2

conn = psycopg2.connect(database="china_population",user="postgres",password="hxx199329", host="127.0.0.1", port="5432")
print("Opend database successfully")
cur = conn.cursor()
# cur.execute('''CREATE TABLE POPULATION
#         (ID INT PRIMARY KEY     NOT NULL,
#          NAME    CHAR(50)    NOT NULL,
#          VALUE   INT     NOT NULL,
#          UPPER_REGION CHAR(50) NOT NULL
#         );''')
# print("Table created")
# conn.commit()


book = xlrd.open_workbook('population density.xlsx')
sheet = book.sheet_by_name('1-8')
set = set(['上海市', '河北省', '山西省', '内蒙古自治区', '辽宁省',
            '吉林省', '黑龙江省', '江苏省', '浙江省', '安徽省',
            '福建省', '江西省', '山东省', '河南省', '湖北省',
            '湖南省', '广东省', '广西壮族自治区', '海南省', '四川省',
            '贵州省', '云南省', '西藏自治区', '陕西省', '甘肃省',
            '青海省', '宁夏回族自治区', '新疆维吾尔自治区', '北京市', '天津市',
            '重庆市'])

#[{name,value,upperReigon}]
result = [] 
city = []
value = []
i = 6
while i<365:
    row = sheet.row_values(i)
    region= str.lstrip(row[0]) #城市省份名
    destiny = row[5].encode() #数值
    if len(region) == 0:
        i = i+6
    else:
        i = i+1
        city.append(region)
        value.append(int(float(destiny)))

curProv = city[0]
correctDict = {} #{errorName:correctName}
correctDict['景徳镇市'] = '景德镇市'
for i in range(len(city)):
    temp = {}
    if city[i] in correctDict:
        temp['name'] = correctDict[city[i]] #更正错误
    else:
        temp['name'] = city[i]
        
    temp['value'] = value[i]
    if city[i] in set:
        curProv = city[i]
        temp['upperReigon'] = '中国'
        
    else:
        temp['upperReigon'] = curProv
    
    cur.execute("""INSERT INTO POPULATION (ID,NAME,VALUE,UPPER_REGION) 
                VALUES(%s,%s,%s,%s);
                """,
                (i,temp['name'],temp['value'],temp['upperReigon']))
    # result.append((temp['name'],temp['value'],temp['upperReigon']))
print("All Data Saved")
conn.commit()
conn.close()
#json.dump(result,open('CN-Density.json','w'))
    



