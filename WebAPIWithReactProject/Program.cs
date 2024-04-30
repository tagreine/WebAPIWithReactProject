﻿using Microsoft.EntityFrameworkCore;
using WebAPIWithReactProject.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddCors(option=>
    option.AddDefaultPolicy(policy =>
    {
        policy.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
    })
);
builder.Configuration.AddJsonFile("appsettings.json");
builder.Services.AddDbContext<TravellerDbContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection")));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
}

app.UseStaticFiles();
app.UseRouting();
app.UseCors();

app.MapControllers();

app.MapFallbackToFile("index.html");

app.Run();

