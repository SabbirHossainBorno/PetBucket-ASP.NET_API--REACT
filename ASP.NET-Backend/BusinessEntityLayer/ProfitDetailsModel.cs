using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessEntityLayer
{
    public class ProfitDetailsModel
    {
        public int id { get; set; }
        public int customer_id { get; set; }
        public string name { get; set; }
        public System.DateTime date { get; set; }
        public string phone { get; set; }
        public decimal paid_amount { get; set; }
        public decimal given_amount { get; set; }
        public decimal other_cost { get; set; }
        public decimal total_cost { get; set; }
        public decimal profit { get; set; }
    }
}
