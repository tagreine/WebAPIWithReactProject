using System;
using System.Collections.Generic;

namespace WebAPIWithReactProject.Models;

public partial class NoteworthyTraveller
{
    public long Id { get; set; }

    public string TravellerName { get; set; } = null!;

    public string? TravellerClass { get; set; }

    public string? HomeRealm { get; set; }

    public long? Iq { get; set; }
}
