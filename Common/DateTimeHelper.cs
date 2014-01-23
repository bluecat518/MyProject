using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Utils
{
    public class DateTimeHelper
    {
        public static DateTime GetConvertedTime(int time)
        {
            DateTime result;
            DateTime.TryParse(time.ToString(), out result);
            return result;            
        }
    }
}
