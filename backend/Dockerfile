# Use the official .NET Core runtime as the base image
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build-env
WORKDIR /App

# Copy everything
COPY backend/. ./
# Restore as distinct layers
RUN dotnet restore Bite.sln
# Build and publish a release
RUN dotnet publish Bite.sln -c Release -o out

# Build runtime image
FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /App
COPY --from=build-env /App/out .
ENTRYPOINT ["dotnet", "Bite.API.dll"]