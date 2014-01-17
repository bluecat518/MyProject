using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Text;
using System.Data.SqlClient;
using AngDing.AdDBbase;
using System.Data;

namespace Web.Demo
{
    public partial class Demo4 : System.Web.UI.Page
    {
        DataAccess dataAccess = new DataAccess();

        protected void Page_Load(object sender, EventArgs e)
        {
                  
        }

        protected string DateTimeComapre()
        {
            StringBuilder sbMsg = new StringBuilder();
            DateTime t1 = new DateTime(2014, 1, 1, 12, 0, 0);
            DateTime t2 = new DateTime(2014, 1, 1, 12, 58, 0);

            //int ret =DateTime.Compare(t1, t2);
            int ret = t1.Subtract(t2).Days;

            if (ret > 0)
            {
                sbMsg.AppendLine("t1比t2时间值大");
            }
            else if (ret == 0)
            {
                sbMsg.AppendLine("t1比t2时间值相等");
            }
            else
            {
                sbMsg.AppendLine("t1比t2时间值小");
            }
            return sbMsg.ToString();
        }

        protected string LinqSample()
        {
            StringBuilder html = new StringBuilder();
            List<SummaryWord> list = new List<SummaryWord>();
            list.Add(new SummaryWord(1, "速度快", 1));
            list.Add(new SummaryWord(2, "大气漂亮", 1));
            list.Add(new SummaryWord(3, "电池不够用", 2));

            var query = from a in list
                        where (a.Type == 1)
                        select a;
            var queryList = query.ToList();
            foreach (var obj in queryList)
            {
                html.AppendLine("" + obj.SumName);
            }
            return html.ToString();
        }

    }

    #region DataAccess Layer
    public class DataAccess
    {
        public List<Base_Price> GetPriceQuotesByLabId(int labId)
        {
            List<Base_Price> list = new List<Base_Price>();
            SqlParameter[] p = {
                                    SqlHelper.MakeInParam("@labId",SqlDbType.Int,4,labId)
                               };
            using (SqlDataReader dr = SqlHelper.ExecuteReader(ICon.GetCnnString("NewSqlConnection"), CommandType.StoredProcedure, "Proc_GetPriceQuotesByLabId", p))
            {
                //DbDynamicEntityToList<Base_Price> builder = DbDynamicEntityToList<Base_Price>.CreateBuilder(dr);
                while (dr.Read())
                {
                    //list.Add(builder.Build(dr));
                    var obj = new Base_Price() { Price = AngDing.AdCommon.TypeConverter.ObjectToInt(dr["Price"]), InsertDate = AngDing.AdCommon.TypeConverter.StrToDateTime(dr["InsertDate"].ToString()) };
                    list.Add(obj);
                }
                dr.Close();
            }
            return list;
        }
    }
    #endregion

    #region Model
    public class SummaryWord
    {
        public SummaryWord(int sumId, string sumName, Int16 type)
        {
            //this._sumId = sumId;
            //this._sumName = sumName;
            //this._type = type;
            SumId = sumId;
            SumName = sumName;
            Type = type;
        }

        #region 之前的版本，注释掉
        //public int _sumId = 0;
        //public string _sumName = "";
        //public Int16 _type = 0;

        //public int SumId
        //{
        //    get { return _sumId; }
        //    set { _sumId = value; }
        //}
        //public string SumName
        //{
        //    get { return _sumName; }
        //    set { _sumName = value; }
        //}
        //public Int16 Type
        //{
        //    get { return _type; }
        //    set { _type = value; }
        //}
        #endregion

        public int SumId { get; set; }
        public string SumName { get; set; }
        public Int16 Type { get; set; }
    }

    public class Base_Price
    {
        public Base_Price()
        { }
        #region 成员字段和属性
        private int _priceid;
        private int _labid;
        private int _sourid;
        private string _sourcesitename;
        private int _price = 0;
        private DateTime _insertdate = DateTime.Now;
        private int _status = 1;
        /// <summary>
        /// 
        /// </summary>
        public int PriceID
        {
            set { _priceid = value; }
            get { return _priceid; }
        }
        /// <summary>
        /// 
        /// </summary>
        public int LabId
        {
            set { _labid = value; }
            get { return _labid; }
        }
        /// <summary>
        /// 
        /// </summary>
        public int SourID
        {
            set { _sourid = value; }
            get { return _sourid; }
        }
        /// <summary>
        /// 
        /// </summary>
        public string SourceSiteName
        {
            set { _sourcesitename = value; }
            get { return _sourcesitename; }
        }
        /// <summary>
        /// 以分为单位
        /// </summary>
        public int Price
        {
            set { _price = value; }
            get { return _price; }
        }
        /// <summary>
        /// 
        /// </summary>
        public DateTime InsertDate
        {
            set { _insertdate = value; }
            get { return _insertdate; }
        }
        /// <summary>
        /// 
        /// </summary>
        public int Status
        {
            set { _status = value; }
            get { return _status; }
        }
        #endregion Model

        #region 别名属性

        /// <summary>
        /// 产品平均价格
        /// </summary>
        public int AvgPrice { get; set; }

        /// <summary>
        /// 当前日期
        /// </summary>
        public DateTime CurrentDate { get; set; }

        /// <summary>
        /// 最低价
        /// </summary>
        public int LowestPrice { get; set; }

        #endregion

        #region 商城表属性
        /// <summary>
        /// 商城Logo路径
        /// </summary>
        public string LogoUrl { get; set; }
        #endregion

    }
    #endregion
}