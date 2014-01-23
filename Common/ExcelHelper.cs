using System;
using System.Collections.Generic;
using System.Text;
using System.IO;
using NPOI;
using NPOI.HSSF.UserModel;
using NPOI.SS.UserModel;
using NPOI.HSSF.Util;
using System.Data;

namespace Utils
{
    public class ExcelHelper
    {
        public delegate void Procdure(int rowNum);
        /// <summary>
        /// Excel文件路径
        /// </summary>
        public string ExcelPath { get; set; }
        public HSSFWorkbook WorkBook { get; set; }
        public ISheet Sheet { get; set; }
        public int RowsCount 
        {
            get
            {
                return Sheet.LastRowNum + 1;
            }
        }
        
        public ExcelHelper(string excelPath)
        {
            this.ExcelPath = excelPath;
            FileStream fs = new FileStream(excelPath, FileMode.Open, FileAccess.ReadWrite);
            WorkBook = new HSSFWorkbook(fs);
            fs.Close();
            Sheet = WorkBook.GetSheetAt(0);
        }
        public IRow GetRow(int rowNum)
        {
            return Sheet.GetRow(rowNum);
        }
        /// <summary>
        /// 获取一行的所有单元格
        /// </summary>
        /// <param name="rowNum">行索引</param>
        /// <returns></returns>
        public List<ICell> GetColums(int rowNum)
        {
            IRow row = GetRow(rowNum);
            return row.Cells;
        }
        public DataRow GetDataRowByRow(int rowNum)
        {
            DataTable dt = new DataTable();
            
            List<ICell> list = GetColums(rowNum);
            dt.Columns.Add("Id", typeof(string));
            for (int i = 0; i < list.Count; i++)
            {
                dt.Columns.Add("Column" + i, typeof(string));
                
            }
            DataRow row = dt.NewRow();
            dt.Rows.Add(row);
            for (int i = 0; i < list.Count; i++)
            {
                string value = string.Empty;
                try
                {
                    if (list[i].CellType == CellType.STRING)
                        value = list[i].StringCellValue;
                    else if (list[i].CellType == CellType.NUMERIC)
                        value = list[i].NumericCellValue.ToString();
                }
                catch (Exception)
                {
                    value = "error";
                }
                dt.Rows[0][i] = value;
            }
            
            return row;
        }

        public string[] GetOnRowData(int rowNum)
        {
            List<ICell> list = GetColums(rowNum);
            string[] datas = null;
            if (list.Count > 0)
            {
                datas = new string[list.Count + 1];
                for (int i = 0; i < list.Count; i++)
                {
                    string value = string.Empty;
                    try
                    {
                        if (list[i].CellType == CellType.STRING)
                            value = list[i].StringCellValue;
                        else if (list[i].CellType == CellType.NUMERIC)
                            value = list[i].NumericCellValue.ToString();
                    }
                    catch (Exception)
                    {

                    }
                    datas[i] = value;
                }   
            }
            return datas;
        }

        public List<List<string>> GetDatas()
        {
            List<List<string>> dataList = new List<List<string>>();
            for (int i = 0; i <= Sheet.LastRowNum; i++)
            {
                List<ICell> cellList = GetColums(i);
                List<string> row = new List<string>();
                if (cellList.Count > 0)
                {
                    for (int j = 0; j < cellList.Count; j++)
                    {
                        string value = string.Empty;
                                               
                        if (cellList[j].CellType == CellType.STRING)
                            value = cellList[j].StringCellValue;
                        else if (cellList[j].CellType == CellType.NUMERIC)
                            value = cellList[j].NumericCellValue.ToString();

                        row.Add(value);
                    }
                }
                row.Add("");
                dataList.Add(row);
            }
            return dataList;
        }

        public void SetRowValue(int rowNum, DataRow row)
        {
            List<ICell> cellList = GetColums(rowNum);
            if (row.Table.Columns.Count >= cellList.Count)
            {
                for (int i = 0; i < cellList.Count; i++)
                {
                    string cellValue = string.Empty;
                    if (cellList[i].CellType == CellType.STRING)
                    {
                        cellValue = cellList[i].StringCellValue.Trim();
                    }
                    else if (cellList[i].CellType == CellType.NUMERIC)
                        cellValue = cellList[i].NumericCellValue.ToString().Trim();
                    if (row[i].ToString().Trim() != cellValue)
                    {
                        cellList[i].SetCellValue(row[i].ToString());
                    }
                }
            }
        }
        public void Each(Procdure proc)
        {
            for (int i = 0; i <= Sheet.LastRowNum; i++)
            {
                try
                {
                    proc(i);
                }
                catch (Exception)
                {
                    
                }
            }
        }
        /// <summary>
        /// 获取单元格的值

        /// </summary>
        /// <param name="rowNum">行索引</param>
        /// <param name="columnNum">列索引</param>
        /// <returns></returns>
        public string GetCell(int rowNum, int columnNum)
        {
            return GetRow(rowNum).GetCell(columnNum).StringCellValue;
        }
        /// <summary>
        /// 给单元格赋值

        /// </summary>
        /// <param name="rowNum">行索引</param>
        /// <param name="columnNum">列索引</param>
        /// <param name="value">值</param>
        public void SetCellValue(int rowNum, int columnNum, string value)
        {
            GetRow(rowNum).GetCell(columnNum).SetCellValue(value);

        }
        public void SetCellVal(int rowNum, int columnNum, string value)
        {
            if (GetCell(rowNum, columnNum) == "")
                GetRow(rowNum).GetCell(columnNum).SetCellValue(value);
        }
        /// <summary>
        /// 给行设置边框
        /// </summary>
        /// <param name="rowNum">行索引</param>
        public void SetBorderColor(int rowNum)
        {
            IRow row = Sheet.GetRow(rowNum);
            ICellStyle style = WorkBook.CreateCellStyle();
            style.BorderBottom = BorderStyle.THIN;
            style.BorderLeft = BorderStyle.THIN;
            style.BorderRight = BorderStyle.THIN;
            style.BorderTop = BorderStyle.THIN;
            List<ICell> columns = row.Cells;
            if (columns != null)
            {
                if (columns.Count > 0)
                {
                    foreach (ICell cell in columns)
                    {
                        cell.CellStyle = style;
                    }
                }
            }
            
        }
        /// <summary>
        /// 设置字体
        /// </summary>
        /// <param name="rowNum"></param>
        /// <param name="fontName"></param>
        /// <param name="fontSize"></param>
        public void SetFontStyle(int rowNum, string fontName, short fontSize)
        {
            IFont font = WorkBook.CreateFont();
            font.FontName = fontName;
            font.FontHeightInPoints = fontSize;
            font.Color = HSSFColor.RED.index;
            ICellStyle style = WorkBook.CreateCellStyle();
            style.SetFont(font);
            List<ICell> cellList = GetColums(rowNum);
            if (cellList != null)
            {
                foreach (ICell cell in cellList)
                {
                    cell.CellStyle = style;
                }
            }
        }
        /// <summary>
        /// 保存文件
        /// </summary>
        public void Save()
        {
            FileStream fs = new FileStream(ExcelPath, FileMode.Open, FileAccess.Write);
            WorkBook.Write(fs);
            fs.Close();
        }
        /// <summary>
        /// 文件另存为
        /// </summary>
        /// <param name="path">路径</param>
        public void SaveAs(string path)
        {
            FileStream fs = new FileStream(path, FileMode.Open, FileAccess.Write);
            WorkBook.Write(fs);
            fs.Close();
        }
        /// <summary>
        /// 释放内存
        /// </summary>
        public void Close()
        {
            Sheet = null;
            WorkBook = null;
            GC.Collect();
        }
    }
}
